

var data = JSON.parse(localStorage.getItem('data'));

var tbody = document.getElementsByClassName("ttbody")[0]




for(var i =0; i<data.length; i++){

    
    var trow = document.createElement('tr')

    

    var content = `
    <td class="cart-pic first-row" ><img class="cart-pic1"  src="${data[i].image}" style="width:100px;height:100px" alt=""></td>
    <td class="cart-title first-row">
        <h5 class="p-name" >${data[i].name}</h5>
    </td>
    <td class="p-price first-row">${data[i].price}</td>
    <td class="qua-col first-row">
        <div class="quantity">
            <div class="pro-qty">
                <input type="text" class="input-value" value="${data[i].quantity}">
            </div>
        </div>
    </td>
    <td class="total-price first-row">$${(parseFloat(data[i].quantity))* (parseFloat(data[i].price.replace("$",""))) 
    
    
    
    
    }.00</td>
    <td class="close-td first-row"><i class="ti-close"></i></td>
    `
    
    trow.innerHTML=content;
    
    tbody.appendChild(trow)
     

}

var tbody = document.getElementsByClassName('txbody')[0];

for(var z = 0; z<data.length; z++){
        
    
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
      document.getElementsByClassName("cart-total")[0].innerHTML= "$"+Total+".00"
      document.getElementsByClassName("subtotal")[0].innerHTML= "$"+Total+".00"
      document.getElementsByClassName("cart-products")[0].innerHTML=cartProducts.length
    }



    

    var btnUpdate = document.getElementsByClassName("up-cart")[0];
    var cartItems=[]
    btnUpdate.addEventListener("click",function(){

        var unitprice = document.getElementsByClassName('p-price')
        var quantity = document.getElementsByClassName('input-value')
        var totalprice = document.getElementsByClassName("total-price")
        var image = document.getElementsByClassName("cart-pic1")
        var name = document.getElementsByClassName("p-name")
        var sum=0
        for (var i =0 ; i<unitprice.length; i++){
            totalprice[i].innerHTML= parseFloat(unitprice[i].innerHTML.replace("$",""))* parseFloat(quantity[i].value)
            sum = sum+ parseFloat(totalprice[i].innerHTML.replace("$",""))

            var quantitys = quantity[i].value;
            var prices = unitprice[i].innerHTML
            var images = image[i].src
            var names = data[i].name
            var categorys = data[i].category
            var cartProduct= {name: names, quantity: quantitys,price: prices,image: images,category:categorys}

            var cartProduct= {name: names, quantity: quantitys,price: prices,image: images,category:categorys}
            cartItems.push(cartProduct)
        }

        localStorage.setItem('data',JSON.stringify(cartItems))
        document.getElementsByClassName("cart-total")[0].innerHTML="$"+sum+".00"
        document.getElementsByClassName("subtotal")[0].innerHTML="$"+sum+".00"

        



        }
    )

    var btnRemove = document.getElementsByClassName("ti-close")

    for(var i =0 ; i<btnRemove.length; i++){
        var btntag = btnRemove[i]

        btntag.addEventListener("click", function(e){
            e.target.parentElement.parentElement.remove()
            var unitprice = document.getElementsByClassName('p-price')
            var quantity = document.getElementsByClassName('input-value')
            var totalprice = document.getElementsByClassName("total-price")
            var sum=0
            for (var i =0 ; i<unitprice.length; i++){
                totalprice[i].innerHTML= parseFloat(unitprice[i].innerHTML.replace("$",""))* parseFloat(quantity[i].value)
                sum = sum+ parseFloat(totalprice[i].innerHTML.replace("$",""))
            }
            document.getElementsByClassName("cart-total")[0].innerHTML="$"+sum+".00"
            document.getElementsByClassName("subtotal")[0].innerHTML="$"+sum+".00"
            
            var index=i;
            if(index === undefined) return 
            data.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(data));
            document.getElementsByClassName('si-pic')[i].parentElement.remove()
            updateTotal()
        })
    }


    var proceedBtn = document.getElementsByClassName("proceed-btn")[0]

    proceedBtn.addEventListener("click" ,function(){

        localStorage.setItem('total', document.getElementsByClassName("cart-total")[0].innerHTML);
        document.location.href = "check-out.html";
    })