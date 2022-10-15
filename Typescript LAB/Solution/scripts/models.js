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
