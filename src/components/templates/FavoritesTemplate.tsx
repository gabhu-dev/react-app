import { useAppSelector } from '../../store/hooks'
import AListProducts from '../AListProducts'

function FavoritesTemplate() {
  const { products } = useAppSelector((state) => state.products.productsResponse)
  const favoritesIds = useAppSelector((state) => state.products.favorites)

  const favoriteProducts = products?.filter(product => favoritesIds.includes(product.id)) || []

  return (
    <div>
      <h1 style={{ padding: '20px', fontSize: '24px', fontWeight: 'bold' }}>Mis Favoritos</h1>
      <AListProducts products={favoriteProducts} />
    </div>
  )
}

export default FavoritesTemplate
