// userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProductsResponse } from '../../types/products'
import productsService from '../../services/products'

const initialState = {
  productsResponse: {} as IProductsResponse,
  categories: [] as string[],
  selectedCategory: '',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as number[]
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsResponse = action.payload
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.productsResponse = action.payload
    })
  }
})

export const { setSelectedCategory, addFavorite } = productsSlice.actions
export default productsSlice.reducer