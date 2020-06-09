
var addToCartButtons = document.getElementsByClassName('add-cart');



for(var i=0 ; i< addToCartButtons.length; i++){
    
    var btns = addToCartButtons[i];
    
    btns.addEventListener("click", function(e) {
            
      var parent  =  e.target.parentElement.parentElement.parentElement.parentElement;

      var productcategory = parent.getElementsByClassName('catagory-name')[0].innerText;
      
      var productPrice = parent.getElementsByClassName('product-price')[0].innerText;

      var imageproduct = parent.getElementsByClassName('imageproduct')[0].src;

      var productname = parent.getElementsByClassName("pname")[0].innerText;
      addToCart(productcategory,productPrice,imageproduct,productname)
      
      
    
        
    })
}

var deleteFromCartBtn = document.getElementsByClassName("si-close");

for (var i=0; i<deleteFromCartBtn;i++ ){
    var btns = deleteFromCartBtn[i];
    
    btns.addEventListener("click", function(e) {
    e.target.parentElement.remove()
})
}





function addToCart(category,price,image,name){

    var tbody = document.getElementsByClassName('tbody')[0];
    for(var i=0; i<tbody.getElementsByTagName("tr").length; i++){

        
      

        if(tbody.getElementsByClassName("product-namess")[i].innerHTML==name)
        {
            var quantitytag= tbody.getElementsByClassName("quantity")[i].innerHTML
           
        
           var quantity = parseFloat(quantitytag)

           quantity++;
           tbody.getElementsByClassName("quantity")[i].innerHTML=quantity
           updateTotal()

           var deleteFromCartBtn = document.getElementsByClassName("si-close");

           for (var i=0; i<deleteFromCartBtn.length;i++ ){
               var btns = deleteFromCartBtn[i];
               
               btns.addEventListener("click", function(e) {
              e.target.parentElement.parentElement.remove()
              updateTotal()
           })
           }

            return
        }
    }

    

    var tr = document.createElement('tr')

    

    var rowdetails= `
    <td class="si-pic"><img src="${image}" class="imageproduct" style="width:80px;height:80px"   alt=""></td>
    <td class="si-text">
        <div class="product-selected">
            <h6 class="category">${category}</h6>
            <p class="product-namess">${name}</p>
            <p><span class="price">${price}</span> x <span class="quantity">1</span></p>
        </div>
    </td>
    <td class="si-close">
        <i class="ti-close"></i>
    </td>
`




tr.innerHTML = rowdetails;


 tbody.appendChild(tr)
updateTotal()
 
 var deleteFromCartBtn = document.getElementsByClassName("si-close");

for (var i=0; i<deleteFromCartBtn.length;i++ ){
    var btns = deleteFromCartBtn[i];
    
    btns.addEventListener("click", function(e) {
   e.target.parentElement.parentElement.remove()
   updateTotal()
})
}

}

//Update Total

function updateTotal(){
    var cartProducts = document.getElementsByClassName("product-selected")

 
 var Total=0;
  for(var i=0; i<cartProducts.length; i++) {
    var quantitytag = document.getElementsByClassName("quantity")[i].innerHTML;  
    var pricetag = document.getElementsByClassName("price")[i].innerHTML;
    quantity = parseFloat(quantitytag)
    var price = parseFloat(pricetag.replace("$",""))
    Total=Total+(price*quantity)
    
  }
  document.getElementsByClassName("Total")[0].innerHTML="$"+Total+".00"
  document.getElementsByClassName("cart-price")[0].innerHTML= "$"+Total+".00"
  document.getElementsByClassName("cart-products")[0].innerHTML=cartProducts.length
}


// Adding items to shop dom 

var products = document.getElementsByClassName("products-filter")[0].getElementsByTagName("li");

for (var i=0; i<products.length; i++){
    var product = products[i];
    product.addEventListener("click", function(e){

       var prods = document.getElementsByClassName("products-filter")[0].getElementsByTagName("li");
       for(var x = 0 ; x<prods.length; x++){
           
        prods[x].className=""
           
       }
        e.target.parentElement.classList.add("active")
        var productName = e.target.innerHTML
        addProductsDom(productName)
    } )
    
}

var products2 = document.getElementsByClassName("depart-hover")[0].getElementsByTagName("li");
for (var i=0; i<products2.length; i++){
    var product = products2[i];
    product.addEventListener("click", function(e){

       var prods = document.getElementsByClassName("products-filter")[0].getElementsByTagName("li");
       for(var x = 0 ; x<prods.length; x++){
           
        prods[x].className=""
           
       }
        e.target.parentElement.classList.add("active")
        var productName = e.target.innerHTML
        addProductsDom(productName)
    } )
    
}

