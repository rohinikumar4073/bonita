# Bonita BPM Javascript Coding Style

Bonita BPM enforces Javascript coding style through the use of [JSCS](http://jscs.info).

This packages provides a "Bonita BPM" preset.

## Installation

1. Install [JSCS](http://jscs.info/overview#installation):
2. Install [jscs-preset-bonita](https://www.npmjs.com/package/jscs-preset-bonita);
3. Create a .jscsrc where you need it;
4. Set "preset" property to "bonita":

```json
{
    "preset": "bonita"
}
```

**Note:** Currently jscs-preset-bonita needs to be installed locally in the project, with ```npm install jscs-preset-bonita```. There is a PR (https://github.com/jscs-dev/node-jscs/pull/1807) to allow global node modules (so it can be installed only once with ```npm install -g jscs-preset-bonita```).
