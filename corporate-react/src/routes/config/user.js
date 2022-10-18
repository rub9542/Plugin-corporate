import PageNotFound from 'routes/Components/PageNotFound'
import UserSignin from 'modules/Auth/Container/index'
import Students from 'modules/Students/Container/index'
import Roles from 'modules/Roles/Container/index'
import NewRoleCreation from 'modules/Roles/NewRoleCreation'

export const anonymous = [
  {
    routePath: '/signin',
    Component: UserSignin,
  },
]

export const authenticated = [
  {
    routePath: '/students',
    Component: Students,
  },
  {
    routePath: '/roles',
    Component: Roles,
  },
  {
    routePath: '/roles/new-role',
    Component: NewRoleCreation,
  },
  {
    routePath: '*',
    Component: PageNotFound,
  },
]