var domArray=[];
function addProductsDom(name){
    

    var animalhealth = [
    {
        category:"Animal Health",
        name:"Cypermethrine Dog Rinse",
        imageSrc:"cypermethrin.png",
        price: 100.00

    }, 
    

    {
        category:"Animal Health",
        name:"Dinis 300",
        imageSrc:"disnis.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Huku Dust",
        imageSrc:"hukudust.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Albex/Albendazol",
        imageSrc:"albex.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Chanaverm",
        imageSrc:"chanaverm.png",
        price: 100.00

    }, 

    {
        category:"Animal Health",
        name:"Rafazole",
        imageSrc:"rafoxamide.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Sentinel 1% POUR ON",
        imageSrc:"sentinel.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Sentinel 15%",
        imageSrc:"sentinel.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Zolefen",
        imageSrc:"zerofen.png",
        price: 100.00

    }


]










    var fertilizer =[
        {   category:"Fertilizer",
            name:"Compound D",
            imageSrc:"compoundd.png",
            price: 100.00

},{   category:"Fertilizer",
name:"Ammonium Nitrate",
imageSrc:"fertlizer.png",
price: 200.00

}

,
{   category:"Fertilizer",
name:"Ammonium Nitrate",
imageSrc:"fertlizer.png",
price: 200.00

},
{   category:"Fertilizer",
name:"Ammonium Nitrate",
imageSrc:"fertlizer.png",
price: 200.00

}
]

var growthRegulants=[{   
category:"Growth Regulants",
name:"Agriwett",
imageSrc:"agriwett.png",
price: 200.0
},
{   
    category:"Growth Regulants",
    name:"Deka (Decanol) 79EC",
    imageSrc:"deka.png",
    price: 200.0
    },
    {   
        category:"Growth Regulants",
        name:"Ethrel",
        imageSrc:"ethrel.png",
        price: 200.0
        },
        {   
            category:"Growth Regulants",
            name:"Shumba Plus",
            imageSrc:"shumbaplus.png",
            price: 200.0
            },
]

var nematicides=[ {   
    category:"Namaticides",
    name:"Fenamiphos 40EC",
    imageSrc:"fenamiphos.png",
    price: 200.0
    },
    {   
        category:"Namaticides",
        name:"Nemat 310L",
        imageSrc:"nemat.png",
        price: 200.0
        },
        {   
            category:"Namaticides",
            name:"Solvigo 108SC",
            imageSrc:"solvigo.png",
            price: 200.0
            },
]

var fungicides= [{   
    category:"Fungicides",
    name:"Bion 50WP",
    imageSrc:"bion.png",
    price: 200.0
    },
    {   
        category:"Fungicides",
        name:"Bravo",
        imageSrc:"bravo.png",
        price: 200.0
        },
        {   
            category:"Fungicides",
            name:"Copper Oxy 85WP",
            imageSrc:"copperoxy.png",
            price: 200.0
            },
            {   
                category:"Fungicides",
                name:"Cossan Wettable Sulphur",
                imageSrc:"cosanwettablesulphur.png",
                price: 200.0
                },
                {   
                    category:"Fungicides",
                    name:"Dithane M45",
                    imageSrc:"dithane.png",
                    price: 200.0
                    },
                    {   
                        category:"Fungicides",
                        name:"Dusting Sulphur",
                        imageSrc:"dustingsulphur.png",
                        price: 200.0
                        },

                        {   
                            category:"Fungicides",
                            name:"Folicur 250C",
                            imageSrc:"folicur.png",
                            price: 200.0
                            },
                            {   
                                category:"Fungicides",
                                name:"Funginex",
                                imageSrc:"funginex.png",
                                price: 200.0
                                },
                                {   
                                    category:"Fungicides",
                                    name:"Lime Sulphur",
                                    imageSrc:"limesulphur.png",
                                    price: 200.0
                                    },
                                    {   
                                        category:"Fungicides",
                                        name:"Mancozeb",
                                        imageSrc:"limesulphur.png",
                                        price: 200.0
                                        },
                                        {   
                                            category:"Fungicides",
                                            name:"Metalaxyl + Mancozeb",
                                            imageSrc:"metalaxylplusmancozeb.png",
                                            price: 200.0
                                            },
                                            {   
                                                category:"Fungicides",
                                                name:"Metalaxyl + Mancozeb",
                                                imageSrc:"metalaxylplusmancozeb.png",
                                                price: 200.0
                                                },
                                                {   
                                                    category:"Fungicides",
                                                    name:"Orius 250FW",
                                                    imageSrc:"orius.png",
                                                    price: 200.0
                                                    },
                                                    {   
                                                        category:"Fungicides",
                                                        name:"Shavit 250 EC",
                                                        imageSrc:"shavit-.png",
                                                        price: 200.0
                                                        }
            
                            
]
 var herbicides = [
    {   
        category:"Herbicides",
        name:"Accent (Nicosulfuron) 75WG",
        imageSrc:"accent.png",
        price: 200.0
        },
        {   
        category:"Herbicides",
        name:"Agil 100 EC",
            imageSrc:"agil.png",
            price: 200.0
            },
            {  
             category:"Herbicides",
                name:"Atrazine 500 FW",
                imageSrc:"atrazine.png",
                price: 200.0
                },
                {  
                category:"Herbicides",
                       name:"Diquat 200SL",
                       imageSrc:"diquat.png",
                       price: 200.0
                       },
                       {  
                        category:"Herbicides",
                               name:"Diquat 200SL",
                               imageSrc:"diquat.png",
                               price: 200.0
                               },
                               {  
                                category:"Herbicides",
                                       name:"Gallant Super 10.8EC",
                                       imageSrc:"galantsuper.png",
                                       price: 200.0
                                       },
                                       {  
                                        category:"Herbicides",
                                               name:"Glyphosate",
                                               imageSrc:"galantsuper.png",
                                               price: 200.0
                                               },
                                               {  
                                                category:"Herbicides",
                                                       name:"Glyphosate",
                                                       imageSrc:"glyphosate.png",
                                                       price: 200.0
                                                       },
                                                       {  
                                                        category:"Herbicides",
                                                               name:"Granstar 75DF",
                                                               imageSrc:"granstar.png",
                                                               price: 200.0
                                                               },
                                                               {  
                                                                category:"Herbicides",
                                                                       name:"Halosulfuron (Servian)",
                                                                       imageSrc:"halosutfron.png",
                                                                       price: 200.0
                                                                       },
                                                                       {  
                                                                        category:"Herbicides",
                                                                               name:"Kalif 48EC",
                                                                               imageSrc:"kalif.png",
                                                                               price: 200.0
                                                                               },
                                                                               {  
                                                                                category:"Herbicides",
                                                                                       name:"Lawn Weed Clear",
                                                                                       imageSrc:"lawn.png",
                                                                                       price: 200.0
                                                                                       },{
                                                                                       category:"Herbicides",
                                                                                       name:"MCPA 40SL",
                                                                                       imageSrc:"mcpaherbicide.png",
                                                                                       price: 200.0
                                                                                       },
                                                                                       {
                                                                                        category:"Herbicides",
                                                                                        name:"Metribuzin 480SC (Sensor)",
                                                                                        imageSrc:"metribuzin.png",
                                                                                        price: 200.0
                                                                                        },
                                                                                        {
                                                                                            category:"Herbicides",
                                                                                            name:"Path Clear",
                                                                                            imageSrc:"pathclear.png",
                                                                                            price: 200.0
                                                                                            },
                                                                                            {
                                                                                                category:"Herbicides",
                                                                                                name:"Pilot Super",
                                                                                                imageSrc:"pilotsuper.png",
                                                                                                price: 200.0
                                                                                                },
                                                                                                {
                                                                                                    category:"Herbicides",
                                                                                                    name:"Stella Star",
                                                                                                    imageSrc:"stellarstar.png",
                                                                                                    price: 200.0
                                                                                                    },
                                                                                                    {
                                                                                                        category:"Herbicides",
                                                                                                        name:"Strongarm 840G",
                                                                                                        imageSrc:"strongarm.png",
                                                                                                        price: 200.0
                                                                                                        }
                                                                                            
    

 ]

 var pesticides=[{   
    category:"Pesticides",
    name:"Abamectin 1.8EC",
    imageSrc:"abamectin.png",
    price: 200.0
    },
    {category:"Pesticides",
    name:"ABC Powder",
    imageSrc:"abcpowder.png",
        price: 200.0
        },
    {category:"Pesticides",
    name:"Acephate 75",
    imageSrc:"acephate.png",
    price: 200.0
            },
    
{category:"Pesticides",
    name:"Acetar",
    imageSrc:"acetar.png",
    price: 200.0
            },
   
{category:"Pesticides",
name:"Actellic Gold Dust",
imageSrc:"actellicgolddust.png",
price: 200.0
        }, 
{category:"Pesticides",
name:"Agita",
imageSrc:"agita.png",
price: 200.0
        },
{category:"Pesticides",
name:"Aphid Kill",
imageSrc:"aphidkill.png",
price: 200.0
        },
        {category:"Pesticides",
name:"Avaunt (indoxacarb) 15EC",
imageSrc:"avaunt.png",
price: 200.0
        },
{category:"Pesticides",
name:"Belt",
imageSrc:"beltexpert.png",
price: 200.0
        },
        {category:"Pesticides",
name:"Biobit HPWP(DIPEL)",
imageSrc:"biobithpwp.png",
price: 200.0
        },
  {category:"Pesticides",
name:"Carbaryl 5% Dust",
imageSrc:"cabaryl85wp.png",
price: 200.0
        },
        {category:"Pesticides",
name:"Carbaryl 85WP",
imageSrc:"carbaryl.png",
price: 200.0
        },
         {category:"Pesticides",
name:"Cartap 50SP",
imageSrc:"cartap.png",
price: 200.0
        },
         {category:"Pesticides",
name:"Chlorpyrofos 25EC",
imageSrc:"chlorpyrifos.png",
price: 200.0
        },
           {category:"Pesticides",
name:"DDVP 100 EC",
imageSrc:"ddvp.png",
price: 200.0
        },
        {category:"Pesticides",
        name:"DDVP 100 EC",
        imageSrc:"ddvp.png",
        price: 200.0
                }, 
                 {category:"Pesticides",
        name:"DDVP 100 EC",
        imageSrc:"ddvp.png",
        price: 200.0
                },
 ]

 if(name=="Pesticides"){
     document.getElementsByClassName('section-titlez')[0].innerHTML="Pesticides"
    domArray=pesticides
    renderDom(domArray)
}

if(name=="All Products"){
    document.getElementsByClassName('section-titlez')[0].innerHTML="All Products"
    domArray=allProducts
    renderDom(domArray)
}



if(name=="Hebicides"){
    document.getElementsByClassName('section-titlez')[0].innerHTML="Herbicides"
    domArray=herbicides
    renderDom(domArray)
}


if(name=="Fungicides"){
    document.getElementsByClassName('section-titlez')[0].innerHTML="Fungicides"
    domArray=fungicides
    renderDom(domArray)
}

if(name=="Nematicides"){
    document.getElementsByClassName('section-titlez')[0].innerHTML="Nematicides"
    domArray=nematicides
    renderDom(domArray)
}

if(name=="Fertilizers"){
    document.getElementsByClassName('section-titlez')[0].innerHTML="Fertilizers"
    domArray=fertilizer
    renderDom(domArray)
}
if(name=="Animal Health") {
    document.getElementsByClassName('section-titlez')[0].innerHTML="Animal Health"
    domArray= animalhealth
    renderDom(domArray)
}
if(name=="Growth Regulants"){
    document.getElementsByClassName('section-titlez')[0].innerHTML="Growth Regulants"
    domArray= growthRegulants
    renderDom(domArray)
}


}


