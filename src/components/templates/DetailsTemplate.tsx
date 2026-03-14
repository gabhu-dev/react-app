import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsService from '../../services/products'
import { IProduct } from '../../types/products'
import AProductSection from '../details/AProductSection'

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
    <AProductSection product={product} />
  )
}

export default DetailsTemplate
