import { Product } from "./products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
 {product: {name: 'motor', price:10}, quantity: 10},
 {product: {name: 'sensor', price:12.50}, quantity: 4},
 {product: {name: 'LED', price:1}, quantity: 20}
];

export function calcInventoryValue(inventoryArray: InventoryItem[]); number {
    let value: number = 0;
    for (let inventory of inventoryArray) {
        value += inventory.product.price * inventory.quantity;
    }
    return value;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);