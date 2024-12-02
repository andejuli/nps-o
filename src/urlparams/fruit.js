const fruit = [
    { color: "red", name: "Apple",  image: "images/apple.png" },
    { color: "yellow", name: "Banana", image: "images/banana.png" },
    { color: "blue", name: "Blueberries",  image: "images/blueberries.png" }
  ];

function getParams() {
    console.log(window.location);  //notice .search property
    const paramString = window.location.search;  //returns ?color=red
    const param = new URLSearchParams(paramString);  //returns color=red
    let prodColor = (param.get('color'));  //returns red
    getProductDetails(prodColor);
    
}

function productOutput(fruit) {
    const html = `<section class="product">
    <img src="${fruit[0].image}" alt="${fruit[0].name}">
    <div class="product__details">
        <h2>${fruit[0].name}</h2>
        </div>
        </section>`
    const element = document.querySelector('#output');
    element.innerHTML = html;
}

function getProductDetails(prodColor) {   
    let arrayItem = fruit.filter(item =>{
        return prodColor == item.color;
    })
    productOutput(arrayItem);
}

getParams();
