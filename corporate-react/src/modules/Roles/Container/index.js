import { connect } from 'react-redux'
import Roles from 'modules/Roles/index'

import rolesSelectors from 'modules/Roles/selectors'

import { getCorporateMetricsData, getJobsList } from 'modules/Roles/actions'

const mapStateToProps = state => ({
  corporateMetrics: rolesSelectors.getCorporateMetrics(state),
  jobsList: rolesSelectors.getJobsList(state),
})

const mapDispatchToProps = {
  getCorporateMetricsData,
  getJobsList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Roles)
