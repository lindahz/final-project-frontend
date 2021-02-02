import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sortOrder: 'asc',
  searchHistory: [],
  clinics: [],
  filter: [
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false }
  ]
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
    generateSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
    toggleFilter: (state, action) => {
      const foundItem = state.filter.find(prop => prop.name === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    }
  }
})