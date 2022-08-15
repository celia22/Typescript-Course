import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import {
  CartContextFunctions,
  CartItem,
} from "../interfaces/cartItemsInterface";
import {ShoppingCart} from '../components/ShoppingCart'
import FetchCart from "../services/httpService/fetchCart";
import { cartIemsProps } from "../interfaces/cartItemsInterface";
import { useLocalStorage } from '../hooks/useLocalStorage'

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextFunctions);

export const useCartCtx = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [isOpen, setIsOpen ] = useState(false)

  const storeFetchedItems = FetchCart();
  const [storeItems, setStoreItems] = useState<cartIemsProps[]>([]);


  useEffect(() => {
    const api = async () => {
      setStoreItems(storeFetchedItems);
    };
    api();
  }, [storeItems, storeFetchedItems]);

  const getItemsQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    console.log("id", id);
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity-- };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  const openCart = () => setIsOpen(true)

  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider
      value={{
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        storeItems
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </CartContext.Provider>
  );
};
