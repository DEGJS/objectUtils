# objectUtils
A utility library for working with JavaScript objects.

## Install
[![Build Status](https://travis-ci.org/DEGJS/objectUtils.svg?branch=master)](https://travis-ci.org/DEGJS/objectUtils)

objectUtils is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) as part of your Javascript workflow.

If you're already using NPM for your project, you can install objectUtils with the following command:

```
$ npm install @degjs/object-utils
```

## Usage

### Importing individual objectUtils methods:
```js
import { ensureArray } from "@degjs/object-utils";

let guaranteedArray = ensureArray(possibleArray);
```

### Importing all objectUtils methods:
```js
import * as objectUtils from "@degjs/object-utils";

let guaranteedArray = objectUtils.ensureArray(possibleArray);
```

## Methods

### ensureArray(obj)
The ensureArray method returns a guaranteed array, regardless of the paramater passed into it.

#### obj
Type: `Array` or `String`  
The potential array to test.

### assignDeep(target, source)
The assignDeep method copies the values of a source object to a target object. Unlike [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), assignDeep does a proper deep clone of nested objects.

#### target
Type: `Object`  
The source object to copy.

#### source
Type: `Object`  
The target object to copy to.


## Browser Support

objectUtils depends on the following browser APIs:
+ isArray: [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | [Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill)

To support legacy browsers, you'll need to include polyfills for the above APIs.