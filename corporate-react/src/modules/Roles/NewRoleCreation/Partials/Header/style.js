import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'

export const Container = styled(Flex)`
  padding: 20px 25px;
  border-bottom: 1px solid ${COLORS.GREY_T_90};
  position: absolute;
  width: calc(100% - 19em);
  background-color: #ffffff;
  z-index: 99;
`

export const LeftSection = styled(Flex)`
  gap: 20px;
`
export const RightSection = styled(Flex)`
  gap: 20px;
`
export const SectionName = styled(Flex)`
  gap: 10px;
`
