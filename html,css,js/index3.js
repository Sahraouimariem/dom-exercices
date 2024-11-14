var username=document.querySelector("#username")
var email=document.querySelector("#email")
var tel=document.querySelector("#tel")
var passw=document.querySelector("#password")
var form=document.querySelector("form")
var btt=document.querySelector("#butt")
var erreur1=document.querySelector("#erreur1")
var erreur2=document.querySelector("#erreur2")
var erreur3=document.querySelector("#erreur3")
var erreur4=document.querySelector("#erreur4")
var show=document.querySelector("#show")
show.addEventListener("click",function(event){
    event.preventDefault()
    if(passw.type=="password"){
        passw.type="text"
    }
    else{
        passw.type="password"
    }
})
btt.addEventListener("click",function validation(event){
    event.preventDefault()
    if(username.value.length<=5){
        erreur1.style.color="red"
        erreur1.innerHTML="user name must be more than 5 letters"

    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
     
        erreur2.style.color="red"
        erreur2.innerHTML="your email is invalid "
    }
    if(tel.value.length!=8){
        erreur3.style.color="red"
        erreur3.innerHTML="phone number must be 8 numbers"
    }
     if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(passw.value)){
        erreur4.style.color="red"
        erreur4.innerHTML="your password is not strong"
     }
     setTimeout(()=>{
        erreur1.innerHTML=""
        erreur2.innerHTML=""
        erreur3.innerHTML=""
        erreur4.innerHTML=""
     },2000)

})
