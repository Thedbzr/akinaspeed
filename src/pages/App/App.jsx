import { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);

  // Use history object to change routes programmatically
  const history = useHistory();
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

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers --- */
  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleChangeQty(itemId, newQty) {
    const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(cart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    history.push('/orders');
  }
  

  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <AuthPage setUser={setUser} />
            </Route>
            <Route exact path="/orders/new">
              <NewOrderPage
                cart={cart}
                handleChangeQty={handleChangeQty}
                handleAddToOrder={handleAddToOrder}
                handleCheckout={handleCheckout}
                categories={categoriesRef}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
                menuItems={menuItems}
              />
            </Route>
            <Route exact path="/orders/cart">
              <CartPage 
              order={cart}
              handleChangeQty={handleChangeQty}
              handleCheckout={handleCheckout}
              />
            </Route>
            <Route exact path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </>
      }
    </main>
  );
}
