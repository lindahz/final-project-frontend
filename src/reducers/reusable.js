import { clinics } from './clinics'

export const fetchClinics = (
  search,
  sortOrder,
  pageNum,
  clinicType,
  openHours,
  dropin
) => {
  const CLINICS_URL = `https://health-finder.herokuapp.com/test?search=${search}&sortField=clinic_name&sortOrder=${sortOrder}&pageSize=6&pageNum=${pageNum}&clinicType=${clinicType}&openHours=${openHours}&dropin=${dropin}`
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