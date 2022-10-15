

var categories = []
var shoppingCart

function init() {
    initCategories(categories)
    initListeners()
}

function initCategories(categories) {
    let select = document.getElementById("categories");
    select.innerHTML =""
    for (let category of categories) {
        let newOption = new Option(category.name, category.id.toString());
        select.appendChild(newOption);
    }

}

function initProducts(event) {
    let categoryId = event.target.value
    let category = categories.find(c=>c.id==categoryId)
    let select = document.getElementById("products");
    select.innerHTML =""
    for (let product of category.products) {
        let newOption = new Option(product.name, product.id.toString());
        select.appendChild(newOption);
    }  
}

function addToCart(product, quantity) {
    //TODO implement
}

function showOrderDetail(product, quantity) {
    let table = document.getElementById("cartTable")
    let tbody = table.getElementsByTagName("tbody")[0]
    let row = document.createElement("tr")
    let cell1 = document.createElement("td")
    cell1.innerHTML = product.name
    let cell2 = document.createElement("td")
    cell2.innerHTML = quantity.toString()
    row.appendChild(cell1)
    row.appendChild(cell2)
    tbody.appendChild(row)
}


function initListeners() {
    document.getElementById("categories").onchange = initProducts
    document.getElementById("add").onclick = () => {
        let categoryId = document.getElementById("categories").value
        let productId = document.getElementById("products").value
        let category = categories.find(c=>c.id.toString()==categoryId)
        let product = category.products.find(p=>p.id.toString()==productId)
        let quantity = document.getElementById("quantity")?.value
        addToCart(product, parseInt(quantity))
        showOrderDetail(product, parseInt(quantity))
    }
}

init()