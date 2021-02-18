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
  ],
  clinicType: '',
  openHours: '',
  dropin: '',
  isLoading: false
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
    clinicTypeFilter: (state, action) => {
      state.clinicType = action.payload
    },
    openHoursFilter: (state, action) => {
      state.openHours = action.payload
    },
    dropinFilter: (state, action) => {
      state.dropin = action.payload
    },
    toggleFilter: (state, action) => {
      const foundItem = state.filter.find((item) => item.id === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})