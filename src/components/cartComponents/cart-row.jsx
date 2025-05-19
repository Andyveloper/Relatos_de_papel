import { Button } from '../ui/button';
import './styles.css';
import { useContext } from 'react';
import { CartInfoContext } from '@src/contexts/cartInfoContext/cartInfoContext';

export function CartRow({book}){

    const { updateBooks } = useContext(CartInfoContext);

const addOne = () => {
   updateBooks('addOne', book)
 }

const removeOne = () => {
     updateBooks('removeOne', book)
}

const remove = () => {
  updateBooks('remove', book)
}

return (
        <div className="cart-row__container">
            <img  className="info__container__image" src={`https://covers.openlibrary.org/b/olid/${book.coverEdition}-L.jpg`} alt={book.title} />
            <div className="info__container">
                <div className="info__container__description">{book.title}</div>
                <div className="info__container__remove">
                <Button onClick={() => remove()} asChild variant={'outline'}>
                  <p>Eliminar</p>
                </Button>
                </div>
            </div>
            <div className="info__container">
                <div className="info__container__cuantity">Cantidad: {book.count}</div>
                <div className="info__container__buttons">
                    <div className="info__container__buttons__button">
                    <Button onClick={() => addOne()} asChild variant={'outline'}>
                  <p>+</p>
                </Button>
                    </div>
                    <div className="info__container__buttons__button"><Button onClick={() => removeOne()} asChild variant={'outline'}>
                  <p>-</p>
                </Button></div>
                </div>
            </div>
            <div className="price">
                <p>${book.price}</p>
            </div>
        </div>
    )

}




