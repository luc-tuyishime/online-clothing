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
