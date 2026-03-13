import ACardProduct from './ACardProduct'
import { useAppSelector } from '../store/hooks'
import styles from './AListProducts.module.css'
import { IProduct } from '../types/products'

interface AListProductsProps {
  products?: IProduct[]
}

function AListProducts({ products: productsProp }: AListProductsProps) {
  const { products: storeProducts } = useAppSelector((state) => state.products.productsResponse)

  const products = productsProp ?? storeProducts

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