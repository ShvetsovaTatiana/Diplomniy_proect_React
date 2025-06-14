import styles from './ProductCard.module.scss';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_image_wrapper}>
        <img src={image} alt={title} />
        <div className={styles.item_cart}>
          <a href="#">
            <img src="/img/basket_content.svg" alt="Add to cart" />
            <div className={styles.item_cart_text_wrap}>
              <p className={styles.item_cart_text}>Add to Cart</p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.item_product}>
        <h2 className={styles.item_title}>{title}</h2>
        <p className={styles.item_text}>{description}</p>
        <p className={styles.item_price}>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;