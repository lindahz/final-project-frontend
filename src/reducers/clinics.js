import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sortOrder: 'asc',
  pageNum: 1,
  clinics: [],
  filter: [
    { id: 'emg', checked: false },
    { id: 'reg', checked: false },
    { id: 'all', checked: false },
    { id: 'week', checked: false },
    { id: 'wkn', checked: false },
    { id: 'dropin', checked: false }
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
    generatePageNum: (state, action) => {
      state.pageNum = action.payload
    },
    toggleFilter: (state, action) => {
      const foundItem = state.filter.find((item) => item.id === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    }
  }
})