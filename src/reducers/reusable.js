import { clinics } from './clinics'

export const fetchClinics = (search, sortOrder, pageNum) => {
  const CLINICS_URL = `http://localhost:8080/clinics?search=${search}&sortField=clinic_name&sortOrder=${sortOrder}&pageSize=6&pageNum=${pageNum}`
  return (dispatch) => {
    fetch(CLINICS_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(clinics.actions.generateClinics(data))
      })
  }
}