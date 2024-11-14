var submit=document.querySelector("#btt")
var q1=document.querySelectorAll("#rad")
var q2=document.querySelectorAll("#radi")
var q3=document.querySelectorAll("#radii")
console.log(q1)
submit.addEventListener("click",function score(){
var result=0
for(let i=0;i<q1.length;i++){
    if(q1[i].checked==true && q1[i].defaultValue=="correct"){
        result+=1
    }
}
for( let i=0;i<q2.length;i++){
    if(q2[i].checked==true && q2[i].defaultValue=="correct"){
        result+=1
    }
}
for( let i=0;i<q3.length;i++){
    if(q3[i].checked==true && q3[i].defaultValue=="correct"){
        result+=1
    }
}
var div=document.createElement("div")
div.innerHTML=("your score is : " +result)
div.style.position="absolute"
div.style.width="30%"
div.style.zIndex="1"
div.style.marginLeft="70%"
div.style.background="black"
div.style.color="white"
div.style.textAlign="center"
div.style.height="10%"

document.querySelector("body").appendChild(div)


})

