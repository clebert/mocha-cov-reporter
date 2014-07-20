# mocha-cov-reporter

> A code coverage reporter for [Mocha](http://visionmedia.github.io/mocha/)/[Blanket.js](http://blanketjs.org).

[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/clebert/mocha-cov-reporter/master/LICENSE)
[![npm](http://img.shields.io/npm/v/mocha-cov-reporter.svg?style=flat)](https://www.npmjs.org/package/mocha-cov-reporter)
[![downloads](http://img.shields.io/npm/dm/mocha-cov-reporter.svg?style=flat)](https://www.npmjs.org/package/mocha-cov-reporter)

[![build](http://img.shields.io/travis/clebert/mocha-cov-reporter/master.svg?style=flat)](https://travis-ci.org/clebert/mocha-cov-reporter)
[![code climate](http://img.shields.io/codeclimate/github/clebert/mocha-cov-reporter.svg?style=flat)](https://codeclimate.com/github/clebert/mocha-cov-reporter)
[![dependencies](http://img.shields.io/david/clebert/mocha-cov-reporter.svg?style=flat)](https://david-dm.org/clebert/mocha-cov-reporter#info=dependencies&view=table)
[![devDependencies](http://img.shields.io/david/dev/clebert/mocha-cov-reporter.svg?style=flat)](https://david-dm.org/clebert/mocha-cov-reporter#info=devDependencies&view=table)

## Getting Started

### Installation

```sh
npm install mocha-cov-reporter --save-dev
```

### Integration

Please add the following fields to your project's `package.json` file:

```json
{
    "config": {
        "mocha-cov-reporter": {
            "failOnError": true,
            "threshold": 100,
            "useColors": true
        }
    }
}
```

## Sample Output

```
Coverage succeeded: 100% >= 100% (SLOC 85)
```

```
Coverage below threshold: 75% < 100% (SLOC 85)
```

## Running Tests

To run the test suite first install the development dependencies:

```sh
npm install
```

then run the tests:

```sh
npm test
```
