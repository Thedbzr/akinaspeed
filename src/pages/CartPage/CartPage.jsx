



export default function CartPage() {
    return (
        <>
            <h1>Cart Page</h1>
            <div className="cartContainer">
                <div className="table-container">
                    <table className="table">
                        <thead className="tableHead">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GRIMESPEED LightWeight Crank Pulley</td>
                                <td>$132.00</td>
                                <td>1</td>
                                <td>$132.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead className="tableHead cartTH">
                            <tr>
                                <th>Cart</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$132.00</td>
                            </tr>
                            <tr>
                                <td>Shipping & Taxes</td>
                                <td>$25.99</td>
                            </tr>
                        </tbody>
                        <tfoot className="cartTF">
                            <tr>
                                <td>Total</td>
                                <td>$157.99</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className="button is-fullwidth">CHECKOUT</button>
                </div>
            </div>
        </>
    );
}