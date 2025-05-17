import { CartContext } from '@src/contexts/cartContext/cartContext';
import { Button } from '../ui/button';
import './styles.css';
import { useContext } from 'react';

export function CartRow( {book}){

    const { updateBooks } = useContext(CartContext);

const add = () => {
    updateBooks('add', book)
}

const removeOne = () => {
    updateBooks('removeOne', book)
}

const removeBook = () => {
    updateBooks('remove', book)
}

return (
        <div className="cart-row__container">
            <div className="info__container">
                <div className="info__container__description">{book.title}</div>
                <div className="info__container__remove">
                <Button onClick={removeBook(book)} asChild variant={'outline'}>
                  <p>Eliminar</p>
                </Button>
                </div>
            </div>
            <div className="info__container">
                <div className="info__container__cuantity">Cantidad: {book.count}</div>
                <div className="info__container__buttons">
                    <div className="info__container__buttons__button">
                    <Button asChild variant={'outline'}>
                  <p onClick={add(book)}>+</p>
                </Button>
                    </div>
                    <div className="info__container__buttons__button"><Button asChild variant={'outline'}>
                  <p onClick={removeOne(book)}>-</p>
                </Button></div>
                </div>
            </div>
            <div className="price">
                <p>${book.price}</p>
            </div>
        </div>
    )

}




