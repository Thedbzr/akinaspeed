import LineItem from '../../components/LineItem/LineItem';
import './CartPage.css'
import { useEffect} from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function CartPage({ order,setCart, handleChangeQty, handleCheckout }) {

    useEffect(function () {
        // Load cart (a cart is the unpaid order for the logged in user)
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);

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
                    <div className="findMods">Lets Find Some Mods!</div>
                }
            </div>
        </>
    );
}
