import { APP_URL, APP_PAGINATION_LIMIT } from '../constants'

class ProductsService {
  get(search: string, page: number = 1) {
    const skip = (page - 1) * APP_PAGINATION_LIMIT
    return fetch(`${APP_URL}/products/search?q=${search}&limit=${APP_PAGINATION_LIMIT}&skip=${skip}`)
      .then(res => res.json())
  }

  getById(id: number) {
    return fetch(`${APP_URL}/products/${id}`)
      .then(res => res.json())
  }

  getByCategory(category: string) {
    return fetch(`${APP_URL}/products/category/${category}`)
      .then(res => res.json())
  }
}

const productsService = new ProductsService()

export default productsService
