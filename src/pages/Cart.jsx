import '../styles/index.scss';
import '../styles/cart.scss';
import { Link } from 'react-router-dom';
import products from '../data/products';
import CartItem from '../components/CartItem/CartItems'
import { useState } from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

function Cart() {

  const [items, setItems] = useState(
    products
      .filter(p => p.page === 'cart')
      .map(product => ({ ...product, quantity: 1 }))
  );

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setItems(prev => prev.map(item =>
      item.id === id ? {
        ...item,
        quantity: newQuantity === '' ? 1 : Math.max(1, newQuantity)
      } : item
    ));
  };

  const subTotal = items.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return sum + (price * quantity);
  }, 0);

  return (
    <div className="cart_page">
      <Header />
      <div className="top-head">
        <div className="top-head-flex container">
          <h2 className="top-head__heading">SHOPPING CART</h2>
        </div>
      </div>
      <main>
        <div className="cart__section container">
          <div className="cart__section_items">
            {items.map(product => (
              <CartItem
                key={product.id}
                product={product}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
            <div className="cart__buttons container">
              <div className="cart__buttons_btn" onClick={() => setItems([])}>CLEAR SHOPPING CART</div>
              <div className="cart__buttons_mobile-btn" onClick={() => setItems([])}>Clear shopping cart</div>
              <Link to='/catalog'>
                <div className="cart__buttons_btn">CONTINUE SHOPPING</div>
                <div className="cart__buttons_mobile-btn">Continue shopping</div>
              </Link>
            </div>
          </div>
          <div className="section__form">
            <h2 className="section__form_title">SHIPPING ADRESS</h2>
            <div className="section__form-format">
              <form action="#" className="section__form_cart">
                <input className="section__form_text" type="text" placeholder="Bangladesh" />
                <input className="section__form_text" type="text" placeholder="State" />
                <input className="section__form_text" type="number" placeholder="Postcode / Zip" />
                <button className="section__form_btn">GET A QUOTE</button>
              </form>
              <div className="section__total">
                <h3 className="section__total_price">
                  <span className="section__total_price_text">SUB TOTAL</span>
                  <span className="section__total_price_number">${subTotal.toFixed(2)}</span>
                </h3>
                <h2 className="section__total_price_2">
                  <span className="section__total_price_2_text">GRAND TOTAL</span>
                  <span className="section__total_price_2_number">${subTotal.toFixed(2)}</span>
                </h2>
                <button className="section__total_btn">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
        <About />
      </main >
      <Footer />
    </div >
  );
}

export default Cart;