// function renderDom
function renderDom(domArray){
    var productsRow = document.getElementsByClassName("prod")[0];
    
productsRow.innerHTML=""
var row = document.createElement('div')
for (var i = 0 ; i<domArray.length; i++) { 

var divProds= document.createElement("div")
divProds.className = "col-lg-4 col-sm-6"; 
var content = `<div class="product-item">
<div class="pi-pic">

</select>
               <img src="imagess/${domArray[i].imageSrc}" class="imageproduct" style="width:200px;height:250px"  alt="">
               
               <div class="icon">
                   <h3 class="qty text- "></h3>
               </div>
               

               <ul>
               <li type="button" data-toggle="modal" data-target="#exampleModalCenter"  class="w-icon active "><a ><i class="icon_bag_alt"></i></a></li>
                   <li class="quick-view add-cart"><a>+ Add To Cart</a></li>
                   <li class="remove bg-danger"><a>-</i></a></li>
               </ul>
           </div>
           <div class="pi-text">
               <div class="catagory-name product-name">${domArray[i].category}</div>
               <a href="#">
                   <h5 class="pname">${domArray[i].name}</h5>
               </a>
               <div class="product-price">
                   $${domArray[i].price}.00
               </div>
           </div>
       </div>
`

divProds.innerHTML= content;
productsRow.appendChild(divProds);
}




for(var i = 0 ; i<cartItems; i++){

    if(cartItems[i].name==domArray[i].name){
        
    }
}
//Cart buttons add quantity
var rm =document.getElementsByClassName("remove");

for (var i = 0; i<rm.length;i++){
    
    var btn = rm[i];
    btn.addEventListener("click", function(e){
    
})

}

var modalbtn = document.getElementsByClassName('w-icon')

for(var i=0; i<modalbtn.length; i++){
    var mbtn= modalbtn[i]
    mbtn.addEventListener("click", function(e){
      var image =  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('imageproduct')[0].src
      var category = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('product-name')[0].innerHTML
      var name = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('pname')[0].innerHTML
      var price =e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('product-price')[0].innerHTML

      document.getElementsByClassName('imageproductmodal')[0].src=image
      document.getElementsByClassName('modal-title')[0].innerHTML=category
      document.getElementsByClassName('modal-product-name')[0].innerHTML=name
    })

}


var addToCartButtons = document.getElementsByClassName('add-cart');

var value=1
for(var i=0 ; i< addToCartButtons.length; i++){
    
    var btns = addToCartButtons[i];
    
    btns.addEventListener("click", function(e) {
            
        var parent  =  e.target.parentElement.parentElement.parentElement.parentElement;

      var productcategory = parent.getElementsByClassName('catagory-name')[0].innerText;
      
      var productPrice = parent.getElementsByClassName('product-price')[0].innerText;

      var imageproduct = parent.getElementsByClassName('imageproduct')[0].src;
      var productname = parent.getElementsByClassName("pname")[0].innerText;
      addToCart(productcategory,productPrice,imageproduct,productname)

      var cartItemss = document.getElementsByClassName('tbody')[0].getElementsByTagName("tr")
      for(var x =0 ; x<cartItemss.length; x++){
      if(cartItemss[x].getElementsByClassName("product-namess")[0].innerHTML==productname){
          var cartelement = cartItemss[x]
          
        parent.getElementsByClassName('qty')[0].innerHTML=cartItemss[x].getElementsByClassName("quantity")[0].innerHTML
        var cartquantityval=parseFloat(parent.getElementsByClassName('qty')[0].innerHTML)
        parent.getElementsByClassName('remove')[0].addEventListener("click", function(e){            
            cartelement.getElementsByClassName("quantity")[0].innerHTML=cartquantityval-=1
            e.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('qty')[0].innerText=cartquantityval
            
        })
      }
      }
    })
}
}

