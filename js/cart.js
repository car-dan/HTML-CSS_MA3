let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Anno 2205',
        tag: 'anno',
        price: 12,
        inCart: 0
    },
     {
        name: 'Farcry 5',
        tag: 'farcry5',
        price: 12,
        inCart: 0
    },
      {
        name: 'RainbowSix Siege',
        tag: 'rainbowsiege',
        price: 12,
        inCart: 0
    },
       {
        name: 'Wachdogs Legion',
        tag: 'wachdogs2',
        price: 12,
        inCart: 0
    },
       {
        name: 'The Crew 2',
        tag: 'grew',
        price: 12,
        inCart: 0
    },
        {
        name: 'Farcry 5',
        tag: 'farcry5',
        price: 12,
        inCart: 0
    },
         {
        name: 'Wachdogs Legion',
        tag: 'wachdogs',
        price: 12,
        inCart: 0
    }

]



for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
    else {
        document.querySelector('.cart span').textContent = 0;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems; ", cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }

        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;

  cartItems = {
        [product.tag]: product
    }
    }



    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("the products price is ", product.price);
    let cartCost = localStorage.getItem('totalCost');


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);

    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    const productContainer = document.querySelector(".products");
    const cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            
            <div class="product-item">
                <div class="product">
                    <img src="/images/${item.tag}.png" alt="${item.tag}" class="chechout-img">
                    <span>${item.name}</span>
                </div>
                <div class = "price">$${item.price},00</div>
                <div class = "quantity">${item.inCart}</div>
                <div class="total">$${item.inCart * item.price},00</div>
            </div>
            `;
        });

        productContainer.innerHTML += `
        
        <div class = "basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">$${cartCost},00 </h4>
        </div>
        <div class="emtyBasket">
            <div><button class ="emtyBasketBtn">Clear cart</button></div>
            <div><a href="checkout_payment.html" ><button class="next">Next</button></a></div>
        </div>

        `;

        const button = document.querySelector(".emtyBasketBtn");

        button.onclick = function () {
            localStorage.clear();
            // location.reload();
            productContainer.innerHTML = `<h1>Cart is emty</h1>`;

        }

    }

}






onLoadCartNumbers();
displayCart();
