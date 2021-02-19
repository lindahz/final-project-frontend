import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sortOrder: 'asc',
  pageNum: 1,
  clinics: [],
  filter: {
    clinicType: '',
    openHours: '',
    dropin: '',
    avgRating: 0
  },
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
      state.filter.clinicType = action.payload
    },
    openHoursFilter: (state, action) => {
      state.filter.openHours = action.payload
    },
    dropinFilter: (state, action) => {
      state.filter.dropin = action.payload
    },
    avgRatingFilter: (state, action) => {
      state.filter.avgRating = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})