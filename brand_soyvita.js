//Soyvita script

document.querySelector("#eachsoyvita1>div").addEventListener("click",function(){
     
    window.location.href="soyvita1.html";
    
})
document.querySelector("#eachsoyvita2>div").addEventListener("click",function(){
     
     window.location.href="soyvita2.html";
     
 })
document.querySelector("#land").addEventListener("click",function(){
    window.location.href="land.html"
})


 var soyvitadata=JSON.parse(localStorage.getItem("products"));
// console.log(soyvitadata);

var count=JSON.parse(localStorage.getItem("button"))||1;
var sum=JSON.parse(localStorage.getItem("button2"))||[];
var cart=JSON.parse(localStorage.getItem("addtoCart"))||[];

var data=[
    {
        "id":1001,
        "img":"https://mednear.com/uploads/medicine/a55da47b97664fbb9e170ba296810484.jpg",
        "title": "SOYVITA ENRICHED SOYBEVERAGE POWDER STRAWBERRY SWEETENED",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 425.70",
       "strikeprice": "₹ 430.00",
    },
    {
        "id":1002,
        "img":"https://mednear.com/uploads/medicine/1a236e528388c6c9727031b5a9c44e43.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER SWEETENED REGULAR MALT",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 386.10",
       "strikeprice": "₹ 390.00",
    },
    {
        "id":1003,
        "img":"https://mednear.com/uploads/medicine/5ce2a8836555f2c76072a419f159b898.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER VANILLA SWEETENED",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 425.70",
       "strikeprice": "₹ 430.00",
    },
    {
        "id":1004,
        "img":"https://mednear.com/uploads/medicine/e2079b49fc462442381534c53c18d3d8.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER DIETARY FIBER REGULAR",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 425.70",
       "strikeprice": "₹ 430.00",
    },
    {
        "id":1005,
        "img":"https://mednear.com/uploads/medicine/666b53293e509a54e5a6b2f9b416cd60.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER SWEETENED GREEN TEA EXTRACT",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 544.50",
       "strikeprice": "₹ 550.00",
    },
    {
        "id":1006,
        "img":"https://mednear.com/uploads/medicine/25798fea02c1d8571bb6c1b66e509719.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER MANGO SWEETENED",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 425.70",
       "strikeprice": "₹ 430.00",
    },
    {
        "id":1007,
        "img":"https://mednear.com/uploads/medicine/60965e074be1e05d8d9f58018d4480a1.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER VANILLA DIETARY FIBER",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 425.70",
       "strikeprice": "₹ 430.00",
    },
    {
        "id":1008,
        "img":"https://mednear.com/uploads/medicine/1d139ba42da3e1bd3b453694fb1809c5.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER DIETARY FIBER GREEN TEA EXTRACT",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 603.90",
       "strikeprice": "₹ 610.00",
    },
    {
        "id":1009,
        "img":"https://mednear.com/uploads/medicine/be206e0a1a627ebfaaea00e462f685bf.jpg",
        "title": "SOYVITA ENRICHED SOY BEVERAGE POWDER CHOCOLATE SWEETENED",
       "description": "box of 500gm Powder",
       "currentPrice": "₹ 460.35",
       "strikeprice": "₹ 465.00",
    },
   ];
   
   localStorage.setItem("products",JSON.stringify(data));
 document.querySelector("#button").addEventListener("click",addItem);


 function addItem(event){
   event.preventDefault()
     document.querySelector("#button").textContent="";
     
     var btn=document.createElement("div");
     var button1=document.createElement("button");
     button1.textContent="-";
     button1.addEventListener("click",function(){
         count--;
         if(count<1){
         count=1;
         return count;
     }
     })
     var button2=document.createElement("button");
     button2.textContent="+"; 
     button2.addEventListener("click",function(){
         count++;
     })
     
     var num=document.createElement("div");
     num.setAttribute("id","num");
     num.textContent=count;
     
   
     document.querySelector("#button").append(button1,num,button2);
     localStorage.setItem("button",JSON.stringify(count));
     
   
 }

   document.querySelector(".button2").addEventListener("click",setItem);
   
   
 function setItem(event){
   event.preventDefault()
   document.querySelector(".button2").textContent="";
     
     
     var btn=document.createElement("div");
     var button1=document.createElement("button");
     button1.textContent="-";
     button1.addEventListener("click",function(){
         sum--;
         if(sum<1){
         sum=1;
         return sum;
     }
     })
     var button2=document.createElement("button");
     button2.textContent="+"; 
     button2.addEventListener("click",function(){
         sum++;
     })
     
     var num=document.createElement("div");
     num.setAttribute("id","num");
     num.textContent=sum;
     
   
     
    document.querySelector(".button2").append(button1,num,button2);
    localStorage.setItem("button2",JSON.stringify(sum));
    
     
   
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
 
