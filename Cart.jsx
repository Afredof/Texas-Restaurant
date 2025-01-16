import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cart, updateQuantity, removeItem }) => {
  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + (item.price || 0) * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div style={{ padding: '2rem', minHeight: '80vh' }}>
      <h2 className='carthead'>Your Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link to="/menu" style={{ color: 'red', textDecoration: 'underline' }}>
            Go back to the menu
          </Link>
          .
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <div>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>

          {/* Cart Total */}
          <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            <p>Total: ${calculateTotal()}</p>

            {/* Proceed to Checkout Button */}
            <Link
              to="/checkout"
              state={{ cart: cart }} // Pass cart state using React Router v6
            >
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ff0000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

