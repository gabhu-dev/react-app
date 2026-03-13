// userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProductsResponse } from '../../types/products'
import productsService from '../../services/products'

const initialState = {
  productsResponse: {} as IProductsResponse,
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ search, page }: { search: string, page: number }) => {
    const response = await productsService.get(search, page)
    return response
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsResponse = action.payload
    })
  }
})

export default productsSlice.reducer