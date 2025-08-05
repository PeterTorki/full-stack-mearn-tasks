console.log("Start");  //1 start
console.log("1");  //2           1
function fun(){
  console.log("function exec start");  // 6  function
  console.log("2");   //7
  setTimeout(function(){
    console.log("3"); //10
  },1000) 
  console.log("function exec end"); //
}
console.log("4"); //3     

setTimeout(function(){
  console.log("5");  //11
  
},2000)
setTimeout(function(){
  console.log("6"); //
},0)
console.log("7"); // 4         
console.log("done");  // 5   done
fun()


/*
start
1

*/