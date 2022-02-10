var dec= document.getElementById("dec");
var sum= document.getElementById("sum");
var reset= document.getElementById("reset");
var board =document.getElementById("Number");
let count = 0;
sum.addEventListener('click',function () {
    count++;
    board.innerHTML=count;
})

dec.addEventListener('click',function () {
    count--;
    board.innerHTML=count;
})
