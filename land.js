

//    z index = -1
var first_div =document.createElement("div");
first_div.setAttribute("class","first_div");
 var main_div =document.createElement("div");
 var sec_div=document.createElement("div");
 sec_div.setAttribute("class","sec_div");
 data=[
 {
         image:"https://mednear.com/uploads/medicine_cat/medium/0ef2ad0802de54aecf2ed11539703ba6.png",
         name:"Homeopathy",
     },
     {
         image:"https://mednear.com/uploads/medicine_cat/medium/34c5c7cfc37ba1a3a162b60ca112aba4.png",
         name:"Ayurvedic",
     },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/ad8dff7a89637235d0b96d570a914c37.png",
       name:"Skin care",
   },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/b0eff7997f8ea5c8063da8489e12b4f8.png",
       name:"Hair Care",
   },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/83d270648382909b9cafb5b6e8823a49.png",
       name:"Sbl Homeopathy",
   },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/22a6dd26536c12dbb323db21df68481d.png",
       name:"Baby Care",
   },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/f61ed5019eec843af2abfd8455badafb.png",
       name:"Elderly Care",
   },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/dc8e1d1015c394b0b0eedb4ac0e85ac3.png",
       name:"Mother Care",
   },
   {
       image:"https://mednear.com/uploads/medicine_cat/medium/472f1a79d7232148edf588b14dbf2406.png",
       name:"Sexual Wellnece",
   },
   {
       image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAAHZx3GoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI0Nzk4QzIwNUEzMTFFOEIyNkY4QTcyODI5NzRCRTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI0Nzk4QzMwNUEzMTFFOEIyNkY4QTcyODI5NzRCRTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjQ3OThDMDA1QTMxMUU4QjI2RjhBNzI4Mjk3NEJFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjQ3OThDMTA1QTMxMUU4QjI2RjhBNzI4Mjk3NEJFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpzEFooAAA4nSURBVHjaYvz//z8D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",
       name:"More",
   },
 ]

 

data.map(function(element){
 var div= document.createElement("div");
 div.setAttribute("class","div");
 var image=document.createElement("img");
 var name=document.createElement("p");
 image.setAttribute("id", "image");
 image.setAttribute("src",element.image);
 name.textContent=element.name;
 name.setAttribute("class","name");

 div.append(image,name)
 sec_div.append(div);


})
// document.querySelector(".sec_div>name:nth")



//med_image.......
var med_div =document.createElement("img");
var me
med_div.setAttribute("class","med_image");
med_div.setAttribute("src","https://mednear.com/assets/web/images/logo-big.svg" );
first_div.setAttribute("class","first_div");

// var name =document.createElement("")






//search option.........
var search_box=document.createElement("div");
search_box.setAttribute("class","search_box");
var search =document.createElement("input");
search.setAttribute("class","search");
search.placeholder = " Search for your Medicines / Health Products";
var search_tag =document.createElement("img");
search_tag.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzPeAUyLLo3UCnb7d-LD8nP97UPPhIUGiG_43Bk-h7ZXopeKVXy_YGm_HfdyUfibvlOE&usqp=CAU")
search_tag.setAttribute("class","search_tag_img");
search_box.append(search,search_tag);



///order option.......
var order_div=document.createElement("div");
order_div.setAttribute("class","order_div");
var order =document.createElement("div");
var order_1=document.createElement("div");
var order_2=document.createElement("div");
order_1.textContent="Quick order";
order_2.textContent=" upload Prescription";
order.append(order_1,order_2);
order.setAttribute("class","order");
var order_img =document.createElement("img");
order_img.setAttribute("src","https://cdn-icons-png.flaticon.com/128/1092/1092216.png");
order_img.setAttribute("class","order_img");
order_div.append(order_img,order);


