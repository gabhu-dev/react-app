import ACardProduct from './ACardProduct'
import { useAppSelector } from '../store/hooks'

function AListProducts() {
  const { products } = useAppSelector((state) => state.products.productsResponse)

  return (
    <div>
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