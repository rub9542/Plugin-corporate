import React from 'react'
import Drawer from 'components/Drawer'
import Button from 'components/Button'
import { COLORS } from 'theme'
import AntdAvatar from 'components/Avatar'
import ContentLeft from 'modules/Roles/NewRoleCreation/Partials/PreviewRoleDrawer/Partials/ContentLeft'
import ContentRight from 'modules/Roles/NewRoleCreation/Partials/PreviewRoleDrawer/Partials/ContentRight'

import {
  FlexWrap,
  SubtitleLarge,
  GrayText,
  LeftSection,
  RightSection,
} from 'modules/Roles/NewRoleCreation/Partials/PreviewRoleDrawer/Style/style'

const PreviewRoleDrawer = ({
  previewDrawer,
  setPreviewDrawer,
  setCollegeDrawer,
}) => {
  const content = () => {
    return (
      <>
        <FlexWrap
          gap="20px"
          padding="20px 30px"
          bgColor={COLORS.PRIMARY_GREY_T_98}
          centerVertically
        >
          <AntdAvatar size={64} IconName="IT" font={18} />
          <FlexWrap column>
            <SubtitleLarge>Infosys Technologies</SubtitleLarge>
            <GrayText>Information technology</GrayText>
          </FlexWrap>
        </FlexWrap>

        <FlexWrap gap="40px" padding="40px 30px">
          <LeftSection column>
            <ContentLeft />
          </LeftSection>
          <RightSection column>
            <ContentRight />
          </RightSection>
        </FlexWrap>
      </>
    )
  }
  const footer = () => {
    return (
      <>
        <FlexWrap gap="20px" right>
          <Button.Secondary
            text="Back to edit"
            onClick={() => {
              setPreviewDrawer(false)
            }}
          />
          <Button.Primary
            onClick={() => {
              setPreviewDrawer(false)
              setCollegeDrawer(true)
            }}
            text={'Publish'}
          />
        </FlexWrap>
      </>
    )
  }
  return (
    <Drawer
      width="75%"
      title={'Preview'}
      placement="right"
      closable={true}
      onClose={() => setPreviewDrawer(false)}
      visible={previewDrawer}
      padding="0 0 20px 0"
      content={content()}
      footer={footer()}
    />
  )
}

export default PreviewRoleDrawer
