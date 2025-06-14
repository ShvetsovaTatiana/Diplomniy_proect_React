import { Link } from "react-router-dom";
import '../../styles/index.scss'
import '../../styles/header.scss'

function Header() {
  return (
    <div className="header_section">
      <header className="top">
        <div className="background_head">
          <div className="header container">
            <div className="header_logo">
              <a href="/"><img src="/img/logo.svg" alt="logo" /></a>
              <button className="search">
                <img src="/img/search_1.svg" alt="search" />
              </button>
            </div>
            <div className="header_nav">
              <input type="checkbox" name="check_nav" id="check" />
              <label htmlFor="check"><img src="/img/menu_1.svg" alt="top nav" /></label>
              <div className="menu">
                <h2 className="menu_heading">MENU</h2>
                <h3 className="menu_subheading">MAN</h3>
                <ul className="menu__ul">
                  <li><a href="#" className="menu_link">Bags</a></li>
                  <li><a href="#" className="menu_link">Accessories</a></li>
                  <li><a href="#" className="menu_link">Denim</a></li>
                  <li><a href="#" className="menu_link">T-Shirt</a></li>
                </ul>
                <h3 className="menu_subheading">WOMAN</h3>
                <ul className="menu__ul">
                  <li><a href="#" className="menu_link">Accessories</a></li>
                  <li><a href="#" className="menu_link">Jackets & Coats</a></li>
                  <li><a href="#" className="menu_link">Polos</a></li>
                  <li><a href="#" className="menu_link">T-Shirts</a></li>
                  <li><a href="#" className="menu_link">Shirts</a></li>
                </ul>
                <h3 className="menu_subheading">KIDS</h3>
                <ul className="menu__ul">
                  <li><a href="#" className="menu_link">Accessories</a></li>
                  <li><a href="#" className="menu_link">Jackets & Coats</a></li>
                  <li><a href="#" className="menu_link">Polos</a></li>
                  <li><a href="#" className="menu_link">T-Shirts</a></li>
                  <li><a href="#" className="menu_link">Shirts</a></li>
                  <li><a href="#" className="menu_link">Bags</a></li>
                </ul>
              </div>
              <Link to='/registration'><button className="sing_up"><img src="/img/top_sing_up_1.svg" alt="top sing up" /></button></Link>
              <Link to="/cart">  <button className="basket">
                <img src="/img/top_basket_1.svg" alt="top basket" />
                <span className="cart_count">2</span>
              </button></Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;