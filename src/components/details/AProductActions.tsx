import { ShoppingBag, Heart } from 'lucide-react'
import { IProduct } from '../../types/products'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, addToCart } from '../../store/slices/products'
import { RootState } from '../../store'
import styles from './AProductActions.module.css'
import AButton from '../shared/AButton'

interface AProductActionsProps {
  product: IProduct
}

function AProductActions({ product }: AProductActionsProps) {
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
    <div className={styles['product-actions']}>
      <AButton onClick={handleAddToCart}>
        <div className={styles['product-actions__add-btn']}>
          <ShoppingBag size={20} />
          <span>Add to cart</span>
        </div>
      </AButton>
      <button 
        className={`${styles['product-actions__favorite']} ${isFavorite ? styles['product-actions__favorite--active'] : ''}`} 
        onClick={handleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </div>
  )
}

export default AProductActions
