import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getProducts, getCategories, getProductsByCategory, setSelectedCategory } from '../../store/slices/products'
import ASelect, { ASelectOption } from '../shared/ASelect'
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

  const selectOptions: ASelectOption[] = [
    { value: '', label: 'All Categories' },
    ...categories.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')
    }))
  ]

  return (
    <div className={styles.filters}>
      <h3 className={styles.filters__title}>{title}</h3>
      
      <div className={styles.filters__group}>
        <div className={styles.filters__select_wrapper}>
          <ASelect
            label="Categoría:"
            options={selectOptions}
            value={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="Select category..."
          />
        </div>
      </div>
    </div>
  )
}

export default AFilters