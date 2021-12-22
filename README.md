# Themeizer CLI
A package for automatically replacing linear colors with css variables.

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

## License

[MIT](https://github.com/vordgi/themeizer-cli/blob/main/LICENSE)