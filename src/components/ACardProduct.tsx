import { Link } from 'react-router-dom'
import { IProduct } from '../types/products'

function ACardProduct({ product }: { product: IProduct }) {
  return (
    <Link to={`/details/${product.id}`}>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </Link>
  )
}

export default ACardProduct