// function Render Search Dom

function renderDomSearch(domArray){
    var productsRow = document.getElementsByClassName("prod")[0];
    
productsRow.innerHTML=""
var row = document.createElement('div')
for (var i = 0 ; i<domArray.length; i++) { 

var divProds= document.createElement("div")
divProds.className = "col-lg-4 col-sm-6"; 
var content = `<div class="product-item">
<div class="pi-pic">

</select>
               <img src="imagess/${domArray[i].imageSrc}" class="imageproduct" style="width:200px;height:250px"  alt="">
               
               <div class="icon">
                   <h3 class="qty text- "></h3>
               </div>
               

               <ul>
               <li type="button" data-toggle="modal" data-target="#exampleModalCenter"  class="w-icon active "><a ><i class="icon_bag_alt"></i></a></li>
                   <li class="quick-view add-cart"><a>+ Add To Cart</a></li>
                   <li class="remove bg-danger"><a>-</i></a></li>
               </ul>
           </div>
           <div class="pi-text">
               <div class="catagory-name product-name">${domArray[i].category}</div>
               <a href="#">
                   <h5 class="pname">${domArray[i].name}</h5>
               </a>
               <div class="product-price">
                   $${domArray[i].price}.00
               </div>
           </div>
       </div>
`

divProds.innerHTML= content;
productsRow.appendChild(divProds);
}




for(var i = 0 ; i<cartItems; i++){

    if(cartItems[i].name==domArray[i].name){
        
    }
}
//Cart buttons add quantity
var rm =document.getElementsByClassName("remove");

for (var i = 0; i<rm.length;i++){
    
    var btn = rm[i];
    btn.addEventListener("click", function(e){
    
})

}

var modalbtn = document.getElementsByClassName('w-icon')

for(var i=0; i<modalbtn.length; i++){
    var mbtn= modalbtn[i]
    mbtn.addEventListener("click", function(e){
      var image =  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('imageproduct')[0].src
      var category = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('product-name')[0].innerHTML
      var name = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('pname')[0].innerHTML
      var price =e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('product-price')[0].innerHTML

      document.getElementsByClassName('imageproductmodal')[0].src=image
      document.getElementsByClassName('modal-title')[0].innerHTML=category
      document.getElementsByClassName('modal-product-name')[0].innerHTML=name
    })

}


var addToCartButtons = document.getElementsByClassName('add-cart');

var value=1
for(var i=0 ; i< addToCartButtons.length; i++){
    
    var btns = addToCartButtons[i];
    
    btns.addEventListener("click", function(e) {
            
        var parent  =  e.target.parentElement.parentElement.parentElement.parentElement;

      var productcategory = parent.getElementsByClassName('catagory-name')[0].innerText;
      
      var productPrice = parent.getElementsByClassName('product-price')[0].innerText;

      var imageproduct = parent.getElementsByClassName('imageproduct')[0].src;
      var productname = parent.getElementsByClassName("pname")[0].innerText;
      addToCart(productcategory,productPrice,imageproduct,productname)

      var cartItemss = document.getElementsByClassName('tbody')[0].getElementsByTagName("tr")
      for(var x =0 ; x<cartItemss.length; x++){
      if(cartItemss[x].getElementsByClassName("product-namess")[0].innerHTML==productname){
          var cartelement = cartItemss[x]
          
        parent.getElementsByClassName('qty')[0].innerHTML=cartItemss[x].getElementsByClassName("quantity")[0].innerHTML
        var cartquantityval=parseFloat(parent.getElementsByClassName('qty')[0].innerHTML)
        parent.getElementsByClassName('remove')[0].addEventListener("click", function(e){            
            cartelement.getElementsByClassName("quantity")[0].innerHTML=cartquantityval-=1
            e.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('qty')[0].innerText=cartquantityval
            
        })
      }
      }
    })
}
}





