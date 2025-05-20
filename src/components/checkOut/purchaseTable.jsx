export const PurchaseTable = ({booksInfo}) => {
    console.log("Contenido de booksInfo:", booksInfo); // Muestra el contenido en la consola
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
                {booksInfo.map((book) =>(
                    <tr >
                    <td>{book.title}</td>
                    <td>{book.count}</td>
                    <td>${book.price}</td>
                    <td>${book.price * book.count }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
