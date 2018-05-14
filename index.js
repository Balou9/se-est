function seEst (arr, brr) {
  var result = []
  for (var i = 0; i < arr.length; i++){
    result[i] = Math.pow((arr[i] - brr[i]), 2)
  }

  var err = 0
  for (var i = 0; i < result.length ; i++){
    err += result[i]
  }

  return Math.sqrt(err / arr.length)
}

module.exports = seEst
