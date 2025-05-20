import {
  Card, CardHeader,
  CardTitle, CardDescription,
  CardContent, CardFooter
} from '@src/components/ui/card';

import {
  Dialog, DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle, DialogTrigger,
} from '@src/components/ui/dialog';
import '@src/styles/checkout.css';
import { PurchaseTable } from '@src/components/checkOut/purchaseTable';
import { Button } from '@src/components/ui/button'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartInfoContext } from '@src/contexts/cartInfoContext/cartInfoContext';

const CheckOut= () => {
  const context = useContext(CartInfoContext);
  const {booksInfo} = context;
  const envio = 5.50;
  const descuento = 0.00; // Reservado para futuro uso

  const calcularSubtotal = () =>
    booksInfo.reduce((total, book) => total + book.price * book.count, 0);

  const subtotal = calcularSubtotal();
  const totalPay = (subtotal + envio - descuento).toFixed(2);

  const navigate = useNavigate();

  const handlePago = () => {
    // vaciarCarrito();
    navigate('/home');
  };

  return (
    <div className="checkout-summary flex flex-col items-center">
      <Card className="checkout-summary__card items-center">
        <span className="material-symbols-outlined">receipt_long</span>
        <CardTitle className="checkout-summary__title">
          <h1>Pago</h1>
        </CardTitle>
        <Card className="checkout-summary__detailCard">
          <CardHeader className={"checkout-summary__header"}>
            <CardTitle className="checkout-summary__title">
              Resumen de compra
            </CardTitle>
            <CardDescription className="checkout-summary__description">
              Detalles de tu pedido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PurchaseTable booksInfo={booksInfo}></PurchaseTable>
            <CardDescription>
              <div className="checkout-summary__totals">
                <div className="checkout-summary__row">
                  <span>Subtotal:</span>
                  <span id="value">${subtotal}</span>
                </div>
                <div className="checkout-summary__row">
                  <span>Costo de envío:</span>
                  <span id="value">${envio.toFixed(2)}</span>
                </div>
                <div className="checkout-summary__row">
                  <span>Descuento (cupón):</span>
                  <span id="value">-${descuento.toFixed(2)}</span>
                </div>
                <hr />
              </div>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="checkout-summary__row--total">
              <span className='checkout-summary__label'>Total a pagar:</span>
            </div>
            <span className='checkout-summary__value'>${totalPay}</span>

          </CardFooter>
        </Card>
        <Dialog className="checkout-summary__dialog"
          onOpenChange={(open) => {
            if (!open) handlePago();
          }}
        >
          <DialogTrigger asChild>
            <Button variant="default">Pagar</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <span id="check" className="material-symbols-outlined" >check_circle</span>
              <DialogTitle className="checkout-summary__dialog">¡Pedido realizado con éxito!</DialogTitle>
              <DialogDescription>
                Gracias por tu compra.
                Tu pedido ha sido procesado y se enviará a la dirección proporcionada.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
}
export default CheckOut
