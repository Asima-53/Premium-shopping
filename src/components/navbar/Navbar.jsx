import { useState } from 'react'
import { ShoppingCart, SquareMenu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  
  return (
    <div>
      <div className="navbar-main-container">
        <div className="navbar-container">

          <div className="nav-heading">
            <h1 className="nav-heading" >Premium Shopping</h1>
          </div>

          <div
          className={`toggle-menu ${isOpen ? 'active' : ''}`}
           onClick={toggleMenu}
          >
            <SquareMenu 
            size={45}
            />
          </div>

          <div
          className={`nav-links ${isOpen ? 'active-nav-links' : ''}`}
          >
            <a href="">Home</a>
            <a href="#products">Products</a>
            <a href="#reviews">Reviews</a>

            <Link to={"/products/cart"}><ShoppingCart size={40} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
