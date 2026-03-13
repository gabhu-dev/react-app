import ACardProduct from './ACardProduct'
import { useAppSelector } from '../store/hooks'
import styles from './AListProducts.module.css'

function AListProducts() {
  const { products } = useAppSelector((state) => state.products.productsResponse)

  return (
    <div className={styles.list}>
      {!products?.length? (
        <div>No hay productos</div>
      ) : (
        products.map((product) => (
          <ACardProduct key={product.id} product={product} />
        ))
      )}
    </div>
  )
}

export default AListProducts