
import { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import { getMenuItems } from '../util/api';
import { toast, ToastContainer } from 'react-toastify'; // Import React Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import './Menu.css';

const Menu = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (err) {
        console.error('Error fetching menu items:', err);
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Function to show toast notification when item is added to cart
  const handleAddToCart = (foodItem) => {
    addToCart(foodItem); // Add item to the cart (assumes you pass addToCart as a prop)
    toast.success(`${foodItem.name} has been added to the cart!`, {
      position: "top-right",
      autoClose: 3000, // Toast will auto close after 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (isLoading) {
    return <p>Loading menu items...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="heading">Menu</h2>
      {menuItems.length === 0 ? (
        <p>No menu items available. Add some items!</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item) => (
            <FoodCard key={item.id} food={item} addToCart={() => handleAddToCart(item)} />
          ))}
        </div>
      )}

      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default Menu;


