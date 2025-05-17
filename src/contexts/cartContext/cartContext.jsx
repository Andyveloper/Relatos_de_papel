import { createContext } from 'react';

export const CartContext = createContext([
    {
        title: "Harry Potter",
        author: "jk.Rwling",
        count: 2,
        price: 50000
    },
    {
        title: "Harry Potter 2",
        author: "jk.Rwling",
        count: 2,
        price: 80000
    },
    {
        title: "Harry Potter 4",
        author: "jk.Rwling",
        count: 2,
        price: 75000
    }
]); 
