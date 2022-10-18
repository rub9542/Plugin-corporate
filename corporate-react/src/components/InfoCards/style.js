import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'

export const SingleCard = styled(Flex)`
  background: ${props => props.background};
  padding: ${props => (props.padding ? props.padding : 0)};
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : 'auto')};
  cursor: pointer;
`

export const CardText = styled.p`
  margin-top: 30px;
  margin-bottom: 4px;
  font-style: normal;
  font-weight: ${FONT?.FW_500};
  font-size: ${FONT?.F_XS};
  line-height: 15px;
  color: ${COLORS.GREY_T_60};
`
export const CardValue = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: ${FONT?.FW_700};
  font-size: ${FONT.F_XL};
  line-height: 28px;
  color: ${COLORS.GREY_T_20};
`
