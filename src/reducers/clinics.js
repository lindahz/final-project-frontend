import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sortField: '',
  sortOrder: '',
  searchHistory: [],
  clinics: [],
  filter: [
    { name: 'emergency', checked: false },
    { name: 'clinicType', checked: false },
    { name: 'openHours', checked: false },
    { name: 'other', checked: false }
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
    generateSortField: (state, action) => {
      state.sortField = action.payload
    },
    toggleFilter: (state, action) => {
      const foundItem = state.filter.find(prop => prop.name === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    }
  }
})