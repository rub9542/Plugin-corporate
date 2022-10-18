const getToken = state => state?.auth?.token
const getCorporateId = state => state?.auth?.corporateId

const selectors = {
  getToken,
  getCorporateId,
}

export default selectors
