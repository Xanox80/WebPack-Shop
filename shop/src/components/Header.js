import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (orders, onDelete) => {
  let summa = 0;
  orders.forEach((el) => {
    summa += parseFloat(el.price);
  });
  return (
    <div>
      {orders.map((el) => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className="Price"> Price: {summa}$</p>
    </div>
  );
};

const showNothing = () => {
  return <div>Ваша корзина пуста</div>;
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакт</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0
              ? showOrders(props.orders, props.onDelete)
              : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
