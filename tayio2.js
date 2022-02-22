//tayio2 script

document.querySelector("#back").addEventListener("click",function(){
    window.location.href="brand_tayio.html"
})
var tayio2prod=JSON.parse(localStorage.getItem("product"));
var count=JSON.parse(localStorage.getItem("button"))||1;
document.querySelector("#num").textContent=count;

var data=[
    {
        "id":1012,
        "img":"https://mednear.com/uploads/medicine/d91cbec55bef586d58ef33eb29b36a58.png",
        "title": "TAIYO STAPLE FLAKES FISH FOOD",
       "description": "jar of 100gm Pet Food",
       "currentPrice": "₹ 148.50",
       "strikeprice": "₹ 150.00",
    },
];
localStorage.setItem("product",JSON.stringify(data));
document.querySelector("#add").addEventListener("click",incfun);
document.querySelector("#diff").addEventListener("click",decfun);



function incfun(){
    
    count++;
    document.querySelector("#num").textContent=count;
    localStorage.setItem("button",JSON.stringify(count));
console.log(count)

}

function decfun(){
    
    count--;
    console.log(count)
    if(count<1){
        count=1;
    }
    document.querySelector("#num").textContent=count;
    localStorage.setItem("button",JSON.stringify(count));
    
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
 