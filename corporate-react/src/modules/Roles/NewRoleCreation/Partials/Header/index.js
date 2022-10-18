import React from 'react'

import { Link } from 'react-router-dom'

import LeftArrow from 'components/icons/LeftArrow'

import {
  Container,
  LeftSection,
  RightSection,
  SectionName,
} from 'modules/Roles/NewRoleCreation/Partials/Header/style'

import { TopHeading } from 'modules/Roles/Style/style'
import RoutePath from 'components/RoutePath'
import Button from 'components/Button'

const Header = ({ setPreviewDrawer }) => {
  return (
    <div style={{ height: '100px' }}>
      <Container spaceBetween>
        <LeftSection centerVertically>
          <Link to="/user/roles">
            <LeftArrow />
          </Link>
          <SectionName column>
            <RoutePath from="Role" on="New Role" path="/user/roles" />
            <TopHeading>Add New Role</TopHeading>
          </SectionName>
        </LeftSection>
        <RightSection>
          <Button.Secondary text="Save as draft" />
          <Button.Primary
            htmlType="submit"
            form="rolesForm"
            onClick={() => {
              setPreviewDrawer(true)
            }}
            text="Preview & Publish"
          />
        </RightSection>
      </Container>
    </div>
  )
}

export default Header
