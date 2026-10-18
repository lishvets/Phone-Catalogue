import styles from './CartItem.module.scss';
import { CartItem as CartItemType } from '../../types/CartItem';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const {
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/product/${item.itemId}`);
  };

  return (
    <div className={styles.cart} onClick={handleRowClick}>
      <div className={styles.product}>
        <button
          className={styles.removeButton}
          onClick={e => {
            e.stopPropagation();
            handleRemoveFromCart(item.itemId);
          }}
        >
          X
        </button>
        <img src={item.image} alt={item.name} className={styles.image} />
        <p className={styles.title}>{item.name}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.buttons} onClick={e => e.stopPropagation()}>
          <button
            className={styles.quantityButton}
            onClick={() => handleDecreaseQuantity(item.itemId)}
          >
            -
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button
            className={styles.quantityButton}
            onClick={() => handleIncreaseQuantity(item.itemId)}
          >
            +
          </button>
        </div>
        <p className={styles.price}>${item.price}</p>
      </div>
    </div>
  );
};
