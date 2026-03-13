import ACardProduct from './ACardProduct'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import styles from './AListProducts.module.css'
import { IProduct } from '../types/products'
import AButton from './AButton'
import { getProducts } from '../store/slices/products'

interface AListProductsProps {
  products?: IProduct[]
}

function AListProducts({ products: productsProp }: AListProductsProps) {
  const dispatch = useAppDispatch()
  const { productsResponse, search } = useAppSelector((state) => state.products)
  const { products: storeProducts, total, skip, limit } = productsResponse

  const products = productsProp ?? storeProducts
  const isFavoritesView = !!productsProp

  const currentPage = (skip / limit) + 1
  const hasMore = skip + limit < total

  const handleLoadMore = () => {
    dispatch(getProducts({ search, page: currentPage + 1 }))
  }

  return (
    <div>
      <div className={styles.list}>
        {!products?.length ? (
          <div>No hay productos</div>
        ) : (
          products.map((product) => (
            <ACardProduct key={product.id} product={product} />
          ))
        )}
      </div>

      {!isFavoritesView && products?.length > 0 && hasMore && (
        <div className={styles.pagination}>
          <AButton onClick={handleLoadMore}>
            Cargar más
          </AButton>
        </div>
      )}
    </div>
  )
}

export default AListProducts