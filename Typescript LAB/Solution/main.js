(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
}
exports.Data = Data;
Data.CATEGORIES = [{
        id: 1,
        name: "Sports",
        description: "Everything a kid needs to play outside",
        products: [{
                id: 1,
                name: "Skateboard",
                description: "it's a skateboard",
                price: 49.95
            }, {
                id: 2,
                name: "Waveboard",
                description: "it's a waveboard",
                price: 69.95
            }, {
                id: 3,
                name: "Longboard",
                description: "it's a longboard",
                price: 119.95
            }]
    }, {
        id: 2,
        name: "Boardgames & Puzzles",
        description: "Everything a kid needs to play inside",
        products: [{
                id: 4,
                name: "CheckerS",
                description: "it's a checkersboard",
                price: 49.95
            }, {
                id: 5,
                name: "UNO",
                description: "UNO Cards",
                price: 69.95
            }]
    }];

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const models_1 = require("./models");
var categories = data_1.Data.CATEGORIES;
var shoppingCart = new models_1.ShoppingCart();
function init() {
    initCategories(categories);
    initListeners();
}
function initCategories(categories) {
    let select = document.getElementById("categories");
    select.innerHTML = "";
    for (let category of categories) {
        let newOption = new Option(category.name, category.id.toString());
        select.appendChild(newOption);
    }
}
function initProducts(event) {
    let categoryId = event.target.value;
    let category = categories.find(c => c.id == categoryId);
    let select = document.getElementById("products");
    select.innerHTML = "";
    for (let product of category === null || category === void 0 ? void 0 : category.products) {
        let newOption = new Option(product.name, product.id.toString());
        select.appendChild(newOption);
    }
}
function addToCart(product, quantity) {
    //TODO implement
}
function showOrderDetail(product, quantity) {
    let table = document.getElementById("cartTable");
    let tbody = table.getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    cell1.innerHTML = product.name;
    let cell2 = document.createElement("td");
    cell2.innerHTML = quantity.toString();
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
}
function initListeners() {
    document.getElementById("categories").onchange = initProducts;
    document.getElementById("add").onclick = () => {
        let categoryId = document.getElementById("categories").value;
        let productId = document.getElementById("products").value;
        let category = categories.find(c => c.id.toString() == categoryId);
        let product = category === null || category === void 0 ? void 0 : category.products.find(p => p.id.toString() == productId);
        let quantity = document.getElementById("quantity").value;
        addToCart(product, parseInt(quantity));
        showOrderDetail(product, parseInt(quantity));
    };
}
init();

},{"./data":1,"./models":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this._items = [];
    }
    get items() {
        return this._items;
    }
    addItem(item) {
        return this._items.push(item);
    }
}
exports.ShoppingCart = ShoppingCart;

},{}]},{},[2]);
