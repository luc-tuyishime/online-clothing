export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Find the Item in cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    // IF Exist increment the quantity + 1
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // IF not exist return the item with quanity = 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Decrease or Remove ITEM
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // Check if Item exist by Find
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // Check if CartIten quantity === 1
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => {
        // IF cartItem.id === cartItemToremove.id decrease the object quantity - 1
        // By doing immutability, spread everything inside cartItem and update the quantity
        return cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
    });
};
