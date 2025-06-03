/* 
    Write a TypeScript function named calculateTotalPrice that calculates the total price of a list of items, considering a potential discount.

    The function should take two arguments:

        items: An array of objects, where each object represents an item and has the following structure:
            name: string 
            price: number 
            quantity: number 
        discountPercentage: number (optional)

    The function should return the total price as a number.
*/

interface Item {
    name: string;
    price: number;
    quantity: number;
}

function calculateTotalPrice(items: Item[], discount?: number): number {
    let totalPrice: number = items.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
    );

    if (discount) {
        return totalPrice - totalPrice * (discount / 100);
    }

    return totalPrice;
}
