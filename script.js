const keyCode=document.querySelector(".keyCode");
const key=document.querySelector(".key");
const code=document.querySelector(".code");
const typeKey=document.querySelector(".type");
const a = document.querySelector("audio");




window,onkeydown=function(e){
    keyCode.innerHTML=e.keyCode;
    key.innerHTML=e.key;
    code.innerHTML=e.code;
    typeKey.innerHTML=e.type;
    console.log(a);
    a.currentTime=0;
    a.play();


}