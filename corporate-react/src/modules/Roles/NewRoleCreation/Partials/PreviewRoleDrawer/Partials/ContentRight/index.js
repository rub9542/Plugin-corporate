import React from 'react'
import { FONT } from 'theme/font'
import { Divider } from 'antd'
import CalendarYellow from 'components/icons/CalendarYellow'
import Location from 'components/icons/Location'
import ConstructionIcon from 'components/icons/ConstructionIcon'
import CustomTag from 'components/CustomTag'
import {
  FlexWrap,
  GrayText,
  SubtitleSmall,
  YellowBox,
  SubtitleMedium,
  InfoText,
  GrayTextSmall,
} from 'modules/Roles/NewRoleCreation/Partials/PreviewRoleDrawer/Style/style'

const ContentRight = () => {
  const tagsList = [
    'React JS',
    'Java',
    'JavaScript',
    'HMTL',
    'Node Js',
    'Machine Learning',
    'Python',
    'Customer Experience',
    'Artificial Integlience',
  ]

  return (
    <>
      <YellowBox>
        <CalendarYellow />
        <FlexWrap column>
          <GrayText fontweight={FONT.FW_400}>Last date to apply</GrayText>
          <SubtitleSmall fontweight={FONT.FW_600}>30th Sep</SubtitleSmall>
        </FlexWrap>
      </YellowBox>

      <Divider />
      <div>
        <FlexWrap gap="10px" centerVertically>
          <Location />
          <SubtitleMedium>Job Location</SubtitleMedium>
        </FlexWrap>
        <InfoText marginleft="10px">
          <li>Bangalore</li>
        </InfoText>
        <InfoText marginleft="10px">
          <li>Chennai</li>
        </InfoText>
      </div>
      <SubtitleSmall fontsize={FONT.F_BASE}>
        We are also remote friendly
      </SubtitleSmall>
      <FlexWrap gap="10px">
        <GrayText>Remote Location :</GrayText>
        <SubtitleSmall>Anywhere</SubtitleSmall>
      </FlexWrap>

      <Divider />

      <FlexWrap gap="10px" centerVertically>
        <ConstructionIcon />
        <SubtitleMedium>Eligibility Criteria</SubtitleMedium>
      </FlexWrap>

      <div>
        <GrayTextSmall>Degree & Departments</GrayTextSmall>
        <SubtitleSmall>B.E, B.Tech</SubtitleSmall>
      </div>

      <div>
        <GrayTextSmall>Year of passing</GrayTextSmall>
        <SubtitleSmall>2023</SubtitleSmall>
      </div>

      <div>
        <GrayTextSmall>Arrears</GrayTextSmall>
        <SubtitleSmall>No arrears allowed</SubtitleSmall>
      </div>

      <div>
        <GrayTextSmall>Score</GrayTextSmall>
        <SubtitleSmall>
          Average mark should be above 60% in all your exams
        </SubtitleSmall>
        <SubtitleSmall>10th - Above 60%</SubtitleSmall>
        <SubtitleSmall>12th or Equivalent - Above 60%</SubtitleSmall>
        <SubtitleSmall>UG - Above 60%</SubtitleSmall>
      </div>

      <div>
        <GrayTextSmall>Skills</GrayTextSmall>
        <FlexWrap wrap gap="10px">
          {tagsList.map((tag, index) => (
            <CustomTag key={index} message={tag} />
          ))}
        </FlexWrap>
      </div>
    </>
  )
}

export default ContentRight
