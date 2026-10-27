
removeButton = ''
let cart = []
actualPrice = 0

let cartItems = document.getElementsByClassName(`cart-items`)[0];

let totalhtml = document.getElementsByClassName("cart-total-price")[0];
let added = document.getElementsByClassName('shop-item-button')
let item = document.getElementsByClassName(`shop-item`)
console.log(added)
var removeCartItemButtons =document.getElementsByClassName(`btn-danger`)



    added[0].onclick = function(){
        console.log(`Item 1`)
        console.log(cart)
        if(cart.indexOf('Item 1') === -1){
            addItem("Album 1", "$12.99", "Images/Album 1.png", 12.99, `Item 1`)
            cart.push(`Item 1`)
        }
        else{
            alert("Error Item already in cart!")
        }
    }
    added[1].onclick = function(){
        console.log(`Item 2`)
        if(cart.indexOf('Item 2') === -1){
            addItem("Album 2", "$14.99", "Images/Album 2.png", 14.99, `Item 2`)
            cart.push(`Item 2`)
        }
        else{
            alert("Error Item already in cart!")
        }
        console.log(cart)
    }
    added[2].onclick = function(){
        console.log(`Item 3`)
        if(cart.indexOf('Item 3') === -1){
            addItem("Album 3", "$9.99", "Images/Album 3.png", 9.99, `Item 3`)
            cart.push(`Item 3`)
        }
        else{
            alert("Error Item already in cart!")
        }
        console.log(cart)
    }
    added[3].onclick = function(){
        console.log(`Item 4`)
        if(cart.indexOf('Album ') === -1){
            addItem("Album 4", "$19.99", "Images/Album 4.png", 19.99, `Item 4`)
            cart.push(`Item4`)
        }
        else{
            alert("Error Item already in cart!")
        }
        console.log(cart)
    }
    added[4].onclick = function(){
        console.log(`Item 5`)
        if(cart.indexOf('Item 5') === -1){
            addItem("T-Shirt", "$19.99", "Images/Shirt.png", 19.99, `Item 5`)
            cart.push(`Item 5`)
        }
        else{
            alert("Error Item already in cart!")
        }
        console.log(cart)
    }
    added[5].onclick = function(){
        console.log(`Item 6`)
        if(cart.indexOf('Item 6') === -1){
            addItem("Coffee Cup", "$6.99", "Images/Cofee.png", 6.99, `Item 6`)
            cart.push(`Item 6`)
        }
        else{
            alert("Error Item already in cart!")
        }
        console.log(cart)
    }


function addItem(name,price,imgsrc, actualPrice, identity){
    let cartRow = document.createElement(`DIV`);
    cartRow.classList.add('cart-row');
    cartItems.appendChild(cartRow);
    let cartColumn = document.createElement(`DIV`);
    cartColumn.classList.add(`cart-item`);
    cartColumn.classList.add(`cart-column`);
    cartRow.appendChild(cartColumn)
    let image = document.createElement(`IMG`);
    image.classList.add(`cart-item-image`);
    cartColumn.appendChild(image);
    image.src = imgsrc;

    let spanner = document.createElement(`SPAN`);
    spanner.classList.add(`cart-item-title`);
    cartColumn.appendChild(spanner);
    spanner.innerText = name;
    let itemPrice = document.createElement(`SPAN`);
    itemPrice.classList.add(`cart-price`);
    itemPrice.classList.add(`cart-column`);
    
    cartRow.appendChild(itemPrice)
    itemPrice.innerText = `$` + actualPrice
    let cartQuantity = document.createElement(`DIV`);
    cartQuantity.classList.add(`cart-quantity`);
    cartQuantity.classList.add(`cart-column`);
    cartRow.appendChild(cartQuantity)
    let inputQuantity = document.createElement(`INPUT`)
    inputQuantity.classList.add(`cart-quantity-input`)
    inputQuantity.type = 'number'
    inputQuantity.value =  `1`
    cartQuantity.appendChild(inputQuantity)
    let removeButton = document.createElement(`BUTTON`)
    removeButton.classList.add(`btn`)
    removeButton.classList.add(`btn-danger`)
    removeButton.type = 'button'
    removeButton.innerText = `REMOVE`
    cartQuantity.appendChild(removeButton)
        removeButton.addEventListener(`click`, function(){
        cartRow.remove()
        totalPrice()
        let index = cart.indexOf(identity)
        if(index > -1){
            cart.splice(index,1)
        }
    })
    totalPrice();
    inputQuantity.addEventListener(`change`, function(event){
        totalPrice();
    })

    let purchaseButton = document.getElementsByClassName(`btn btn-primary btn-purchase`)
        purchaseButton[0].onclick = function(){
            window.location.reload(true);
            alert("purchase Confirmed")
        }
}


function totalPrice() {
    let cartRows = cartItems.getElementsByClassName("cart-row");
    let total = 0;
    
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];

        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;

        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    totalhtml.innerText = "$" + total;
}