var liCartButton= document.getElementsByClassName("li-cart")[0];
var cartItems = [];
liCartButton.addEventListener("click", function(e){

    var cart= document.getElementsByClassName("tbody")[0].getElementsByTagName("tr");

    for(i=0; i<cart.length; i++){
    
     var quantitys = cart[i].getElementsByClassName("quantity")[0].innerHTML;
     var prices = cart[i].getElementsByClassName("price")[0].innerHTML
     var images = cart[i].getElementsByClassName("imageproduct")[0].src
     var names = cart[i].getElementsByClassName("product-namess")[0].innerHTML
     var categorys = cart[i].getElementsByClassName("category")[0].innerHTML
     var cartProduct= {name: names, quantity: quantitys,price: prices,image: images,category:categorys}
      cartItems.push(cartProduct)
    }

    console.log(JSON.stringify(cartItems))

    localStorage.setItem('data',JSON.stringify(cartItems))

  
})

var licheckoutButton= document.getElementsByClassName("li-checkout")[0];
cartItems = [];
licheckoutButton.addEventListener("click", function(e){

    var cart= document.getElementsByClassName("tbody")[0].getElementsByTagName("tr");

    for(i=0; i<cart.length; i++){
    
     var quantitys = cart[i].getElementsByClassName("quantity")[0].innerHTML;
     var prices = cart[i].getElementsByClassName("price")[0].innerHTML
     var images = cart[i].getElementsByClassName("imageproduct")[0].src
     var names = cart[i].getElementsByClassName("product-namess")[0].innerHTML
     var categorys = cart[i].getElementsByClassName("category")[0].innerHTML
     var cartProduct= {name: names, quantity: quantitys,price: prices,image: images,category:categorys}
      cartItems.push(cartProduct)
    }

    console.log(JSON.stringify(cartItems))
    localStorage.setItem('total', document.getElementsByClassName('cart-price')[0].innerHTML)
    localStorage.setItem('data',JSON.stringify(cartItems))

  
})

