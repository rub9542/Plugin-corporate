import axios from 'axios'
const { CORPORATE_API_URL } = process.env

const corporateRequest = axios.create({
  baseURL: CORPORATE_API_URL || 'https://example.com/', // API server url
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default corporateRequest
