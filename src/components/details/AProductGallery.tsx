import { useState } from 'react'
import styles from './AProductGallery.module.css'

interface AProductGalleryProps {
  images: string[]
  title: string
}

function AProductGallery({ images, title }: AProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className={styles['product-gallery']}>
      <div className={styles['product-gallery__main']}>
        <img 
          src={mainImage} 
          alt={title} 
          className={styles['product-gallery__main-img']} 
        />
      </div>
      
      {images.length > 1 && (
        <div className={styles['product-gallery__thumbnails']}>
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`${styles['product-gallery__thumbnail-btn']} ${mainImage === img ? styles['product-gallery__thumbnail-btn--active'] : ''}`}
              onClick={() => setMainImage(img)}
              aria-label={`View image ${idx + 1}`}
            >
              <img 
                src={img} 
                alt="" 
                className={styles['product-gallery__thumbnail-img']} 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AProductGallery
