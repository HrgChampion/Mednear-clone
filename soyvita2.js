//soyvita2 script

document.querySelector("#back").addEventListener("click",function(){
    window.location.href="brand_soyvita.html"
})
var soyvita2prod=JSON.parse(localStorage.getItem("product"));
var count=JSON.parse(localStorage.getItem("button"))||1;
document.querySelector("#num").textContent=count;
var data=[
    {
        "id":1002,
        "img":"https://mednear.com/uploads/medicine/1a236e528388c6c9727031b5a9c44e43.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER SWEETENED REGULAR MALT",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 386.10",
       "strikeprice": "₹ 390.00",
    },
];

localStorage.setItem("product",JSON.stringify(data));

document.querySelector("#add").addEventListener("click",incfun);
document.querySelector("#diff").addEventListener("click",decfun);

function incfun(event){
    event.preventDefault()
    count++;
    document.querySelector("#num").textContent=count;
    localStorage.setItem("button",JSON.stringify(count));
console.log(count)
}
function decfun(event){
    event.preventDefault()
    count--;
    console.log(count)
    if(count<1){
        count=1;
    }
    localStorage.setItem("button",JSON.stringify(count));
    document.querySelector("#num").textContent=count;
    
}
document.querySelector(".log_div").addEventListener("click",function(){
    window.location.href="navRegister.html"
})
document.querySelector(".order_div").addEventListener("click",function(){
    window.location.href="prescription.html"
})
document.querySelector(".med_image").addEventListener("click",function(){
    window.location.href="index.html"
})
document.querySelector(".tagup").addEventListener("click",function(){
    window.location.href="Addtocart.html"
})
 