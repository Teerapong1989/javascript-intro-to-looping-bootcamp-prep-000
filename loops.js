var forLoop = function(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1){
      array.push("I am 1 strange loop")
    } else {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  }
  return array;
}


function whileLoop(num) {
  while(num > 0){
    console.log(--num)
  } return "done"
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);

function doWhileLoop(){
  
}
