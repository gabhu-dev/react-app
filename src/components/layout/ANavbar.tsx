import styles from './ANavbar.module.css'
import { ShoppingCart, Heart } from 'lucide-react'
import AInputSearch from '../shared/AInputSearch'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getProducts, setSearch as setSearchStore } from '../../store/slices/products'
import { Link } from 'react-router-dom'
import { endWaitTyping } from '../../utils/helpers'
import ALogo from '../shared/ALogo'


function ANavbar() {
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.products.cart)
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  const favoritesCount = useAppSelector(state => state.products.favorites.length)

  useEffect(() => {
    dispatch(setSearchStore(search))
    endWaitTyping(() => {
      dispatch(getProducts({ search, page: 1 }))
    }, 500)
  }, [dispatch, search])

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <ALogo />
      </Link>
      <AInputSearch value={search} onChange={setSearch} />
      <ul className={styles['navbar__icons']}>
        <li className={styles['navbar__cart']}>
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className={styles['navbar__badge']}>{cartCount}</span>}
        </li>
        <li className={styles['navbar__favorites']}>
          <Link to="/favorites">
            <Heart size={24} />
            {favoritesCount > 0 && <span className={styles['navbar__badge']}>{favoritesCount}</span>}
          </Link>
        </li>

        <img className={styles['navbar__avatar']} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
      </ul>
    </nav>
  )
}

export default ANavbar