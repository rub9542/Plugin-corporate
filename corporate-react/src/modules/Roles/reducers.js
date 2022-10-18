import {
  SET_CORPORATE_METRICS_DATA,
  SET_JOBS_LIST,
} from 'modules/Roles/actions'

const initialState = {
  corporateMetrics: {},
  jobsList: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CORPORATE_METRICS_DATA:
      return {
        ...state,
        corporateMetrics: action.data,
      }
    case SET_JOBS_LIST:
      return {
        ...state,
        jobsList: action.data,
      }
    default:
      return state
  }
}
