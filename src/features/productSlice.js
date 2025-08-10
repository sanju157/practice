import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    products: [],
    filteredData: [],
    loading: false,
    searchText: '',
    filters: {}
 }

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    search(state, action) {
      console.log("seach called::::", action.payload)
      const searchText = action.payload;
      state.searchText = searchText
    }
  },
})

export const { search } = productSlice.actions;
export default productSlice.reducer