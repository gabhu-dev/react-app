import { IGlobalPagination } from "./index"

export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  images: string[]
  thumbnail: string
  price: number
  discountPercentage: number
}

export interface IProductsResponse extends IGlobalPagination {
  products: IProduct[]
}