var hcheckoutButton= document.getElementsByClassName("checkout-btn")[0];
cartItems = [];
hcheckoutButton.addEventListener("click", function(e){

    var cart= document.getElementsByClassName("tbody")[0].getElementsByTagName("tr");

    for(i=0; i<cart.length; i++){
    
     var quantitys = cart[i].getElementsByClassName("quantity")[0].innerHTML;
     var prices = cart[i].getElementsByClassName("price")[0].innerHTML
     var images = cart[i].getElementsByClassName("imageproduct")[0].src
     var names = cart[i].getElementsByClassName("product-namess")[0].innerHTML
     var categorys = cart[i].getElementsByClassName("category")[0].innerHTML
     var cartProduct= {name: names, quantity: quantitys,price: prices,image: images,category:categorys}
      cartItems.push(cartProduct)
    }

    console.log(JSON.stringify(cartItems))
    localStorage.setItem('total', document.getElementsByClassName('cart-price')[0].innerHTML)
    localStorage.setItem('data',JSON.stringify(cartItems))

  
})


var viewCartBtn = document.getElementsByClassName("view-card")[0];

viewCartBtn.addEventListener("click", function(e){

    var cart= document.getElementsByClassName("tbody")[0].getElementsByTagName("tr");

    for(i=0; i<cart.length; i++){
    
     var quantitys = cart[i].getElementsByClassName("quantity")[0].innerHTML;
     var prices = cart[i].getElementsByClassName("price")[0].innerHTML
     var images = cart[i].getElementsByClassName("imageproduct")[0].src
     var names = cart[i].getElementsByClassName("product-namess")[0].innerHTML
     var categorys = cart[i].getElementsByClassName("category")[0].innerHTML
     var cartProduct= {name: names, quantity: quantitys,price: prices,image: images,category:categorys}
      cartItems.push(cartProduct)
    }

    console.log(JSON.stringify(cartItems))

    localStorage.setItem('data',JSON.stringify(cartItems))

  
})

var data = JSON.parse(localStorage.getItem('data'));

