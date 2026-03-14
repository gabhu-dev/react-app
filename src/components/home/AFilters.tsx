import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getProducts, getCategories, getProductsByCategory, setSelectedCategory } from '../../store/slices/products'
import styles from './AFilters.module.css'

function AFilters() {
  const dispatch = useAppDispatch()
  const { categories, selectedCategory } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    if (!selectedCategory) {
      dispatch(getProducts({ search: '', page: 1 }))
    }
  }, [dispatch, selectedCategory])

  const handleCategoryChange = (category: string) => {
    dispatch(setSelectedCategory(category))
    if (category) {
      dispatch(getProductsByCategory(category))
    } else {
      dispatch(getProducts({ search: '', page: 1 }))
    }
  }

  const title = selectedCategory 
    ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ') + ' Products'
    : 'All Products'

  return (
    <div className={styles.filters}>
      <h3 className={styles.filters__title}>{title}</h3>
      
      <div className={styles.filters__group}>
        <div className={styles.filters__select_wrapper}>
          <span className={styles.filters__label}>Categoría:</span>
          <select 
            className={styles.filters__select}
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default AFilters