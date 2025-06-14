import '../styles/index.scss';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCart from '../components/ProductCard/ProductCard';
import Header from '../components/Header/Header';
import Aside from '../components/Aside/Aside';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="home_page">
      <Header />
      <div className="background_top">
        <div className="top__content container">
          <img className="top_photo" src="/img/photo_top.svg" alt="photo top" />
          <div className="top_content_block">
            <img className="rectangle_img" src="/img/rectangle_top.svg" alt="rectangle top" />
            <div className="title_block">
              <h1 className="title">THE BRAND</h1>
              <h1 className="subtitle">OF LUXERIOUS <span className="subtitle_col">FASHION</span></h1>
            </div>
          </div>
        </div>
      </div>
      <section className="contents container">
        <div className="image_container">
          <img src="/img/content_photo_1.svg" alt="content photo 1" />
          <div className="content_overlay">
            <h2 className="content_text">30% OFF</h2>
            <Link to='/product'><p className="content_text_next">FOR WOMEN</p></Link>
          </div>
        </div>
        <div className="image_container">
          <img src="/img/content_photo_2.svg" alt="content photo 2" />
          <div className="content_overlay">
            <h2 className="content_text">HOT DEAL</h2>
            <Link to='/catalog'><p className="content_text_next">FOR MEN</p></Link>
          </div>
        </div>
        <div className="image_container">
          <img src="/img/content_photo_3.svg" alt="content photo 3" />
          <div className="content_overlay">
            <h2 className="content_text">NEW ARRIVALS</h2>
            <a href="#">
              <p className="content_text_next">FOR KIDS</p>
            </a>
          </div>
        </div>
        <div className="image_container_big">
          <img src="/img/content_photo_4.svg" alt="content photo 4" />
          <div className="content_overlay">
            <h2 className="content_text">LUXIROUS & TRENDY</h2>
            <a href="#">
              <p className="content_text_next">ACCESORIES</p>
            </a>
          </div>
        </div>
      </section>
      <main>
        <div className="sections container">
          <h1 className="section_title">Fetured Items</h1>
          <h3 className="section_subtitle">Shop for items based on what we featured in this week</h3>
          <div className="items">
            {products
              .filter(product => product.page === '/')
              .map(product => (
                <ProductCart key={product.id} {...product} />
              ))}
          </div>
          <div className="buttons">
            <button className="item_btn">Browse All Product</button>
          </div>
        </div>
        <Aside />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default Home;