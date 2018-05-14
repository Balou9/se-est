# se-est

[![build status](http://img.shields.io/travis/balou9/se-est.svg?style=flat)](http://travis-ci.org/balou9/se-est) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/balou9/se-est?branch=master&svg=true)](https://ci.appveyor.com/project/balou9/se-est)

***

Standard error of the estimate (Linear Regression)

***

## Get it!

```
npm install --save se-est
```

***

## Usage

``` js
var seEst = require('se-est')
var score = [229, 349, 128, 231, 891, 542, 224, 667, 984, 255, 657]
var predScore = [859, 239, 765, 486, 346, 233, 215, 347, 684, 755, 357]
console.log(seEst(score, predScore))
```

***

## API

### `seEst(arr1, arr2)`

Call the function with two arrays. One should be observed array second should
be the estimate of the first array. Boom! There you go!  
Enjoy your standard error of the estimate.

***

## License

[MIT](./license.md)
