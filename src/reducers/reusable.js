import { clinics } from './clinics'

// const REVIEW_URL = `http://localhost:8080/clinics/${id}/review`
// http://localhost:8080//clinics?search=${search}&sortField=${sortField}&sortOrder=${sortOrder}&pageSize=${pageSize}&pageNum=${pageNum} 
// FETCH FOR CLINIC
export const fetchClinics = (search, sortField, sortOrder, pageSize, pageNum) => { // How can I import all parameters that is needed for CLINIC_URL from the clinics store?
  console.log(search)
  const CLINICS_URL = `http://localhost:8080/clinics?search=${search}&sortField${sortField}` 
  return (dispatch) => {
    fetch(CLINICS_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(clinics.actions.generateClinics(data))
      })
  }
}

// // FETCH FOR REVIEWS
// export const generateReviews = () => {
//   return () => {
//     fetch(REVIEW_URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         review: 'Test',
//         rating: 4,
//         name: 'Linda',
//         clinic_id: '6011508164c67f53627be5c6'
//       })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//       })
//   }
// }