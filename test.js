var tape = require('tape')
var seEst = require('./index')
var arr = [229, 349, 128, 231, 891, 542, 224, 667, 984, 255, 657]
var brr = [859, 239, 765, 486, 346, 233, 215, 347, 684, 755, 357]

tape('Output is true', function (t) {
  t.ok(seEst(arr, brr))
  t.end()
})
