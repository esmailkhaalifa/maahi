var btn=document.getElementById("btn");
var colorss=document.querySelector(".color");

btn.addEventListener('click',function() {
   let code = [ 0,1,2,3,4,5,6,7,8,9, "A", "B" ,"C" ,"D" , "E" ,"F"]
   let hesh="#";
   for(let i=0;i<6;i++){
       let math = Math.floor(Math.random()*code.length);
       let mathTwo=code[math];
       hesh+=mathTwo;
   }
   document.body.style.backgroundColor=hesh;
   colorss.innerHTML=hesh;
   btn.style.color=hesh;
});