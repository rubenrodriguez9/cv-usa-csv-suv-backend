let getRows = function(data){
 let result = [];
 let array = data.split('\n')
 for(let i = 0;i < array.length;i++){
   result.push(array[i].split(','))
 }
 return result
}




if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;