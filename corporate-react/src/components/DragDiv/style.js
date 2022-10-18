import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'

export const FlexWrap = styled(Flex)`
  background: ${COLORS.BLUE_T_95};
  border: 1px solid ${COLORS.BLUE_T_80};
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  margin-bottom: 20px;
`
export const ActionWrap = styled(Flex)`
  gap: 5px;
  visibility: visible !important;
`
export const MainFlex = styled(Flex)`
  /* gap: 20px; */
  position: relative;
`
export const ContentFlex = styled(Flex)`
  gap: ${props => (props.gap ? props.gap : '8px')};
`

export const Heading = styled.h1`
  font-style: normal;
  font-weight: ${FONT.FW_700};
  font-size: ${FONT.F_BASE};
  line-height: 21px;
  color: ${COLORS.GREY_P_100};
  margin-bottom: 0;
`

export const Description = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: ${FONT.FW_500};
  font-size: ${FONT.F_SM};
  line-height: 18px;
  color: ${COLORS.GREY_T_40};
`
export const ButtonDiv = styled(Flex)`
  cursor: pointer;
`
