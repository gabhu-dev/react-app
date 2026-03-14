import { IProduct } from '../../types/products'
import AProductActions from './AProductActions'
import ATag from '../shared/ATag'
import styles from './AProductInfo.module.css'

interface AProductInfoProps {
  product: IProduct
}

function AProductInfo({ product }: AProductInfoProps) {
  return (
    <div className={styles['product-info']}>
      <header className={styles['product-info__header']}>
        <div className={styles['product-info__category-wrap']}>
          <span className={styles['product-info__category']}>{product.category}</span>
          <span className={styles['product-info__id']}>#{product.id}</span>
        </div>
        <h1 className={styles['product-info__title']}>{product.title}</h1>
      </header>

      <div className={styles['product-info__price-container']}>
        <span className={styles['product-info__price']}>${product.price.toFixed(2)}</span>
        {product.discountPercentage > 0 && (
          <ATag color="red">-{product.discountPercentage}%</ATag>
        )}
      </div>

      <div className={styles['product-info__section']}>
        <h3 className={styles['product-info__section-title']}>Stock: <span>{product.stock} available</span></h3>
      </div>

      <div className={styles['product-info__section']}>
        <h3 className={styles['product-info__section-title']}>Tags:</h3>
        <div className={styles['product-info__tags']}>
          {product.tags.map(tag => (
            <ATag key={tag}>{tag}</ATag>
          ))}
        </div>
      </div>
      <div className={styles['product-info__description']}>
        <p>{product.description}</p>
      </div>
      <AProductActions product={product} />
    </div>
  )
}

export default AProductInfo
