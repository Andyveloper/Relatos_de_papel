export const PurchaseTable = ({carrito}) => {
    return (
        <table className="checkout-summary__table">
            <thead>
                <tr className="checkout-summary__table--header">
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map((libro) =>(
                    <tr key={libro.id}>
                    <td>{libro.titulo}</td>
                    <td>{libro.cantidad}</td>
                    <td>${libro.precio.toFixed(2)}</td>
                    <td>${libro.precio * libro.cantidad }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