if(data!=null){
    for(var z = 0; z<data.length; z++){
        
    var tbody = document.getElementsByClassName('tbody')[0];
        var tr = document.createElement('tr')

        
        var rowdetails= `
        <td class="si-pic"><img src="${data[z].image}" class="imageproduct" style="width:80px;height:80px"   alt=""></td>
        <td class="si-text">
            <div class="product-selected">
                <h6 class="category">${data[z].category}</h6>
                <p class="product-namess">${data[z].name}</p>
                <p><span class="price">${data[z].price}</span> x <span class="quantity">${data[z].quantity}</span></p>
            </div>
        </td>
        <td class="si-close">
            <i class="ti-close"></i>
        </td>
    `
    
    tr.innerHTML = rowdetails;
    
    
     tbody.appendChild(tr)
    updateTotal()
    var deleteFromCartBtn = document.getElementsByClassName("si-close")[z];
    
    deleteFromCartBtn.addEventListener("click", function(e) {
    e.target.parentElement.parentElement.remove()
    
    })

    }
}
    
    localStorage.clear()
    


    var allProducts = [
        
        {   category:"Fertilizer",
name:"Ammonium Nitrate",
imageSrc:"fertlizer.png",
price: 200.00

}

,
{   category:"Fertilizer",
name:"Compound D",
imageSrc:"fertlizer.png",
price: 200.00

},
{   category:"Fertilizer",
name:"Compound C",
imageSrc:"fertlizer.png",
price: 200.00

},
        
        {
        category:"Animal Health",
        name:"Albex/Albendazol",
        imageSrc:"albex.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Chanaverm",
        imageSrc:"chanaverm.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Cypermethrine Dog Rinse",
        imageSrc:"cypermethrin.png",
        price: 100.00

    }, 

    {
        category:"Animal Health",
        name:"Dinis 300",
        imageSrc:"disnis.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Huku Dust",
        imageSrc:"hukudust.png",
        price: 100.00

    }, 

    {
        category:"Animal Health",
        name:"Rafazole",
        imageSrc:"rafoxamide.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Sentinel 1% POUR ON",
        imageSrc:"sentinel.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Sentinel 15%",
        imageSrc:"sentinel.png",
        price: 100.00

    }, 
    {
        category:"Animal Health",
        name:"Zolefen",
        imageSrc:"zerofen.png",
        price: 100.00

    },
        {   category:"Fertilizer",
            name:"Compound D",
            imageSrc:"compoundd.png",
            price: 100.00

},
{
category:"Growth Regulants",
name:"Agriwett",
imageSrc:"agriwett.png",
price: 200.0
},
{   
    category:"Growth Regulants",
    name:"Deka (Decanol) 79EC",
    imageSrc:"deka.png",
    price: 200.0
    },
    {   
        category:"Growth Regulants",
        name:"Ethrel",
        imageSrc:"ethrel.png",
        price: 200.0
        },
        {   
            category:"Growth Regulants",
            name:"Shumba Plus",
            imageSrc:"shumbaplus.png",
            price: 200.0
            }, {   
    category:"Namaticides",
    name:"Fenamiphos 40EC",
    imageSrc:"fenamiphos.png",
    price: 200.0
    },
    {   
        category:"Namaticides",
        name:"Nemat 310L",
        imageSrc:"nemat.png",
        price: 200.0
        },
        {   
            category:"Namaticides",
            name:"Solvigo 108SC",
            imageSrc:"solvigo.png",
            price: 200.0
            },{   
    category:"Fungicides",
    name:"Bion 50WP",
    imageSrc:"bion.png",
    price: 200.0
    },
    {   
        category:"Fungicides",
        name:"Bravo",
        imageSrc:"bravo.png",
        price: 200.0
        },
        {   
            category:"Fungicides",
            name:"Copper Oxy 85WP",
            imageSrc:"copperoxy.png",
            price: 200.0
            },
            {   
                category:"Fungicides",
                name:"Cossan Wettable Sulphur",
                imageSrc:"cosanwettablesulphur.png",
                price: 200.0
                },
                {   
                    category:"Fungicides",
                    name:"Dithane M45",
                    imageSrc:"dithane.png",
                    price: 200.0
                    },
                    {   
                        category:"Fungicides",
                        name:"Dusting Sulphur",
                        imageSrc:"dustingsulphur.png",
                        price: 200.0
                        },

                        {   
                            category:"Fungicides",
                            name:"Folicur 250C",
                            imageSrc:"folicur.png",
                            price: 200.0
                            },
                            {   
                                category:"Fungicides",
                                name:"Funginex",
                                imageSrc:"funginex.png",
                                price: 200.0
                                },
                                {   
                                    category:"Fungicides",
                                    name:"Lime Sulphur",
                                    imageSrc:"limesulphur.png",
                                    price: 200.0
                                    },
                                    {   
                                        category:"Fungicides",
                                        name:"Mancozeb",
                                        imageSrc:"limesulphur.png",
                                        price: 200.0
                                        },
                                        {   
                                            category:"Fungicides",
                                            name:"Metalaxyl + Mancozeb",
                                            imageSrc:"metalaxylplusmancozeb.png",
                                            price: 200.0
                                            },
                                            {   
                                                category:"Fungicides",
                                                name:"Metalaxyl + Mancozeb",
                                                imageSrc:"metalaxylplusmancozeb.png",
                                                price: 200.0
                                                },
                                                {   
                                                    category:"Fungicides",
                                                    name:"Orius 250FW",
                                                    imageSrc:"orius.png",
                                                    price: 200.0
                                                    },
                                                    {   
                                                        category:"Fungicides",
                                                        name:"Shavit 250 EC",
                                                        imageSrc:"shavit-.png",
                                                        price: 200.0
                                                        },
    {   
        category:"Herbicides",
        name:"Accent (Nicosulfuron) 75WG",
        imageSrc:"accent.png",
        price: 200.0
        },
        {   
        category:"Herbicides",
        name:"Agil 100 EC",
            imageSrc:"agil.png",
            price: 200.0
            },
            {  
             category:"Herbicides",
                name:"Atrazine 500 FW",
                imageSrc:"atrazine.png",
                price: 200.0
                },
                {  
                category:"Herbicides",
                       name:"Diquat 200SL",
                       imageSrc:"diquat.png",
                       price: 200.0
                       },
                       {  
                        category:"Herbicides",
                               name:"Diquat 200SL",
                               imageSrc:"diquat.png",
                               price: 200.0
                               },
                               {  
                                category:"Herbicides",
                                       name:"Gallant Super 10.8EC",
                                       imageSrc:"galantsuper.png",
                                       price: 200.0
                                       },
                                       {  
                                        category:"Herbicides",
                                               name:"Glyphosate",
                                               imageSrc:"galantsuper.png",
                                               price: 200.0
                                               },
                                               {  
                                                category:"Herbicides",
                                                       name:"Glyphosate",
                                                       imageSrc:"glyphosate.png",
                                                       price: 200.0
                                                       },
                                                       {  
                                                        category:"Herbicides",
                                                               name:"Granstar 75DF",
                                                               imageSrc:"granstar.png",
                                                               price: 200.0
                                                               },
                                                               {  
                                                                category:"Herbicides",
                                                                       name:"Halosulfuron (Servian)",
                                                                       imageSrc:"halosutfron.png",
                                                                       price: 200.0
                                                                       },
                                                                       {  
                                                                        category:"Herbicides",
                                                                               name:"Kalif 48EC",
                                                                               imageSrc:"kalif.png",
                                                                               price: 200.0
                                                                               },
                                                                               {  
                                                                                category:"Herbicides",
                                                                                       name:"Lawn Weed Clear",
                                                                                       imageSrc:"lawn.png",
                                                                                       price: 200.0
                                                                                       },{
                                                                                       category:"Herbicides",
                                                                                       name:"MCPA 40SL",
                                                                                       imageSrc:"mcpaherbicide.png",
                                                                                       price: 200.0
                                                                                       },
                                                                                       {
                                                                                        category:"Herbicides",
                                                                                        name:"Metribuzin 480SC (Sensor)",
                                                                                        imageSrc:"metribuzin.png",
                                                                                        price: 200.0
                                                                                        },
                                                                                        {
                                                                                            category:"Herbicides",
                                                                                            name:"Path Clear",
                                                                                            imageSrc:"pathclear.png",
                                                                                            price: 200.0
                                                                                            },
                                                                                            {
                                                                                                category:"Herbicides",
                                                                                                name:"Pilot Super",
                                                                                                imageSrc:"pilotsuper.png",
                                                                                                price: 200.0
                                                                                                },
                                                                                                {
                                                                                                    category:"Herbicides",
                                                                                                    name:"Stella Star",
                                                                                                    imageSrc:"stellarstar.png",
                                                                                                    price: 200.0
                                                                                                    },
                                                                                                    {
                                                                                                        category:"Herbicides",
                                                                                                        name:"Strongarm 840G",
                                                                                                        imageSrc:"strongarm.png",
                                                                                                        price: 200.0
                                                                                                        },
                                                                                            { 
    category:"Pesticides",
    name:"Abamectin 1.8EC",
    imageSrc:"abamectin.png",
    price: 200.0
    },
    {category:"Pesticides",
    name:"ABC Powder",
    imageSrc:"abcpowder.png",
        price: 200.0
        },
    {category:"Pesticides",
    name:"Acephate 75",
    imageSrc:"acephate.png",
    price: 200.0
            },
    
{category:"Pesticides",
    name:"Acetar",
    imageSrc:"acetar.png",
    price: 200.0
            },
   
{category:"Pesticides",
name:"Actellic Gold Dust",
imageSrc:"actellicgolddust.png",
price: 200.0
        }, 
{category:"Pesticides",
name:"Agita",
imageSrc:"agita.png",
price: 200.0
        },
{category:"Pesticides",
name:"Aphid Kill",
imageSrc:"aphidkill.png",
price: 200.0
        },
        {category:"Pesticides",
name:"Avaunt (indoxacarb) 15EC",
imageSrc:"avaunt.png",
price: 200.0
        },
{category:"Pesticides",
name:"Belt",
imageSrc:"beltexpert.png",
price: 200.0
        },
        {category:"Pesticides",
name:"Biobit HPWP(DIPEL)",
imageSrc:"biobithpwp.png",
price: 200.0
        },
  {category:"Pesticides",
name:"Carbaryl 5% Dust",
imageSrc:"cabaryl85wp.png",
price: 200.0
        },
        {category:"Pesticides",
name:"Carbaryl 85WP",
imageSrc:"carbaryl.png",
price: 200.0
        },
         {category:"Pesticides",
name:"Cartap 50SP",
imageSrc:"cartap.png",
price: 200.0
        },
         {category:"Pesticides",
name:"Chlorpyrofos 25EC",
imageSrc:"chlorpyrifos.png",
price: 200.0
        },
           {category:"Pesticides",
name:"DDVP 100 EC",
imageSrc:"ddvp.png",
price: 200.0
        },
        {category:"Pesticides",
        name:"DDVP 100 EC",
        imageSrc:"ddvp.png",
        price: 200.0
                }, 
                 {category:"Pesticides",
        name:"DDVP 100 EC",
        imageSrc:"ddvp.png",
        price: 200.0
                }
 ]


 console.log(allProducts)
 
 renderDom(allProducts)

 var btnSearch = document.getElementsByClassName('btn-search')[0]

btnSearch.addEventListener("click", function(){
    var name = document.getElementsByClassName('text-search')[0].value
    findProduct(name)
})

  function findProduct(name){

        const index = allProducts.findIndex(function(obj,index){
            return obj.name.toLowerCase() === name.toLowerCase()

        })

var searchArray = [allProducts[index]]

        renderDom(searchArray)
  }

  var nameText = document.getElementsByClassName('text-search')[0]

  nameText.addEventListener('keyup', function(){
      var count = nameText.value
      console.log(count)
  })


 