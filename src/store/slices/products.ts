// userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct, IProductsResponse } from '../../types/products'
import productsService from '../../services/products'

const initialState = {
  productsResponse: {} as IProductsResponse,
  categories: [] as string[],
  selectedCategory: '',
  search: '',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as number[],
  cart: JSON.parse(localStorage.getItem('cart') || '[]') as { product: IProduct, quantity: number }[]
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ search, page }: { search: string, page: number }) => {
    const response = await productsService.get(search, page)
    return response
  }
)

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    const response = await productsService.getListCategories()
    return response
  }
)

export const getProductsByCategory = createAsyncThunk(
  'products/getProductsByCategory',
  async (category: string) => {
    const response = await productsService.getByCategory(category)
    return response
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
    addFavorite: (state, action: { payload: number }) => {
      const id = action.payload
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id)
      } else {
        state.favorites.push(id)
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    addToCart: (state, action: { payload: IProduct }) => {
      const product = action.payload
      const item = state.cart.find(item => item.product.id === product.id)
      if (item) {
        item.quantity += 1
      } else {
        state.cart.push({ product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const { products, ...pagination } = action.payload
      if (action.meta.arg.page === 1) {
        state.productsResponse = action.payload
      } else {
        state.productsResponse = {
          ...pagination,
          products: [...state.productsResponse.products, ...products]
        }
      }
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.productsResponse = action.payload
    })
  }
})

export const { setSelectedCategory, addFavorite, setSearch, addToCart } = productsSlice.actions
export default productsSlice.reducer