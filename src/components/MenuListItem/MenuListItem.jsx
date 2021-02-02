import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <>
      {/* <div className="MenuListItem">
        <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
        <div className="name">{menuItem.name}</div>
        <div className="buy">
          <span>${menuItem.price.toFixed(2)}</span>
          <button className="button is-small" onClick={() => handleAddToOrder(menuItem._id)}>
            ADD
        </button>
        </div>
      </div> */}
      <div>
        <div className="card h-100">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={menuItem.url} alt="really cool product image" />
            </figure>
          </div>
          <div className="card-content">
            <p className="itemName">{menuItem.name.toUpperCase()}</p>
          </div>
          <hr className="itemHr" />
          <footer className="cardfooter">
            <span>Price: ${menuItem.price}</span>
            &nbsp; | &nbsp;
            <span><button className="button is-small" onClick={() => handleAddToOrder(menuItem._id)}>ADD</button></span>
          </footer>
        </div>
      </div>
    </>
  );
}