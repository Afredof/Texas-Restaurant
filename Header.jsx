import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import letter from "../../public/assets/letter-t.png";
import './Header.css';

const Header = ({ cartCount }) => { // Receive cartCount as a prop
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo-container">
          <Link to="/">
            <img src={letter} alt="Texas Restaurant Logo" className="logo" />
          </Link>
          <h1 className="title">Texas Restaurant</h1>
        </div>
      <nav className="navbar">
        
        <div className={` newnav nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>

          {/* Cart Link with Notification Count */}
          <Link to="/cart" className="cart-link">
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          <Link to="/contact">Contact Us</Link>
          <Link to="/signin">Login</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Header;
