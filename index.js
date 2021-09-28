//1
function countToFifty(){
  for (let i = 1; i <= 50; i++)
  console.log(i)
  
}

//2
function countFromOne(num){
  for(let i = 0; i <= num; i++)
  console.log(i)
}

//3
function threeAndFiveInFifty(){
  for(let i = 1; i <= 50; i++)
  if(i % 3 === 0 || i % 5 === 0){
      console.log(i)
  }
}

//4
function threeAndFive(num){
 for(let i = 1; i<= num; i++)
 if(i % 3 === 0 || i % 5 === 0){
     console.log(i)
 }
}
//takes an array of integers and returns a new array
//of integers with triple the value.

function triple(array){
  let tripleArray = [];
  for(let i = 0; i <= array.length; i++){
    tripleArray.push(array[i]*3) 
  }
  return tripleArray;
}

countToFifty()
countFromOne(23)
threeAndFiveInFifty()
threeAndFive(20)
console.log(triple([1, 2, 3]))