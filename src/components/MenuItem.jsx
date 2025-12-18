import '../styles/menuItem.css';

const MenuItem = ({ name, description, price }) => (
  <div className="itemContainer">
    <div className="row">
      <span className="name">{name}</span>
      <div className="connector"></div>
      <span className="price">$ {price}</span>
    </div>
    {description && <p className="description">{description}</p>}
  </div>
);

export default MenuItem;