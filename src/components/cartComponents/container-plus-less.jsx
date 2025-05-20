import { CartInfoContext } from "@src/contexts/cartInfoContext/cartInfoContext";
import { useContext } from "react";
import './styles.css';
import { Button } from "../ui/button";

export function ContainerPlusLess({book}){

  const { updateBooks } = useContext(CartInfoContext);

  const addOne = () => {
    updateBooks('addOne', book)
  }

  const removeOne = () => {
    updateBooks('removeOne', book)
  }


    return (
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
    )
}
