# @tlylt/markdown-it-imsize
(Patched to fix behaviors that are now inconsistent with the latest markdown-it)

[![Test](https://github.com/tlylt/markdown-it-imsize/actions/workflows/ci.yml/badge.svg)](https://github.com/tlylt/markdown-it-imsize/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@tlylt/markdown-it-imsize.svg?style=flat)](https://www.npmjs.org/package/@tlylt/markdown-it-imsize)

> A markdown-it plugin for size-specified image markups. This plugin overloads original image renderer of markdown-it.

## Usage

#### Enable plugin

```js
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typography: true
}).use(require('@tlylt/markdown-it-imsize')); // <-- this use(package_name) is required
```

#### Example

```md
![test](image.png =100x200)
```

is interpreted as

```html
<p><img src="image.png" alt="test" width="100" height="200"></p>
```

## Options

#### Auto fill

```js
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typography: true
}).use(require('@tlylt/markdown-it-imsize'), { autofill: true });
```

will fill the width and height fields automatically if the specified image path is valid.

Therefore,

```md
![test](image.png)
```

is interpreted as

```html
<p><img src="image.png" alt="test" width="200" height="200"></p>
```

where ```image.png``` is a valid path and its size is 200 x 200.

