import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
// import { FONT } from 'theme/font'

export const MainWrapper = styled(Flex)`
  width: 100%;
  gap: 10px;
`
export const Container = styled(Flex)`
  padding: 20px 25px;
  gap: 8%;
  margin-top: 100px;
  padding-bottom: 100px;
`
export const LeftDiv = styled.div`
  width: 20%;
`
export const RightDiv = styled.div`
  width: 50%;
`
export const FormHeading = styled.h2`
  font-style: normal;
  font-weight: ${FONT.FW_700};
  font-size: ${FONT.F_LG};
  line-height: 24px;
  color: ${COLORS.GREY_T_30};
  margin-bottom: 20px;
`

export const StickyDiv = styled.div`
  position: sticky;
  top: 120px;
`
