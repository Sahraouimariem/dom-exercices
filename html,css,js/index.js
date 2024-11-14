var total=document.querySelector("#total")
var qt=document.querySelectorAll("#quantité")
var plus=document.querySelectorAll(".fa-plus")
var moin=document.querySelectorAll(".fa-minus")
var price=document.querySelectorAll("#price")
var heart=document.querySelectorAll(".fa-heart")
var cards=document.querySelectorAll(".col")
var trash=document.querySelectorAll(".fa-trash")
console.log(qt)
console.log(price)
function totalPrice(){
    var result=0
    for (var i=0;i<price.length;i++){
        result+=price[i].innerHTML*qt[i].innerHTML
    }
    return total.innerHTML=result
    
}
totalPrice()
for (let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function increment(){
        qt[i].innerHTML++
        totalPrice()
    })
}
for (let i=0;i<moin.length;i++){
    moin[i].addEventListener("click",function increment(){
        if(qt[i].innerHTML>0){
        qt[i].innerHTML--
        totalPrice()
        }
    })
}
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function vafovite(){
        if( heart[i].style.color=="red"){
    heart[i].style.color="black"
        }
        else{
             heart[i].style.color="red"
        }
    })

}
for(let i=0;i<trash.length;i++){
    trash[i].addEventListener("click",function remove(){
    cards[i].remove()
  qt[i].innerHTML=0
  totalPrice()

    })
    
    
}