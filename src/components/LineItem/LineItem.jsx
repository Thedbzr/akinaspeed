import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    // <div className="LineItem">
    //   <div className="flex-ctr-ctr">{lineItem.item.brand}</div>
    //   <div className="flex-ctr-ctr flex-col">
    //     <span className="align-ctr">{lineItem.item.name}</span>
    //     <span>{lineItem.item.price.toFixed(2)}</span>
    //   </div>
    //   <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
    //     {!isPaid &&
    //       <button
    //         className="btn-xs"
    //         onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
    //         >−</button>
    //       }
    //     <span>{lineItem.qty}</span>
    //     {!isPaid &&
    //       <button
    //         className="btn-xs"
    //         onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
    //       >+</button>
    //     }
    //   </div>
    //   <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    // </div>

    <>
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
              <td><span className="cellImgText"><img className="cellImg" src={lineItem.item.url} alt="item photo" />{lineItem.item.name}</span></td>
              <td><span>{lineItem.item.price.toFixed(2)}</span></td>
              <td>
                {!isPaid &&
                  <button
                    className="button qtyButton is-small"
                    onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                  >−</button>
                }
                <span>{lineItem.qty}</span>{!isPaid &&
                  <button
                    className="button qtyButton is-small"
                    onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                  >+</button>
                }</td>
              <td><div className="ext-price">${lineItem.extPrice.toFixed(2)}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}