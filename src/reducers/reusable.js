import { clinics } from './clinics'

export const fetchClinics = (
  search,
  sortOrder,
  pageNum,
  clinicType,
  openHours,
  dropin,
  avgRating
) => {
  const CLINICS_URL = `https://health-finder.herokuapp.com/clinics?search=${search}&sortField=clinic_name&sortOrder=${sortOrder}&pageSize=6&pageNum=${pageNum}&clinicType=${clinicType}&openHours=${openHours}&dropin=${dropin}&avgRating=${avgRating}`
  return (dispatch) => {
    dispatch(clinics.actions.setLoading(true))
    fetch(CLINICS_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(clinics.actions.generateClinics(data))
        dispatch(clinics.actions.setLoading(false))
      })
  }
}