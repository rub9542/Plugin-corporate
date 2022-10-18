import styled from 'styled-components'
import { COLORS } from 'theme'
import Flex from 'components/Flex'
import { FONT } from 'theme/font'

export const PaddedDiv = styled(Flex)`
  padding: 20px 25px;
  gap: 25px;
`
export const SectionWrapper = styled(Flex)`
  width: 100%;
  overflow: scroll;
  background: ${COLORS.WHITE};
  &::-webkit-scrollbar {
    display: none;
  }
`
export const TopHeader = styled(Flex)`
  position: relative;
  width: 100%;
  font-size: ${FONT.F_3XL};
`
export const TopHeading = styled(Flex)`
  font-style: normal;
  font-weight: 700;
  font-size: ${FONT.F_XL};
  line-height: 28px;
  color: ${COLORS.GREY_P_100};
`
export const CardRow = styled(Flex)`
  gap: 25px;
`
