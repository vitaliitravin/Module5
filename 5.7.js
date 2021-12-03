let arr = [4, 18, 0, odd, 3, 1, 99];
let evenNums;
let oddNums;


let result = arr.forEach(function(item) {
  if (typeof item === 'number' && item !== 0 && !isNaN(item) && item % 2 == 0) {
         return evenNums;
      }else if (typeof item % 2 !== 0 && !isNaN(item)){
        return oddNums;
      } else if (item === 0) {
     console.log('there is 0 in the array')
   } else {
     console.log('there is NaN in the array')
   })