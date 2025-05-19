import './Cart.css';
import { CartConfig } from './Cart.config';
import { CartRow } from '@src/components/cartComponents/cart-row';
import { Button } from '@src/components/ui/button';
import { Link } from 'react-router';
import { useContext } from 'react';
import { CartInfoContext } from '@src/contexts/cartInfoContext/cartInfoContext';

const Cart = () => {
    const context = useContext(CartInfoContext);
    const {booksInfo} = context;
    const getTotalPrice = (books) => {
    return books.reduce( (acc, books) => books.price * books.count + acc , 0);
}

    return (
        <div className="pt-25 h-screen">
            <h1 className='text-4xl font-semibold title'>{CartConfig.labels.title}</h1>
            {context.booksInfo.map(book => <CartRow  book={book}/>)}
            <div className="total-price">
                <h2 className='total-price__title'>Total: ${getTotalPrice(booksInfo)}</h2>
                <Button onClick={() => buy()} asChild variant={'default'} size={'lg'}>
                   <Link to={`/checkout`}>Pagar</Link>
                </Button>
            </div>
        </div>
    )
}

export default Cart
