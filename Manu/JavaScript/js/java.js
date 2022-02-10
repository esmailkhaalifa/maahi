const colors = [
    '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'
]
var btn=document.getElementById("btn");
var color=document.querySelector(".color");

btn.addEventListener('click',function(){
    let math = Math.floor(Math.random()*colors.length);
    let mathTwo=colors[math];
   document.body.style.backgroundColor=mathTwo;
   color.innerHTML=mathTwo;
   btn.style.color=mathTwo;
})
