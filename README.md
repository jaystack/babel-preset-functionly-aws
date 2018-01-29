# babel-preset-functionly-aws

> Babel preset for [Functionly](https://www.npmjs.com/package/functionly) AWS projects.

## Install

```sh
$ npm install --save-dev babel-preset-functionly-aws
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["functionly-aws"]
}
```

### Via CLI

```sh
$ babel script.js --presets functionly-aws
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['functionly-aws'],
});
```