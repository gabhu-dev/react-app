import { APP_URL, APP_PAGINATION_LIMIT } from '../constants'
import { IProduct, IProductsResponse } from '../types/products'

class ProductsService {
  get(search: string, page: number = 1): Promise<IProductsResponse> {
    const skip = (page - 1) * APP_PAGINATION_LIMIT
    return fetch(`${APP_URL}/products/search?q=${search}&limit=${APP_PAGINATION_LIMIT}&skip=${skip}`)
      .then(res => res.json())
  }

  getById(id: number): Promise<IProduct> {
    return fetch(`${APP_URL}/products/${id}`)
      .then(res => res.json())
  }

  getByCategory(category: string): Promise<IProductsResponse> {
    return fetch(`${APP_URL}/products/category/${category}`)
      .then(res => res.json())
  }

  getListCategories(): Promise<string[]> {
    return fetch(`${APP_URL}/products/category-list`)
      .then(res => res.json())
  }
}

const productsService = new ProductsService()

export default productsService
