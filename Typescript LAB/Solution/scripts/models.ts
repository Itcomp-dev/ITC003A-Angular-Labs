export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    products: Product[];
}

export interface OrderDetail {
    product: Product;
    quantity: number;
}

export class ShoppingCart {

    private _items : OrderDetail[] = []

    get items() {
        return this._items
    }

    public addItem(item: OrderDetail): number {
        return this._items.push(item)
    }
}