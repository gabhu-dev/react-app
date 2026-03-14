import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { IProduct } from '../../types/products'
import AProductGallery from './AProductGallery'
import AProductInfo from './AProductInfo'
import styles from './AProductSection.module.css'

interface AProductSectionProps {
  product: IProduct
}

function AProductSection({ product }: AProductSectionProps) {
  return (
    <section className={styles['product-section']}>
      <Link to="/" className={styles['product-section__back']}>
        <ArrowLeft size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
        <span style={{ verticalAlign: 'middle' }}>Volver al inicio</span>
      </Link>
      
      <div className={styles['product-section__content']}>
        <AProductGallery images={product.images} title={product.title} />
        <AProductInfo product={product} />
      </div>
    </section>
  )
}

export default AProductSection
