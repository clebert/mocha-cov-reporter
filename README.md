# mocha-cov-reporter [![Build Status](https://travis-ci.org/clebert/mocha-cov-reporter.png?branch=master)](https://travis-ci.org/clebert/mocha-cov-reporter) [![Code Climate](https://codeclimate.com/github/clebert/mocha-cov-reporter.png)](https://codeclimate.com/github/clebert/mocha-cov-reporter) [![NPM version](https://badge.fury.io/js/mocha-cov-reporter.png)](http://badge.fury.io/js/mocha-cov-reporter)

A code coverage reporter for [Mocha](http://visionmedia.github.io/mocha/) with [Blanket.js](http://blanketjs.org).

## Installation

    $ npm install mocha-cov-reporter --save-dev

## Usage

Add the following to your project's package.json file:

    "config": {
        "mocha-cov-reporter": {
            "threshold": 100,
            "useColors": true
        }
    }

## Running the tests

To run the test suite first install the development dependencies:

    $ npm install

then run the tests:

    $ npm test

## License

Licensed under the MIT license.
