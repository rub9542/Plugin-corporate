const getCorporateMetrics = state => state?.corporate?.corporateMetrics
const getJobsList = state => state?.corporate?.jobsList

const selectors = {
  getCorporateMetrics,
  getJobsList,
}

export default selectors
