# babel-preset-bonita

> Babel preset for all Bonita plugins.

## Install

```sh
$ npm install --save-dev babel-preset-bonita
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["bonita"]
}
```

### Via CLI

```sh
$ babel script.js --presets bonita 
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["bonita"]
});
```
