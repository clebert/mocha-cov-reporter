**THIS PROJECT IS NO LONGER MAINTAINED by clebert.**

# mocha-cov-reporter

> [Deprecated] A code coverage reporter for [Mocha](http://visionmedia.github.io/mocha/)/[Blanket.js](http://blanketjs.org).

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
