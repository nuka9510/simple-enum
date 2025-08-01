[![LICENSE][license]][license-url]
[![GITHUB-VERSION][github-version]][github-version-url]
[![NPM-VERSION][npm-version]][npm-version-url]
![GITHUB-LAST-COMMIT][github-last-commit]
![NPM-LAST-UPDATE][npm-last-update]
![GITHUB-REPO-SIZE][github-repo-size]
![NPM-UNPACKED-SIZE][npm-unpacked-size]
![JSDELIVR-DOWNLOAD][jsdelivr-download]
![NPM-DOWNLOAD][npm-download]
![TOP-LANGUAGE][top-language]

[license]: https://img.shields.io/npm/l/%40nuka9510%2Fsimple-enum
[license-url]: https://github.com/nuka9510/simple-enum/blob/main/LICENSE

[github-version]: https://img.shields.io/github/package-json/v/nuka9510/simple-enum?logo=github
[github-version-url]: https://github.com/nuka9510/simple-enum

[npm-version]: https://img.shields.io/npm/v/%40nuka9510%2Fsimple-enum?logo=npm
[npm-version-url]: https://www.npmjs.com/package/@nuka9510/simple-enum

[github-last-commit]: https://img.shields.io/github/last-commit/nuka9510/simple-enum?logo=github

[npm-last-update]: https://img.shields.io/npm/last-update/%40nuka9510%2Fsimple-enum?logo=npm

[github-repo-size]: https://img.shields.io/github/repo-size/nuka9510/simple-enum?logo=github

[npm-unpacked-size]: https://img.shields.io/npm/unpacked-size/%40nuka9510%2Fsimple-enum?logo=npm

[jsdelivr-download]: https://img.shields.io/jsdelivr/npm/hm/%40nuka9510/simple-enum?logo=jsdelivr

[npm-download]: https://img.shields.io/npm/dm/%40nuka9510%2Fsimple-enum?logo=npm

[top-language]: https://img.shields.io/github/languages/top/nuka9510/simple-enum

## Install
```
npm i @nuka9510/simple-enum
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum@latest/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum@<specific-version>/dist/js/index.min.js"> </script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum@latest/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum@<specific-version>/dist/esm/index.min.mjs" }
  }
</script>
```
## Usage
### js
```
class TestEnum extends simpleEnum.Enum {
  static #A = new TestEnum('A');

  static #B = new TestEnum('B');

  static get A() { return TestEnum.#A; }

  static get B() { return TestEnum.#B; }

  constructor(value) { super(value); }
}
```
### mjs
```
import { Enum } from "@nuka9510/simple-enum";

class TestEnum extends Enum {
  static #A = new TestEnum('A');

  static #B = new TestEnum('B');

  static get A() { return TestEnum.#A; }

  static get B() { return TestEnum.#B; }

  constructor(value) { super(value); }
}
```
### cjs (> 1.1.0)
```
const simpleEnum = require('@nuka9510/simple-enum');

class TestEnum extends simpleEnum.Enum {
  static #A = new TestEnum('A');

  static #B = new TestEnum('B');

  static get A() { return TestEnum.#A; }

  static get B() { return TestEnum.#B; }

  constructor(value) { super(value); }
}
```
### example
```
example
├── js
│  └── case_1.mjs
└── view
   └── case_1.html
```
- `js/case_1.mjs`
```
import { Enum } from "@nuka9510/simple-enum";

class TestEnum extends Enum {
  static #A = new TestEnum('A');

  static #B = new TestEnum('B');

  static get A() { return TestEnum.#A; }

  static get B() { return TestEnum.#B; }

  constructor(value) { super(value); }
}

const e = TestEnum.valueOf('A');

switch (e) {
  case TestEnum.A: console.log('A', e.value, TestEnum.A.value); break;
  case TestEnum.B: console.log('B', e.value, TestEnum.B.value); break;
}
```
- `view/case_1.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-enum/dist/esm/index.min.mjs" }
  }
</script>
<script src="../js/case_1.mjs" type="module"></script>
</html>
```