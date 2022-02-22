//tayio1 script

var count=localStorage.getItem("button")||1;
document.querySelector("#num").textContent=count;
document.querySelector("#back").addEventListener("click",function(){
    window.location.href="brand_tayio.html"
})
var tayio1prod=JSON.parse(localStorage.getItem("product"));

var data=[
    {
        "id":1011,
        "img":"https://mednear.com/uploads/medicine/f7ca79038d04245e0af9de3ed83924d3.png",
        "title": "TAIYO SUPER GOLD FISH FOOD",
       "description": "jar of 100gm Pet Food",
       "currentPrice": "₹ 148.50",
       "strikeprice": "₹ 150.00",
    },
];

localStorage.setItem("product",JSON.stringify(data));
document.querySelector("#add").addEventListener("click",incfun);
document.querySelector("#diff").addEventListener("click",decfun);

function incfun(event){
    event.preventDefault()
    count++;
    localStorage.setItem("button",count);
    document.querySelector("#num").textContent=count;
    
console.log(count)
}

function decfun(event){
    event.preventDefault()
    count--;
    console.log(count)
    if(count<1){
        count=1;
    }
    localStorage.setItem("button",count);
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
 