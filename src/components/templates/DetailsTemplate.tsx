import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import productsService from '../../services/products'
import { IProduct } from '../../types/products'

function DetailsTemplate() {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      setLoading(true)
      productsService.getById(Number(id))
        .then(data => {
          setProduct(data)
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) return <div>Cargando...</div>
  if (!product) return <div>Producto no encontrado</div>

  return (
    <div>
      <Link to="/">Volver</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width={300} />
      <p>{product.description}</p>
      <p>Categoría: {product.category}</p>
      <div>
        {product.images.map((img, idx) => (
          <img key={idx} src={img} alt="" width={100} />
        ))}
      </div>
    </div>
  )
}

export default DetailsTemplate