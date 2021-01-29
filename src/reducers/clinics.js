import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sortField: '',
  sortOrder: '',
  searchHistory: [],
  clinics: []
}

export const clinics = createSlice({
  name: 'clinics',
  initialState,
  reducers: {
    generateSearch: (state, action) => {
      state.search = action.payload
    },
    generateClinics: (state, action) => {
      state.clinics = action.payload
    },
    generateSortField: (state, action) => {
      state.sortField = action.payload
    }
  }
})