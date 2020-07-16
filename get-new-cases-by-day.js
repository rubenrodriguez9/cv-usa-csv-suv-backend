
let getNewCasesByDay = function(date, arr){
  // console.log(date)
  // console.log(arr[0][3])
  // console.log(arr)

  for(let i = 0;i < arr.length;i++){
    for(let n = 0;n < arr[i].length;n++){
      if(arr[i][n] === date){
        return arr[i][n+2]

      }
    }
  }

}

if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
