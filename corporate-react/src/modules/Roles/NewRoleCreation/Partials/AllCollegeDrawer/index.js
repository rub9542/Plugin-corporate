import React from 'react'
import Drawer from 'components/Drawer'
import styled from 'styled-components'

import Flex from 'components/Flex'

import {
  SearchField,
  CollagesFlex,
  CollagesInfoDiv,
  CollagesSpan,
  CollageNameFlex,
  CollegeNameDiv,
  CollegeCity,
  SelectClgDiv,
  ClgAvatar,
  CloseButton,
  AddButton,
  CollageDetailsFlex,
} from 'modules/Roles/NewRoleCreation/Partials/AllCollegeDrawer/Style/style'
const FlexWrap = styled(Flex)`
  gap: 15px;
`

const AllCollegeDrawer = ({
  setAllCollegeDrawer,
  allCollegeDrawer,
  setCollegeDrawer,
}) => {
  const content = () => {
    return (
      <>
        <div>
          <SearchField iconPosition={'suffix'} />
        </div>
        <CollagesFlex>
          <CollagesInfoDiv>Collages info</CollagesInfoDiv>
          <CollagesSpan>50</CollagesSpan>
        </CollagesFlex>
        <CollageDetailsFlex spaceBetween>
          <Flex>
            <ClgAvatar size="36" IconName="R" />

            <CollageNameFlex>
              <CollegeNameDiv>Ramaiah Institute of Technology</CollegeNameDiv>
              <CollegeCity>Bengaluru</CollegeCity>
            </CollageNameFlex>
          </Flex>
          <SelectClgDiv>select</SelectClgDiv>
        </CollageDetailsFlex>
        <CollageDetailsFlex spaceBetween>
          <Flex>
            <ClgAvatar size="36" IconName="V" />

            <CollageNameFlex>
              <CollegeNameDiv>
                Visveswaraya Technology Univercity
              </CollegeNameDiv>
              <CollegeCity>Bengaluru</CollegeCity>
            </CollageNameFlex>
          </Flex>
          <SelectClgDiv>select</SelectClgDiv>
        </CollageDetailsFlex>
      </>
    )
  }
  const footer = () => {
    return (
      <>
        <FlexWrap right>
          <CloseButton
            text="Close"
            onClick={() => setAllCollegeDrawer(false)}
          />
          <AddButton
            onClick={() => {
              setAllCollegeDrawer(false)
              setCollegeDrawer(true)
            }}
            text={'Add'}
          />
        </FlexWrap>
      </>
    )
  }
  return (
    <Drawer
      width="40%"
      title={'Select Colleges'}
      placement="right"
      closable={true}
      onClose={() => {
        setCollegeDrawer(true)
      }}
      visible={allCollegeDrawer}
      content={content()}
      footer={footer()}
    />
  )
}

export default AllCollegeDrawer
