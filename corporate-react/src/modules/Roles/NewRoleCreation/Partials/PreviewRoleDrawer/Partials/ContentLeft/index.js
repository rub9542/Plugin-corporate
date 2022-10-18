import React from 'react'
import AlarmIcon from 'components/icons/AlarmIcon'
import PaymentIcon from 'components/icons/PaymentIcon'
import { COLORS } from 'theme'
import {
  FlexWrap,
  SubtitleLarge,
  TitleMedium,
  SubtitleSmall,
  GrayTextSmall,
  InfoText,
} from 'modules/Roles/NewRoleCreation/Partials/PreviewRoleDrawer/Style/style'
import { EditorContent } from 'components/TextEditor/ContentStyles'

const ContentLeft = () => {
  const Editordata =
    '<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; line-height: 26.32px; color: rgb(36, 46, 57); font-family: &quot;Plus Jakarta Sans&quot;, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><strong style="box-sizing: border-box; font-weight: bolder; line-height: 26.32px; color: rgb(77, 86, 110);">Edior Heading :&nbsp;</strong></p><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; line-height: 26.32px; color: rgb(36, 46, 57); font-family: &quot;Plus Jakarta Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><li style="font-size: 14px; box-sizing: border-box; line-height: 25px;"><span style="box-sizing: border-box; line-height: 26.32px; color: rgb(163, 173, 184);">Point 1</span></li><li style="font-size: 14px; box-sizing: border-box; line-height: 25px;"><span style="box-sizing: border-box; line-height: 26.32px; color: rgb(163, 173, 184);">Point 2</span></li><li style="box-sizing: border-box; line-height: 25px;"><span style="color: rgb(163, 173, 184);">Point 3</span></li></ul><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; line-height: 26.32px; color: rgb(36, 46, 57); font-family: &quot;Plus Jakarta Sans&quot;, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><strong style="box-sizing: border-box; font-weight: bolder; line-height: 26.32px; color: rgb(77, 86, 110);">Editor heading 2:</strong></p><ol style="box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; line-height: 26.32px; color: rgb(36, 46, 57); font-family: &quot;Plus Jakarta Sans&quot;, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><li style="box-sizing: border-box; line-height: 25px;"><span style="box-sizing: border-box; line-height: 26.32px; color: rgb(163, 173, 184);">Point 1</span></li><li style="box-sizing: border-box; line-height: 25px;"><span style="box-sizing: border-box; line-height: 26.32px; color: rgb(163, 173, 184);">point 2</span></li><li style="box-sizing: border-box; line-height: 25px;"><span style="box-sizing: border-box; line-height: 26.32px; color: rgb(163, 173, 184);">&nbsp;point 3</span></li></ol> '

  return (
    <>
      <TitleMedium>Software Engineer</TitleMedium>

      <FlexWrap gap="15px" centerVertically>
        <FlexWrap gap="5px" centerVertically>
          <AlarmIcon />
          <SubtitleSmall marginbottom="0">Entrylevel (Full Time)</SubtitleSmall>
        </FlexWrap>

        <SubtitleSmall marginbottom="0">|</SubtitleSmall>

        <FlexWrap gap="5px" centerVertically>
          <PaymentIcon />
          <SubtitleSmall marginbottom="0" color={COLORS.GREY_T_60}>
            <span>₹ 3,00,000 - ₹ 6,00,000</span> /yr
          </SubtitleSmall>
        </FlexWrap>
      </FlexWrap>

      <EditorContent
        dangerouslySetInnerHTML={{
          __html: Editordata || '',
        }}
      />

      <SubtitleLarge color={COLORS.GREY_T_30}>Interview Rounds</SubtitleLarge>

      <div>
        <GrayTextSmall marginbottom="10px" color={COLORS.GREY_T_30}>
          Round 1 - Aptitude Test
        </GrayTextSmall>
        <InfoText>
          - This test will have 80 questions.There is no negative marking.
        </InfoText>
        <InfoText>- 20 General Knowlwdge questions.</InfoText>
        <InfoText>- 20 Logical Reasoning</InfoText>
      </div>
    </>
  )
}

export default ContentLeft
