# objectUtils
A utility library for working with JavaScript objects.

## Install
objectUtils is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install objectUtils with the following command:

```
$ jspm install github:DEGJS/objectUtils
```

## Usage

### Importing individual objectUtils methods:
```js
import { ensureArray } from "DEGS/objectUtils";

let guaranteedArray = ensureArray(possibleArray);
```

### Importing all objectUtils methods:
```js
import * as objectUtils from "DEGS/objectUtils";

let guaranteedArray = objectUtils.ensureArray(possibleArray);
```

## Methods

### ensureArray(obj)
The ensureArray method returns a guaranteed array, regardless of the paramater passed into it.

#### obj
Type: `Array` or `String`  
The potential array to test.


## Browser Support

objectUtils depends on the following browser APIs:
+ isArray: [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | [Polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill)

To support legacy browsers, you'll need to include polyfills for the above APIs.