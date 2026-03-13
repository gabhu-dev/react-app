import AInputSearch from './AInputSearch'
import { useState, useEffect } from 'react'
import { useAppDispatch } from '../store/hooks'
import { getProducts } from '../store/slices/products'

function AFilters() {
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts({ search, page: 1 }))
  }, [dispatch, search])

  return (
    <div>
      Buscar
      <AInputSearch value={search} onChange={setSearch} />
    </div>
  )
}

export default AFilters