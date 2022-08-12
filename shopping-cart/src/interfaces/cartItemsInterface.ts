export interface cartIemsProps {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
};


export interface CartItem {
    id: number,
    quantity: number
}

// TODO , CREATE NEW CONTEXT OR REDUX TOOLKIT TO FETCH DATA FROM 
export interface CartContextFunctions {
    openCart: () => void,
    closeCart: () => void,
    cartQuantity: number,
    cartItems: CartItem[],
    getItemsQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void,
    storeItems: any[]
}