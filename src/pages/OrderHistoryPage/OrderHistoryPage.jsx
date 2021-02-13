import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';


export default function OrderHistoryPage({ user, setUser }) {
  const [orderHistory, setOrderHistory] = useState([]);
  // state for setting active order (show detail on right column)
  const [activeOrder, setActiveOrder] = useState('');
  // 



  useEffect(function() {
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getOrderHistory() {
      const orderHistory = await ordersAPI.getOrders();
      setOrderHistory(orderHistory);
    }
    getOrderHistory();
  }, []);


 
  

  return (
    <main className="OrderHistoryPage">
        <OrderList 
        orderHistory={orderHistory} 
        activeOrder={activeOrder} 
        setActiveOrder={setActiveOrder}
        />
      <OrderDetail order={activeOrder} setOrderHistory={setOrderHistory} orderHistory={orderHistory} setActiveOrder={setActiveOrder}/>
    </main>
  );
}


