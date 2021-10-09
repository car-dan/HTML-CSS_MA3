const baseUrl = "https://danielrud.no/wp-json/wc/store/products";
const productContainer = document.querySelector(".new_games");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function (product) {
        productContainer.innerHTML += `
        <div class="product_item">
			<div class="product_img">
				<a href="game.html?id=${product.id}"><img src="${product.images[0].src}" alt="${product.name}"/>
                </a>
			</div>
			<div class="product_info">
				<div class="product_text">
					<h2>${product.name}</h2>
				</div>
			</div>
		</div>
        `

    });


    console.log(products);
}

getProducts(baseUrl);