
import ACardProduct from './ACardProduct'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import styles from './AListProducts.module.css'
import { IProduct } from '../../types/products'
import AButton from '../shared/AButton'
import { getProducts } from '../../store/slices/products'
import { Loader2 } from 'lucide-react'

interface AListProductsProps {
  products?: IProduct[]
}

function AListProducts({ products: productsProp }: AListProductsProps) {
  const dispatch = useAppDispatch()
  const { productsResponse, search, loading } = useAppSelector((state) => state.products)
  const { products: storeProducts, total, skip, limit } = productsResponse

  const products = productsProp ?? storeProducts
  const isFavoritesView = !!productsProp

  const currentPage = (skip / limit) + 1
  const hasMore = skip + limit < total

  const handleLoadMore = async () => {
    await dispatch(getProducts({ search, page: currentPage + 1 }))
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div className={styles.list}>
        {loading ? (
          <div className={styles.list__loading}>
            <Loader2 className={styles.loading_icon} size={18} />
            Cargando productos...
          </div>
        ) : (
          !products?.length ? (
            <div>No hay productos</div>
          ) : (
            products.map((product) => (
              <ACardProduct key={product.id} product={product} />
            ))
          )
        )}
      </div>

      {!isFavoritesView && products?.length > 0 && hasMore && (
        <div className={styles.list__pagination}>
          <AButton onClick={handleLoadMore} ghost loading={loading}>
            Cargar más productos
          </AButton>
        </div>
      )}
    </div>
  )
}

export default AListProducts