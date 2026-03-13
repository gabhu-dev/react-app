import { IGlobalPagination } from "./index"

export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  images: string[]
  thumbnail: string
}

export interface IProductsResponse extends IGlobalPagination {
  products: IProduct[]
}