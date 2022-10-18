/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Drawer from 'components/Drawer'
import Flex from 'components/Flex'
import styled from 'styled-components'
import {
  PublishContentFlex,
  RadioGroups,
  Radios,
  CollagesFlex,
  CollagesInfoDiv,
  CollagesSpan,
  NoCollageFlex,
  AddButton,
  NoCollageSpan,
  ConfirmButton,
  CloseButton,
  CollageNameFlex,
  CollegeNameDiv,
  CollegeCity,
  SelectClgDiv,
  CollageDetailsFlex,
  ClgAvatar,
} from 'modules/Roles/NewRoleCreation/Partials/SelectCollegesDrawer/Style/style'
import NoCollageIcon from 'components/icons/NoCollageIcon'
import DeleteIcon from 'components/icons/DeleteIcon'
const FlexWrap = styled(Flex)`
  gap: 15px;
`
const SelectCollegesDrawer = ({
  collegeDrawer,
  setCollegeDrawer,
  setPreviewDrawer,
  setAllCollegeDrawer,
}) => {
  const [collages, setCollages] = useState('')
  const footer = () => {
    return (
      <>
        <FlexWrap right>
          <CloseButton
            text="Close"
            onClick={() => {
              setCollegeDrawer(false)
            }}
          />
          <ConfirmButton onClick={() => {}} text={'Confirm'} />
        </FlexWrap>
      </>
    )
  }
  const content = () => {
    const onCollageChange = e => {
      console.log('radio checked', e.target.value)
      setCollages(e.target.value)
    }

    const RadioOptions = [
      {
        id: 1,
        label: 'All Collages',
        value: 'All Collages',
      },
      {
        id: 2,
        label: 'Select Collages ',
        value: 'Select Collages ',
      },
    ]

    return (
      <>
        <PublishContentFlex>
          <RadioGroups onChange={onCollageChange} value={collages}>
            {RadioOptions?.map((item, index) => (
              <Radios
                key={index}
                border={true}
                label={item?.label}
                value={item?.value}
              />
            ))}
          </RadioGroups>
        </PublishContentFlex>
        {collages && (
          <div>
            <CollagesFlex>
              <CollagesInfoDiv>Collages info</CollagesInfoDiv>
              <CollagesSpan>00</CollagesSpan>
            </CollagesFlex>
            <NoCollageFlex>
              <Flex center>
                <NoCollageIcon />
              </Flex>
              <Flex center>
                <NoCollageSpan>No Collage Selected</NoCollageSpan>
              </Flex>
              <Flex center>
                <AddButton
                  text={'Add'}
                  onClick={() => {
                    setCollegeDrawer(false)
                    setAllCollegeDrawer(true)
                  }}
                />
              </Flex>
            </NoCollageFlex>
          </div>
        )}
        {/* <div>
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
            <SelectClgDiv>
              <DeleteIcon />
            </SelectClgDiv>
          </CollageDetailsFlex>
        </div> */}
      </>
    )
  }

  return (
    <>
      <Drawer
        width="40%"
        title={'Publish To'}
        placement="right"
        closable={true}
        onClose={() => {
          setCollegeDrawer(false)
          setPreviewDrawer(true)
        }}
        visible={collegeDrawer}
        content={content()}
        footer={collages && footer()}
      />
    </>
  )
}

export default SelectCollegesDrawer
