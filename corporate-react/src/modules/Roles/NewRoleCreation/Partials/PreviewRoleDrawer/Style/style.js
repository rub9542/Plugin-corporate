import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'

export const FlexWrap = styled(Flex)`
  position: relative;
  gap: ${props => (props.gap ? props.gap : '0px')};
  padding: ${props => (props.padding ? props.padding : '0px')};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
`

export const SubtitleLarge = styled.h2`
  font-style: normal;
  font-weight: ${FONT.FW_700};
  font-size: ${FONT.F_LG};
  line-height: 24px;
  color: ${props => (props.color ? props.color : COLORS.GREY_T_20)};
  margin-bottom: 5px;
`
export const SubtitleMedium = styled.h2`
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_BASE};
  line-height: 21px;
  color: ${COLORS.GREY_T_10};
  margin-bottom: 0;
`
export const SubtitleSmall = styled.p`
  font-style: normal;
  font-weight: ${props => (props.fontweight ? props.fontweight : FONT.FW_400)};
  font-size: ${props => (props.fontsize ? props.fontsize : FONT.F_SM)};
  line-height: 20px;
  color: ${props => (props.color ? props.color : COLORS.GREY_T_30)};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '5px')};
  span {
    font-style: normal;
    font-weight: ${FONT.FW_600};
    line-height: 18px;
    color: ${COLORS.GREY_T_10};
    margin-right: 5px;
  }
`
export const GrayText = styled.p`
  font-style: normal;
  font-weight: ${FONT.FW_500};
  font-size: ${FONT.F_SM};
  line-height: 18px;
  color: ${COLORS.GREY_T_60};
  margin-bottom: 0;
`
export const LeftSection = styled(Flex)`
  width: 60%;
  gap: 10px;
`
export const RightSection = styled(Flex)`
  width: 40%;
  gap: 10px;
`
export const TitleMedium = styled.h2`
  font-style: normal;
  font-weight: ${props => (props.fontweight ? props.fontweight : FONT.FW_700)};
  font-size: ${FONT.F_2XL};
  line-height: 30px;
  color: ${COLORS.GREY_T_30};
  margin-bottom: 0;
`
export const GrayTextSmall = styled.p`
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_SM};
  line-height: 30px;
  color: ${props => (props.color ? props.color : COLORS.GREY_T_20)};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '0px')};
`
export const InfoText = styled.p`
  font-style: normal;
  font-weight: ${FONT.FW_400};
  font-size: ${FONT.F_BASE};
  line-height: 30px;
  color: ${COLORS.GREY_T_50_2};
  margin-bottom: 0;
  margin-left: ${props => (props.marginleft ? props.marginleft : '0px')};
`
export const YellowBox = styled(Flex)`
  padding: 10px;
  background: ${COLORS.ORANGE_T_92};
  border: 1px solid ${COLORS.ORANGE_T_60};
  border-radius: 10px;
  gap: 15px;
`
