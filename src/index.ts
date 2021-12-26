#! /usr/bin/env node

import glob from 'glob';
import fs from 'fs/promises';
import path from 'path';
import arg from 'arg';
import getSortedThemeColors from './lib/getSortedThemeColors';
import replace from './lib/replace';
import loadColors from './lib/loadColors';

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
    const colors = await loadColors(config);
    const colorsSorted = getSortedThemeColors(colors, config.theme);

    glob("**/*.+(css|sass|scss|styl)", { cwd: process.cwd(), absolute: true, realpath: true, ignore: [] }, async (_er, files) => {
        const filesCount = files.length;
        for (let i = 0; i < filesCount; i++) {
            const file = files[i];
            const fileContent = await fs.readFile(file, 'utf-8');
            const newFileContent = await replace(fileContent, colorsSorted);
            await fs.writeFile(file, newFileContent);
        }
        process.exit();
    })
})();
