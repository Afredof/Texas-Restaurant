
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css'; // Import your CSS file

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate to a different route
  const { cart } = location.state || { cart: [] }; // Access cart passed via Link

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [total, setTotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false); // New state to track if order is placed

  // Calculate total dynamically
  useEffect(() => {
    const newTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    setTotal(newTotal);
  }, [cart]);

  // Function to handle order submission with validation
  const handleOrderSubmit = () => {
    // Check if all required fields are filled
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all fields before submitting the order.');
      return;
    }

    // Simple email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(customerInfo.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simple phone number format validation (basic example)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(customerInfo.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Simulate order processing
    setOrderPlaced(true); // Trigger the GIF animation on order placement

    // Navigate to home page after 3 seconds
    setTimeout(() => {
      navigate('/'); // Navigate to the home page
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, 3000); // Wait for 3 seconds
  };

  const handleCustomerInfoChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  return (
    <div className="checkout-page">
      <h2>Your Order</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h2>Customer Information</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={customerInfo.name}
          onChange={handleCustomerInfoChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={customerInfo.email}
          onChange={handleCustomerInfoChange}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={customerInfo.phone}
          onChange={handleCustomerInfoChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={customerInfo.address}
          onChange={handleCustomerInfoChange}
          required
        />
      </form>

      <button onClick={handleOrderSubmit} disabled={cart.length === 0}>
        Submit Order
      </button>

      {orderPlaced && (
        <div className="order-success">
          {/* Display the GIF when the order is successfully placed */}
          <img 
            src="https://cdn.dribbble.com/users/39201/screenshots/3694057/nutmeg.gif" 
            alt="Order Successful" 
            style={{ width: '300px', marginTop: '20px' }} 
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
