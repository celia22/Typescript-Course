import React, { useContext }  from 'react';
import { faker } from '@faker-js/faker';

const productsArr = [...Array(40)].map(() => ({
    id: faker.datatype.uuid(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1,2,3,4,5]),
    inStock: faker.helpers.arrayElement([0,3,5,6,7]),
    image: faker.image.transport()

   }))


interface CartContextInterface {
    products: Array<any>,
 }

const productsCartContext: CartContextInterface = {
    products: productsArr
}


const ctxt = React.createContext<CartContextInterface | null>(null);

export const CarContextProvider = ctxt.Provider;

export const CartContextConsumer = ctxt.Consumer;




console.log(productsCartContext)

export const Products = () => {
    <CarContextProvider value={productsCartContext}>

    </CarContextProvider>
}   


