import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useHistory } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser, handleAddToOrder,  categories }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  // const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);

  // Use history object to change routes programmatically
  // const history = useHistory();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
      setActiveCat(items[0].category.name);
    }
    getItems();

    // // Load cart (a cart is the unpaid order for the logged in user)
    // async function getCart() {
    //   const cart = await ordersAPI.getCart();
    //   setCart(cart);
    // }
    // getCart();
  }, []);

  // /*--- Event Handlers --- */
  // async function handleAddToOrder(itemId) {
  //   const cart = await ordersAPI.addItemToCart(itemId);
  //   setCart(cart);
  // }

  // async function handleChangeQty(itemId, newQty) {
  //   const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  //   setCart(cart);
  // }

  // async function handleCheckout() {
  //   await ordersAPI.checkout();
  //   history.push('/orders');
  // }

  return (
    <main className="NewOrderPage">
      <aside>
        <CategoryList
          categories={categories.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
    </main>
  );
}
{/* <OrderDetail
  order={cart}
  handleChangeQty={handleChangeQty}
  handleCheckout={handleCheckout}
/> */}