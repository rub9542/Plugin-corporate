import React from 'react'
import TableSearchFilter from 'components/UIComponents/TableSearchFilter'
import Flex from 'components/Flex'
import {
  StyledTab,
  SubmitFlex,
  MenuFlex,
} from 'modules/Roles/Partials/RolesFilter/Styles/style'
import Button from 'components/Button'
import JobTypeFilter from 'modules/Roles/Partials/RolesFilter/Partials/JobTypeFilter'
import PostedOnFilter from 'modules/Roles/Partials/RolesFilter/Partials/PostedOnFilter'
import StatusFilter from 'modules/Roles/Partials/RolesFilter/Partials/StatusFilter'

const { TabPane } = StyledTab

const RolesFilter = () => {
  const menu = (
    <MenuFlex column>
      <StyledTab border={true} tabPosition={'left'} type="card">
        <TabPane tab="Job Type" key="1">
          <JobTypeFilter />
        </TabPane>
        <TabPane tab="Posted On" key="2">
          <PostedOnFilter />
        </TabPane>
        <TabPane tab="Status" key="3">
          <StatusFilter />
        </TabPane>
      </StyledTab>
      <SubmitFlex right>
        <Button.Secondary text="Cancel" />
        <Button.Primary
          // htmlType="submit"
          // form={'student_form'}
          text="Apply Filter"
        />
      </SubmitFlex>
    </MenuFlex>
  )
  return <TableSearchFilter menu={menu} />
}

export default RolesFilter