//log option.....
var log_div =document.createElement("div");
log_div.setAttribute("class","log_div");
var log =document.createElement("div");
log.setAttribute("class","log");
var log_img =document.createElement("img");
log_img.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADyCAMAAAALHrt7AAAAflBMVEX39/cAAAD////8/Pz29va3t7eqqqrOzs5/f3/h4eHs7Ozz8/Ompqbv7+/Hx8dubm5ERERdXV3k5ORLS0uKioqwsLBjY2PV1dWWlpYoKChRUVHb29sZGRmBgYG7u7s9PT0wMDB3d3cTExOcnJw0NDQiIiI5OTkPDw9oaGhWVlY/IeaIAAAHI0lEQVR4nO2dW3vaMAyGEwkISSBACOdjYLTj///BJWHtWhogB8my9/i96tUevslWZFmSHcdisVgsFosxICIAotPpdPK/8j/NJVPQ2cyWo/Xx8u667vY4/p30vGGmSvqXNQHB8ZZrt4Rf/X1gnCbAaFQm5oNpb2iQJoQgeX8mp2AemSIJ/KfG+bL2uia4CIh/V5OTc9nrbiXsJNXl5IwXIP2bnwHRtp6ejJ2jrZHQSWvLybjoaiTwV030ZCy1VAT7hnIy5hq6O1g21+O6x0A3RdBvo8d13329FEHaTk+GVooI9GilCGp+Tcs5abOPoEehJ4vtpIX8BT0aPa470eN7NKTSo8kXFqZ0gtyF/DaCM6Eed9uR1oM+pR7X7UsvOijNg7RAeNFhi4i0nIPwLqp/oHtFV1IRDsj1uBdRE53oBbkzOUVIFPN85yjn6ODIIciNpExEF8R9Ryykg4oZ0toEQoJCJj3uQGbNYZdL0FhmzbGtONcdyghi0yMTLeCCT1AqseY4wp4PVhKCGLeQjONmChNueAKbiO0rlNMTELThFJSo30QYcQqaCwiacQo6CAhi9NrZsVVAUKsLrle8K9dDdOPwEPUJx7ZXdi8IraDWgv63JcfrFE7qIwWeFNYHAuE23wE8R+AQzpXDujESOBDFnIKWEmdwTkESSQUYMwraSAji/LKq/67yujmZTCOjVxA4sDqsWRKZCxXGaE4oWc/2aZX4rOYA/RX4jb3QFV67MtMnyMjJCHj0yPi4HJizCIql9DC5BYEk4yfkpUs5kuVLHCaSNFBmogm5IIlA+wvkAZ10BSB5/CNxcPgGNu2xKUcqSPgiiPQyXCqK+wplWfBJvCg4B65kgoQ93Acdqm0002DB5SCR79aiUaAASW7ERephHkARAung4P4BrRWleviDT9quOrlD3SMwaJPV6mmnJx/Y0fz86mmox2nei3cdarZ/PgG/yY3EQE/zFCDULpiZxBrryYAgrSPnGOktJwc2lWd4rIwYSpKtu7jSXdhU+4Ek/4Bw9qIZ9JT45sjJycw0eJgROiQe6L93foDgLAajt7ttM1lGpk7HcopxX9CJF1F3ltHde36IZs8vu4GfSP8Si8VisVgsFovFYlFCMZm6DPMORoWSYLEfJOl8+valTHD7Np2nyWC/CNCU0duZFoyjQfpyAtg4PUexo3d2IftfD73lpEbh5vs60TZlghBGSaPJbG+7fKC4XqIQ4lmruqzxeYPaGCpTcz60UXPjkix0yD4iDHtkbSrb5UbYTAhejXHhVTjMQjlNEJ5pa8tu9GXMhODvGNQUXCPlTg9rXGs1QfF8foQFffHsHZeZOkng81TU30vqqtlLMExVyMk5KnjrAh3WHvB71hvmb22TdxDasQsZjQQBuy8ooctlpAZlIjRceYpNIOZsLX4ORzmQlHlurANiSTiU2D1fod1J7UtK25MSRg5s7ZC1WPlERsKQrhegHXsSRbC5SAv5hKJ2uM2jNfRMOm03kqy3/smvls93MA+MakKrlpwWpdh8tClT5ei7bU9TZ4chQfqQhWaNUxi+vf6nhWgUrGqsp5Gizi/pH/2U+u0scoefatTcRyxzBWip5b2ZRlnQUmNAMrBlrUmp/CybbvHbI7YVO/t5xxpTMq5kIuo3nzip1MtL1tmtggofWIYpI5y8dHW0j6Yp4MWbF7zDPjmYPl904esHynXj6dACIyKEe55MagLWOfRcXB4biGm8GjcPZxsRTktRywPfTfVOrHoePKlp6ILLKU0RA2tpCDMl2UdzYuwySmbxEg/tUs2PedamHOoecu8XCF9aliH5biLep11UcL/mDMhbPeWn4w5VF/GQci3xcqxPWDGzKsv/gMEforg0mDPXcz9KLDA/WMPG46oZ1scH2XiWyjIsh1XwvBgDGzXMSPJyFK/uF113vE4Gd4xSVGmwo0GKKg7eNEZR1UGiaEiguqt8y2pGeqHO4FoTLlnr3evrf6tSt4JJr0LGn9Rv8oCFxjcrhyZ1jRjoWl3mjhqWcEMq/cvLOTcuadTzvqjNHF7YaJdPXbdrkEInlVbwnebL7dNIOvnv1YKgtB4DbS72+g5Ng4omvmFLN5Vbppnwjh2Ref5K2p9k5RyoG1qxI5q06zE0hoMvtu76Q5a+TwRPpDb9StWqViIJu8ojh6nH2uCO2FN6j3Tg79dHnCnryVMg5yapq2QvXdXIKSSBx+7xUrWzYxBizu/SajBUPwoHnC5T1DpSPwXnBkJwJu8ymkqOXirm+ywJH5+e9mLxGWaI4J9JrskmvUBczV8Qwn2/VQzxlnj6zJcrQIC4u2uUyVsnUaDnWMNiRuMgra7qfbqbLXQfPFk8XRENdpNn/u90mCczL3BMmQ16G3TqBL63nw2WyW43ykl3u2Q56O4X/tABY6R8p3iO424IrZFCLBaLxWKxWCwWy3/IH8nLij5feEh/AAAAAElFTkSuQmCC")
log.textContent="Login/signin";
log_img.setAttribute("class","log_img");
log_div.append(log_img,log);

