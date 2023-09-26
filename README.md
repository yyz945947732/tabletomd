# tabletomd

> Tabletomd attempts to convert local or remote HTML tables into Markdown Table with a very low footprint.

<p>
  <a href="https://www.npmjs.com/package/tabletomd">
    <img src="https://img.shields.io/npm/v/tabletomd.svg" alt="Version" />
  </a>
  <a href="https://coveralls.io/github/yyz945947732/tabletomd?branch=master">
    <img
      src="https://coveralls.io/repos/github/yyz945947732/tabletomd/badge.svg?branch=master"
      alt="Coverage Status"
    />
  </a>
  <a href="https://github.com/yyz945947732/tabletomd/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="https://github.com/yyz945947732/tabletomd/blob/master/LICENSE">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

## Basic usage

Install via npm

```sh
npm install tabletomd --save
```

### Local (`convert`)

```typescript
import { convert } from 'tabletomd';
import fs from 'fs';
import path from 'path';
const html = fs.readFileSync(path.resolve(process.cwd(), './test/table.html'), {
  encoding: 'utf-8',
});
const converted = convert(html);
console.log(converted);
// |          Company           |     Contact     | Country |
// |:---------------------------|:----------------|:--------|
// |    Alfreds Futterkiste     |  Maria Anders   | Germany |
// | Centro comercial Moctezuma | Francisco Chang | Mexico  |
```

### Remote (`convertUrl`)

```typescript
import { convertUrl } from 'tabletomd';

const markdown = await convertUrl('https://www.npmjs.com/package/rc-table');
```

## Credits

The following node libraries make this utility super easy:

- [tabletojson](https://github.com/maugenst/tabletojson)
- [mdtable](https://github.com/Jamesford/mdtable)

## LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)

---

This project is created using [generator-stupid](https://github.com/yyz945947732/generator-stupid).
