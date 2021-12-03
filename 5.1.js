let value = +prompt('Введите значение');

if(typeof value === 'number' && !isNaN(value)){
  if (value % 2 == 0){
    console.log (value + ' - четное число')
  }else if (value % 2 !== 0){
    console.log (value + ' - нечетное число')
  }else {
    console.log ('Упс, кажется, вы ошиблись')
  }
}