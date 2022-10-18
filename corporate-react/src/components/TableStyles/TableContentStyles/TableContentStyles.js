import styled from 'styled-components'
import { FONT } from 'theme/font'
import { COLORS } from 'theme'
import Flex from 'components/Flex'

export const RoleColHead = styled.h1`
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_BASE};
  line-height: 1.4em;
  color: ${COLORS.GREY_T_20};
`
export const RoleColComment = styled.p`
  margin-bottom: 0;
  font-weight: ${FONT.FW_400};
  font-size: ${FONT.F_SM};
  line-height: 20px;
  color: ${COLORS.GREY_T_60};
  text-transform: capitalize;
`
export const RowNumberData = styled.div`
  font-weight: ${FONT.FW_400};
  font-size: ${FONT.F_SM};
  line-height: 20px;
  color: ${COLORS.GREY_T_20};
`
export const UpTag = styled(Flex)`
  padding: 5px 10px;
  margin-left: 10px;
  gap: 5px;
  border-radius: 20px;
  border: 1px solid ${COLORS.GREY_T_90};
  background-color: ${COLORS.PRIMARY_GREY_T_98}; ;
`
