#! /usr/bin/env node

import glob from 'glob';
import fs from 'fs/promises';
import path from 'path';
import Themeizer from 'themeizer/dist/server/Wrapper';
import ThemeizerPlugin from 'themeizer/dist/webpack/plugin';
import arg from 'arg';

const args = arg({
	'--help': Boolean,
	'--config': String,
    '--url': String,
    '--headers': String,
    '--theme': String,

	'-h': '--help',
	'-c': '--config',
    '--u': '--url',
    '--h': '--headers',
    '--t': '--theme'
});

const help = `
    '--help', '-h' {Boolean} - help
    '--config', '-c' {String} - configuration file path
    '--url', '-u' {String} - url to load and read colors
    '--headers', '-h' {String} - necessary headers for getting colors
    '--theme', '-t' {String} - theme from which to check and replace colors
`

if (args['--help']) {
    console.log(help);
    process.exit();
}

const from10To16 = (n: number) => {
    const number16 = n.toString(16);
    return number16.length === 1 ? `0${number16}` : number16;
}

const rgbToHex = (r: number, g: number, b: number) => {
    return `#${from10To16(r)}${from10To16(g)}${from10To16(b)}`;
}

const hexToRegExpRow = (hex: string) => {
    return hex.split('').map(s => s.match(/[a-zA-Z]/) ? `[${s.toLowerCase()}${s.toUpperCase()}]` : s).join('');
}

(async () => {
    let config;
    if (args['--config']) {
        const configPath = path.resolve(process.cwd(), args['--config']);
        config = require(configPath);
    } else if (args['--url'] && args['--theme'] && args['--headers']) {
        config = {
            url: args['--url'],
            theme: args['--theme'],
            headers: JSON.parse(args['--headers'])
        };
    } else {
        throw new Error('Please, provide configuration options. Use "--help" option for more information');
    }
    // eslint-disable-next-line no-new
    new ThemeizerPlugin(config);

    const themeizer = await Themeizer.init();
    const colors = themeizer.cssVariablesObj;
    const priority = {
        solid: 0,
        radial: 1,
        linear: 2
    }
    const colorsSorted = colors.sort((a, b) => {
        return priority[b.type] - priority[a.type];
    });

    glob("**/*.+(css|sass|scss|styl)", { cwd: process.cwd(), absolute: true, realpath: true, ignore: [] }, async (_er, files) => {
        const filesCount = files.length;
        for (let i = 0; i < filesCount; i++) {
            const file = files[i];
            let fileContent = await fs.readFile(file, 'utf-8');
            colorsSorted.forEach((color) => {
                const colorTestRow = color.origValue.replace(/rgba?\(([^)]*)\)/g, (s, g1) => {
                    const variants = [s.replace(/\(|\)/g, '\\$&')];
                    const [r, g, b, a] = g1.split(/, ?/);
                    if (!a) {
                        const hexColor = rgbToHex(+r, +g, +b);
                        variants.push(hexToRegExpRow(hexColor));
                        if (hexColor.substring(1, 4) === hexColor.substring(4)) {
                            variants.push(hexToRegExpRow(hexColor).substring(0, 4));
                        }
                    }
                    return `(${variants.join('|')})`;
                });

                const regexRowFixed = colorTestRow.split(/, ?/).join(', ?');
                let regex: RegExp;
                if (color.type === 'linear') {
                    regex = new RegExp(`linear-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
                    fileContent = fileContent.replace(regex, (_s, g1) => {
                        let result = `var(${color.name})`;
                        if (g1) {
                            result = `/* ${color.name}_setting: ${g1.replace(/, ?/, '')} */ ${result}`;
                        }
                        return result;
                    });
                } else if (color.type === 'radial') {
                    regex = new RegExp(`radial-gradient\\(([^,]*, ?)?${regexRowFixed}\\)`, 'gm');
                    fileContent = fileContent.replace(regex, (_s, g1) => {
                        let result = `var(${color.name})`;
                        if (g1) {
                            result = `/* ${color.name}_setting: ${g1.replace(/, ?/, '')} */ ${result}`;
                        }
                        return result;
                    });
                } else {
                    regex = new RegExp(regexRowFixed, 'gm');
                    fileContent = fileContent.replace(regex, `var(${color.name})`);
                }
            })
            await fs.writeFile(file, fileContent);
        }
        process.exit();
    })
})();
