import { APP_URL } from '../constants'

class ProductsService {
  getProducts() {
    return fetch(`${APP_URL}/products`)
      .then(res => res.json())
  }
 }

const productsService = new ProductsService()

export default productsService
