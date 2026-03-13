import { Link } from 'react-router-dom'
import { IProduct } from '../types/products'
import AButton from './AButton'
import { ShoppingCart, Heart } from 'lucide-react'
import styles from './ACardProduct.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, addToCart } from '../store/slices/products'
import { RootState } from '../store'

function ACardProduct({ product }: { product: IProduct }) {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.products.favorites)
  const isFavorite = favorites.includes(product.id)

  const handleFavorite = () => {
    dispatch(addFavorite(product.id))
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <article className={styles.card}>
      <div className={styles.card__image_container}>
        <Link to={`/details/${product.id}`}>
          <img 
            className={styles.card__image} 
            src={product.thumbnail} 
            alt={product.title} 
          />
        </Link>
        <button 
          className={`${styles.card__favorite} ${isFavorite ? styles['card__favorite--active'] : ''}`} 
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={handleFavorite}
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className={styles.card__content}>
        <div className={styles.card__header}>
          <span className={styles.card__category}>{product.category}</span>
          <span className={styles.card__stock}>In Stock: {product.stock}</span>
        </div>

        <h2 className={styles.card__title}>
          <Link to={`/details/${product.id}`}>{product.title}</Link>
        </h2>

        <div className={styles.card__tags}>
          {product.tags?.map(tag => (
            <span key={tag} className={styles.card__tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.card__footer}>
          <span className={styles.card__price}>${product.price}</span>
          <AButton onClick={handleAddToCart}>
            <div className={styles.card__button_content}>
              <ShoppingCart size={18} />
              <span>Add</span>
            </div>
          </AButton>
        </div>
      </div>
    </article>
  )
}

export default ACardProduct