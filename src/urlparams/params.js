const products = [
    { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
    { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
    { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
  ];

function getParams() {
    const paramString = window.location.search;
    const param = new URLSearchParams(paramString);
    let prodNum = (param.get('productId'));
    getProductDetails(prodNum);
}

function productOutput(product) {
    const html = `<section class="product">
    <img src="${product[0].image}" alt="${product[0].name}">
    <div class="product__details">
        <h2>${product[0].name}</h2>
        <p>Price: $${product[0].price}</p>
        </div>
        </section>`
    const element = document.querySelector('#output');
    element.innerHTML = html;
}

function getProductDetails(num) {
    let arrayItem = products.filter(prod =>{
        return num == prod.id;
    })
    productOutput(arrayItem);
}

getParams();
