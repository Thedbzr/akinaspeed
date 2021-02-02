import LineItem from '../../components/LineItem/LineItem';
import './CartPage.css'

export default function CartPage({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );

    return (
        <>
            <h1>Cart Page</h1>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {lineItems.length ?
                    <>
                        <div id="cartLineItems">
                            <div>
                                {lineItems}
                                {/* <section className="total">
                                    {order.isPaid ?

                                        <span className="left">TOTAL&nbsp;&nbsp;</span>

                                        :
                                        <button
                                            className="btn-sm"
                                            onClick={handleCheckout}
                                            disabled={!lineItems.length}
                                        >CHECKOUT</button>
                                    }
                                    <span>{order.totalQty}</span>
                                    <span className="right">${order.orderTotal.toFixed(2)}</span>
                                </section> */}
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
                                            <td>ItemQty</td>
                                            <td>{order.totalQty}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="cartTF">
                                        <tr>
                                            <td>Total</td>
                                            <td>${order.orderTotal.toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <button
                                    className="button is-fullwidth"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >CHECKOUT</button>
                            </div>
                        </div>
                    </>
                    :
                    <div className="hungry">Lets Find Some Mods!</div>
                }
            </div>
        </>
    );
}
{/* <div className="cartContainer">
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
</div> */}