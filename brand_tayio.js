//Tayio script

document.querySelector("#eachtayio1>div").addEventListener("click",function(){
     
    window.location.href="tayio1.html";
    
})
document.querySelector("#eachtayio2>div").addEventListener("click",function(){
     
     window.location.href="tayio2.html";
     
 })

 document.querySelector("#land").addEventListener("click",function(){
    window.location.href="index.html"
})



 var tayiodata=JSON.parse(localStorage.getItem("products"));
//  console.log(tayiodata);
var count=JSON.parse(localStorage.getItem("button"))||1;
var sum=JSON.parse(localStorage.getItem("button2"))||1;

 var data=[
     {
        "id":1011,
         "img":"https://mednear.com/uploads/medicine/f7ca79038d04245e0af9de3ed83924d3.png",
         "title": "TAIYO SUPER GOLD FISH FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 148.50",
        "strikeprice": "₹ 150.00",
     },
     {
        "id":1012,
         "img":"https://mednear.com/uploads/medicine/d91cbec55bef586d58ef33eb29b36a58.png",
         "title": "TAIYO STAPLE FLAKES FISH FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 148.50",
        "strikeprice": "₹ 150.00",
     },
     {
        "id":1013,
         "img":"https://mednear.com/uploads/medicine/331c56c78223f36630e70c06cfe4ff2a.png",
         "title": "TAIYO TURTLE FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 396.00",
        "strikeprice": "₹ 400.00",
     },
     {
        "id":1014,
         "img":"https://mednear.com/uploads/medicine/c392e80138e62498b6904c64406857a9.png" ,
         "title": "TAIYO ROYAL HORN CONTAINER FOR FISH",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 247.50",
        "strikeprice": "₹ 250.00",
     },
     {
        "id":1015,
         "img":"https://mednear.com/uploads/medicine/acf2058289cdfa4383ca29584fe3fce6.png",
         "title": "TAIYO CICHLID FLAKES FISH FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 222.75",
        "strikeprice": "₹ 225.00",
     },
     {
        "id":1016,
         "img":"https://mednear.com/uploads/medicine/232e2f905a9c09a706e5abcef28136f5.png",
         "title": "TAIYO COLOUR FLAKES FISH FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 222.75",
        "strikeprice": "₹ 225.00",
     },
     {
        "id":1017,
         "img":"https://mednear.com/uploads/medicine/ee118a49b7818f658636b1e1cbf292df.png",
         "title": "TAIYO STAPLE FLAKES FISH FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 222.75",
        "strikeprice": "₹ 225.00",
     },
     {
        "id":1018,
         "img":"https://mednear.com/uploads/medicine/721ee8054e6b4daf5ccdaf43712b6efe.png",
         "title": "TAIYO SPEEDY RED FISH FOOD",
        "description": "jar of 100gm Pet Food",
        "currentPrice": "₹ 198.00",
        "strikeprice": "₹ 200.00",
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
      
    
     // btn.append();
      
      document.querySelector("#button").append(button1,num,button2);
      //replace.content=btn;
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
      
    
      localStorage.setItem("button2",JSON.stringify(sum));
     document.querySelector(".button2").append(button1,num,button2);
      
      
    
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

 
