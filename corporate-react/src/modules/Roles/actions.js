import corporateRequest from 'utils/corporateRequest'
import authSelector from 'modules/Auth/selectors'

export const SET_CORPORATE_METRICS_DATA = 'corporate/SET_CORPORATE_METRICS_DATA'
export const SET_JOBS_LIST = 'corporate/SET_JOBS_LIST'

export const setCorporateMetricsData = data => {
  return {
    type: SET_CORPORATE_METRICS_DATA,
    data,
  }
}

export const setJobsList = data => {
  return {
    type: SET_JOBS_LIST,
    data,
  }
}

export const getJobsList = () => async (dispatch, getState) => {
  const state = getState()
  const corporate_id = authSelector.getCorporateId(state)
  try {
    const res = await corporateRequest.get(
      `/corporates/${corporate_id}/jobs/lists`
    )
    dispatch(setJobsList(res?.data?.data || {}))
    dispatch(getCorporateMetricsData())
  } catch (error) {
    console.log('Error in Getting Jobs list', error)
  }
}
export const getCorporateMetricsData = () => async (dispatch, getState) => {
  const state = getState()
  const corporate_id = authSelector.getCorporateId(state)
  try {
    const res = await corporateRequest.get(
      `/corporates/${corporate_id}/jobs/metrics`
    )
    dispatch(setCorporateMetricsData(res?.data?.data || {}))
  } catch (error) {
    console.log('Error in Metrics of Corporate', error)
  }
}
