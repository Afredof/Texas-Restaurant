
import React from 'react';
import './CartItem.css'; // Import the CSS file for styling

const CartItem = ({ item, updateQuantity, removeItem }) => {
  // Handle the increase or decrease in quantity
  const handleQuantityChange = (delta) => {
    const newQuantity = item.quantity + delta;

    // Remove the item if the quantity is reduced to 0
    if (newQuantity <= 0) {
      removeItem(item.id);
      return;
    }

    // Update quantity with a valid value
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      {/* Product Name */}
      <h4 className="cart-item-name">{item.name}</h4>

      {/* Product Price */}
      <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>

      {/* Total Price for this Product */}
      <p className="cart-item-total">
        Total: ${(item.price * item.quantity).toFixed(2)}
      </p>

      {/* Quantity Controls */}
      <div className="cart-item-quantity-controls">
        <button
          className="cart-item-quantity-button"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          className="cart-item-quantity-button"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        className="cart-item-remove-button"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
