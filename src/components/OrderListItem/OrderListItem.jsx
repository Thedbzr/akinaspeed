import './OrderListItem.css';

export default function OrderListItem({ order, setActiveOrder, activeOrder }) {
  return (
    <div onClick={() => setActiveOrder(order)} className={order === activeOrder ? 'OrderListItem selected' : 'OrderListItem'} >
      <div>
        <div>Order Id: 
          <span className="smaller">{order.orderId}</span>
        </div>
        <div className="smaller">{order.orderDate}</div>
      </div>
      <div className="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div className="smaller">{order.totalQty} Items</div>
      </div>
    </div>
  );
}