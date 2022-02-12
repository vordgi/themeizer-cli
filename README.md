# Themeizer CLI
A cli tool to automatically replace published colors (as well as linear and radial gradients) in style files with a css variable

Themeizer ecosystem helper package.

## Features
Automatic replacement of all colors, as well as linear and radial gradients.

Support: css, sass, scss, styl.

## Installation
```bash
$ npm install themeizer-cli -g
```

## Options
```
'--help', '-h' {Boolean} - help
'--config', '-c' {String} - configuration file path
'--url', '-u' {String} - url to load and read colors
'--headers', '-h' {String} - necessary headers for getting colors
'--theme', '-t' {String} - a theme from which to check and replace colors
```

## Usage
1. By specifying the path to the configuration file to the utility:

```json
// themeizer.config.json
{
    "url":"https://example.com/api/themes",
    "headers":{
        "token":"example-token"
    },
    "theme": "light"
}
```

```bash
themeizer-cli -c ./themeizer.config.json
```

2. By specifying parameters via options:

```bash
themeizer-cli -u "https://example.com/api/themes" -t "light" -h {"token":"example-token"}
```

## Themeizer ecosystem
* [Figma plugin "Themeizer"](https://www.figma.com/community/plugin/1065764293242137356/Themeizer) - plugin for changing themes in design and publishing them in the cloud;
* [themeizer](https://www.npmjs.com/package/themeizer) - package for embedding themes from "Themeizer" Figma plugin at the server level or at build stage;
* [next-themeizer](https://www.npmjs.com/package/next-themeizer) - package for adding "Themeizer" ecosystem interaction configuration to your next.js application;
* [themeizer-cli](https://www.npmjs.com/package/themeizer-cli) - a package to automatically replace published colors (as well as linear and radial gradients) in style files with a css variable;
* [stylelint-themeizer](https://www.npmjs.com/package/stylelint-themeizer) - stylelint plugin for "Themeizer" ecosystem.

## License

[MIT](https://github.com/vordgi/themeizer-cli/blob/main/LICENSE)