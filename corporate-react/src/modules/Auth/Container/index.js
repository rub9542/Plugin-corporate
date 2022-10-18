import { connect } from 'react-redux'
import { SignIn } from 'modules/Auth/actions'

import UserSignin from 'modules/Auth/Components/UserSignin'
import selector from 'modules/Auth/selectors'

const mapStateToProps = state => ({
  token: selector.getToken(state),
  corporateId: selector.getCorporateId(state),
})

const mapDispatchToProps = {
  SignIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignin)
