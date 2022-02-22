 //soyvita1 script
 
 document.querySelector("#back").addEventListener("click",function(){
        window.location.href="brand_soyvita.html"
    })
var soyvita1prod=JSON.parse(localStorage.getItem("product"));
var count=JSON.parse(localStorage.getItem("button"))||1;
// document.querySelector("#btn<num").textContent=count;
// console.log(total);
    var data=[
        {
            "id":1001,
            "img":"https://mednear.com/uploads/medicine/a55da47b97664fbb9e170ba296810484.jpg",
            "title": "SOYVITA ENRICHED SOYBEVERAGE POWDER STRAWBERRY SWEETENED",
           "description": "box of 500gm Powder",
           "currentPrice": "₹ 425.70",
           "strikeprice": "₹ 430.00",
        }
    ];
    
    localStorage.setItem("product",JSON.stringify(data));
    document.querySelector("#btn").addEventListener("click",addItem);

  function addItem(event){
    event.preventDefault()
      document.querySelector("#btn").textContent="";
      
      
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
      
    
      
     
      document.querySelector("#btn").append(button1,num,button2);
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
 