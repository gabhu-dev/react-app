import { IProduct } from '../types/products'

function ACardProduct({ product }: { product: IProduct }) {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default ACardProduct