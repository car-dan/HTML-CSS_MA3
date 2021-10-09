const baseUrl = "https://danielrud.no/wp-json/wc/store/products";
// const baseUrl = "http://localhost/gamehub1/wp-json/wc/store/products";
const productContainer = document.querySelector(".news")


async function getProducts(url) {
    try {
        const response = await fetch(url);
        const products = await response.json();
        console.log("try")

        productContainer.innerHTML = "";
        console.log(products);

        products.forEach(function (product) {
            productContainer.innerHTML += `
        <div class="news-img">
				<a href="game.html?id=${product.id}"><img src="${product.images[0].src}" alt="${product.name}"/>
                </a>
		</div>
        `

        });
    }
    catch (error) {
        productContainer.innerHTML = `
              <div class = "error">
                <p>Something went wrong, please try again later</p>
              </div>
       `;
    }
}

getProducts(baseUrl);
