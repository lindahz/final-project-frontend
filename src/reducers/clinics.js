import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sortOrder: 'asc',
  clinics: [],
  filter: {
    errand: [
      {
        id: 'emergency',
        value: 'emergency',
        label: 'Akut/livshotande',
        checked: false
      },
      {
        id: 'visit',
        value: 'visit',
        label: 'Vårdbesök',
        checked: false
      }
    ],
    type: [
      {
        id: 'hospital',
        value: 'hospital',
        label: 'Akutmottagning',
        checked: false
      },
      {
        id: 'emergency-clinic',
        value: 'emergency-clinic',
        label: 'Närakut',
        checked: false
      },
      {
        id: 'clinic',
        value: 'clinic',
        label: 'Vårdcentral',
        checked: false
      }
    ],
    open: [
      {
        id: 'all-hours',
        value: 'all-hours',
        label: 'Dygnet runt',
        checked: false
      },
      {
        id: 'weekdays',
        value: 'weekdays',
        label: 'Vardagar',
        checked: false
      },
      {
        id: 'weekends',
        value: 'weekends',
        label: 'Helger',
        checked: false
      }
    ],
    other: [
      {
        id: 'dropin',
        value: 'dropin',
        label: 'Drop-in',
        checked: false
      }
    ]
  }
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

      // include some kind of filtern function related to checked prop.
    },
    generateSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
    toggleErrand: (state, action) => {
      const foundItem = state.filter.errand.find((item) => item.value === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    },
    toggleType: (state, action) => {
      const foundItem = state.filter.type.find((item) => item.value === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    },
    toggleOpen: (state, action) => {
      const foundItem = state.filter.open.find((item) => item.value === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    },
    toggleOther: (state, action) => {
      const foundItem = state.filter.other.find((item) => item.value === action.payload)
      if (foundItem) {
        foundItem.checked = !foundItem.checked
      }
    }
  }
})