// document.querySelector("")

//tag option.....
var tag =document.createElement("img");
tag.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT734twAiYRWM-UV44nT_82GMF2jCVnqRpWeHdKhxST87ziWcOwvJm2AlxGnFgWaPaVCoo&usqp=CAU")
tag.setAttribute("class","tag");
first_div.append(med_div,search_box,order_div,log_div,tag);

// var tag=document.createElement("a")


//end...
//document.getElementById("container").append(first_div,sec_div);
//    document/getElementById("");


// document.querySelector("button").addEventListener("click", search);
//     var searchData =[];


// //    var searchData = JSON.parse(localStorage.getItem("searchDatabase")) || [];
//    search_obj={
//     search:search,
//      }
//      searchData.push(search_obj);
//     console.log(searchData);
// //    localStorage.setItem("searchDatabase", JSON.stringify(searchData));


document.querySelector("#scr1").addEventListener("click",function(){
 window.location.href="brand_soyvita.html";
});
document.querySelector("#scr2").addEventListener("click",function(){
 window.location.href="ayush.html";
});
document.querySelector("#scr3").addEventListener("click",function(){
 window.location.href="brand_tayio.html";
});
document.querySelector("#scr4").addEventListener("click",function(){
 window.location.href="ninio.html";
});
document.querySelector("#scr5").addEventListener("click",function(){
    window.location.href="more.html";
   });


document.querySelector(".first_div>img").addEventListener("click" , function(){
 window.location.href="index.html";
});
document.querySelector(".tag").addEventListener("click" , function(){
    window.location.href="\Addtocart.html";
   });

