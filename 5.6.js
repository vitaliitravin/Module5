let arr = ['hello','goodbye','hey', 'hello'];
  
let result = arr.filter(function(item,index){
  if (arr.indexOf(item) === index) {
    console.log('true');
  } esle if {
    console.log('false')
  }
})