
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if (arguments.length===0) {return []}
    if (matrix.length===0) {return []}
    var resArray = []
    matrix.forEach( (element, index) => {
      index%2!==0 ? resArray=resArray.concat(element.reverse()) : resArray=resArray.concat(element)
      })
    return resArray
  }
