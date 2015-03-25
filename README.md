# WNO

[![npm](https://img.shields.io/npm/v/wno.svg?style=plastic)](https://npmjs.org/package/wno) [![travis](https://img.shields.io/travis/willin/node-wno.svg)](https://travis-ci.org/willin/node-wno) [![npm](https://img.shields.io/npm/dm/wno.svg?style=plastic)](https://npmjs.org/package/wno) [![coverage](https://img.shields.io/coveralls/willin/node-wno.svg)](https://coveralls.io/repos/willin/node-wno)

## Installation

```
npm install wno
```

## Functions 

| Name              | Desc                  |
|:-----------------:|:---------------------:|
|ipv42int           | Convert IPV4 to INT   |
|int2ipv4           | Convert Int to IPV4   |
|getTimestamp       | Get Unix Timestamp    |

## Usage

```js
var wno = require('wno');

console.log(wno.ipv42int('127.0.0.1'));
//2130706433

console.log(wno.int2ipv4(2130706433));
//'127.0.0.1'

console.log(wno.getTimestamp('2014-03-03 12:48:00'));
//1393822080

console.log(wno.getTimestamp());
//Now
```

## Contributors

```
 project  : wno
 repo age : 2 hours
 active   : 1 days
 commits  : 3
 files    : 11
 authors  : 
     3  Willin Wang  100.0%
```

## LICENSE

MIT