import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <>
      <div className="CategoryList menu">
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          {cats}
        </ul>
      </div>
    </>
  );
}
