
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://carolinedanielrud.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".game");
const title = document.querySelector("title");


async function getGame() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        title.innerHTML = "";
        productContainer.innerHTML = "";
        //createHtml(products);
        console.log(id);
        console.log(products);

        products.forEach(function (product) {
            let price = product.prices.price;

            if (product.id != id) {
                console.log(product.id)

            } else {
                console.log(price);
                productContainer.innerHTML = `
                   <div class="product_item">
                        <div class="product_img">
				            <a href="game.html?id=${product.id}"><img src="${product.images[0].src}" alt="${product.name}"/></a>
                        </div>
                        <div class="product_info">
						    <div class="product_text">
							    <h2>${product.name}</h2>
							    <p>${product.short_description}</p>
						    </div>
						    <div class="product_price">
                                <p>${price}$</p>
							    <a href="#" class="add-cart cta">Add to bag</a>
						    </div>
					    </div>
		            </div>
                `;
            }

        });



    }
    catch (error) {
        productContainer.innerHTML = `
            <div class= "error">
                <p>Something went wrong, please try again later</p>
            </div>`;

    }
}

getGame();

function createHtml(product) {
    if (product.id === id) {
        console.log("righ")
    } else {
        console.log("wrong")
    }
}

//<p>${product.price}</p>

// const baseUrl = "http://carolinedanielrud.one/wp-json/wc/store/products";
// const productContainer = document.querySelector(".new_games");

// async function getProducts(url) {
//     const response = await fetch(url);
//     const products = await response.json();

//     products.forEach(function (product) {
//         productContainer.innerHTML += `
//         <div class="product_item">
// 			<div class="product_img">
// 				<a href="anno2205.html"><img src="${product.images[0].src}" alt="${product.name}"/>
//                 </a>
// 			</div>
// 			<div class="product_info">
// 				<div class="product_text">
// 					<h2>${product.name}</h2>
// 					<p>${product.short_description}
// 					</p>
// 				</div>
// 				<div class="product_price">
// 					<p>${product.prices.price}$</p>
// 					<a href="#" class="add-cart cta">Add to bag</a>
// 					<div class="img_succsess">
// 						<img src="/images/checkoutsuccsess.png" alt="succsess" />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//         `

//     });


//     console.log(products);
// }

// getProducts(baseUrl);