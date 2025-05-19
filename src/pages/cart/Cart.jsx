import './Cart.css';
import { CartConfig } from './Cart.config';
import { CartRow } from '@src/components/cartComponents/cart-row';
import { Button } from '@src/components/ui/button';
import { Link } from 'react-router';
import { CartContext } from '@src/contexts/cartContext/cartContext';
import { useContext } from 'react';

const Cart = () => {
    const context = useContext(CartContext);
    const books= context.books;
    if(!books){
        throw new Error('hola mor');
    }
    console.log(books)

    // const books = [
    //     {
    //         title: "Harry Potter",
    //         author: "jk.Rwling",
    //         coverEdition: "OL23321225M",
    //         count: 2,
    //         price: 50000
    //     },
    //     {
    //         title: "Harry Potter 2",
    //         author: "jk.Rwling",
    //         coverEdition: "OL23321225M",
    //         count: 2,
    //         price: 80000
    //     },
    //     {
    //         title: "Harry Potter 4",
    //         author: "jk.Rwling",
    //         coverEdition: "OL23321225M",
    //         count: 2,
    //         price: 75000
    //     }
    // ]

    return (
        <div className="pt-25 h-screen">
            <h1 className='text-4xl font-semibold title'>{CartConfig.labels.title}</h1>
            {books.map((book) => (
                    <CartRow book = {book} />
            ))}
            <div className="total-price">
                <h2 className='total-price__title'>Total: ${getTotalPrice(books)}</h2>
                <Button asChild variant={'default'} size={'lg'}>
                  <Link to="/home">Pagar</Link>
                </Button>
            </div>

        </div>
    )
}

export default Cart


const getTotalPrice = (books) => {
    return books.reduce( (acc, books) => books.price + acc , 0);
}
