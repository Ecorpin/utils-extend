## NOTE : This is a patch version of ```utils-extend``` module, used to extend the nodejs util module. 
patch version has fixes related to fix the github security :
- [Prototype Pollution](https://github.com/advisories/GHSA-6pq3-928q-x6w6)
- [utils-extend Prototype Pollution](https://github.com/advisories/GHSA-7qgg-vw88-cc99)


[![npm version](https://badge.fury.io/js/utils-extend.svg)](http://badge.fury.io/js/@Ecorpin/utils-extend)
[![npm](https://img.shields.io/npm/l/utils-extend.svg)](https://www.npmjs.com/package/utils-extend)


Extend nodejs util api, and it is light weight and simple.
```
var util = require('utils-extend');
```
### install
```
npm install utils-extend --save
```
## API
### util
Extend api in nodejs util module, 

### util.extend
Deep clone soure object to target
```js
var target = {};
var source = {
  k: 'v',
  k2: []
};
var source2 = {
  k3: { }  
};

util.extend(target, source, source2);
```

### util.isObject
Check target is object, array and function return false.

### util.isArray
Chck target is array
```
uitl.isArray = Array.isArray

```
### util.isNumber

### util.isDate

### util.isRegExp

### util.isFunction

### util.isString

### util.isUndefined

### util.noop
Empty function

### util.unique
Make array unique.
```
var arr = [4, 5, 5, 6];
var result = uitl.unique(arr);
```
### util.pick
Return a copy of the object with list keys
```js
util.pick({ key: 'value' }, 'key');
util.pick({ key: 'value' }, function(value, key, object) { });
```

### util.escape
Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
```js
var html = '<div></div>'
var result = util.escape('<div></div>')
```

### util.unescape
The opposite of escape

### util.path.isAbsolute
Return true is path isabsolute, otherwise return false.
```
util.path.isAbsolute('C:\\file\\path');          // windows
util.path.isAbsolute('/file/path');              // unix
```

### util.path.unixifyPath
Normalize \ paths to / paths.
