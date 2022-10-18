import React from 'react'
import AntdSteps from 'components/AntdSteps'
import {
  Container,
  LeftDiv,
  RightDiv,
  StickyDiv,
} from 'modules/Roles/NewRoleCreation/Partials/Style/style'
import { Form, StyledDivider } from 'components/UIComponents/FormStyles'
import JobDetails from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/JobDetails'
import CtcJoblocation from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/CtcJoblocation'
import EligibilityCriteria from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/EligibilityCriteria'
import EvaluationProcess from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/EvaluationProcess'

const RolesForm = () => {
  const [roleForm] = Form.useForm()
  const stepsData = [
    {
      key: 1,
      activeKey: 0,
      title: 'Job Details',
    },
    {
      key: 2,
      activeKey: 1,
      title: 'CTC  & Job location',
    },
    {
      key: 3,
      activeKey: 2,
      title: 'Eligibility Criteria',
    },
    {
      key: 4,
      activeKey: 3,
      title: 'Interview Workflow',
    },
  ]

  return (
    <>
      <Container>
        <LeftDiv>
          <StickyDiv>
            <AntdSteps steps={stepsData} current={'2'} />
          </StickyDiv>
        </LeftDiv>
        <RightDiv>
          <Form.Provider>
            <Form
              scrollToFirstError
              // onFinish={onSubmitFormData}
              id={'rolesForm'}
              form={roleForm}
              layout="vertical"
            >
              <JobDetails />
              <StyledDivider />
              <CtcJoblocation />
              <StyledDivider />
              <EligibilityCriteria />
              <StyledDivider />
              <EvaluationProcess form={roleForm} />
            </Form>
          </Form.Provider>
        </RightDiv>
      </Container>
    </>
  )
}

export default RolesForm
