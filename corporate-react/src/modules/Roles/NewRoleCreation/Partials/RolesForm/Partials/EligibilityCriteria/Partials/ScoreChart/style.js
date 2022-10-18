import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'

export const Chart = styled.div`
  margin-top: 10px;
  width: fit-content;
  height: 60px;
  background: ${COLORS.PRIMARY_GREY_T_98};
  border: 1px solid ${COLORS.GREY_T_80};
  border-radius: 10px;
`
export const ChartElement = styled(Flex)`
  border-right: 1px solid ${COLORS.GREY_T_80};
  padding-right: 20px;
  gap: 5px;
`
export const SubChart = styled(Flex)`
  padding: 17px;
  gap: 10px;
  & ${ChartElement}:nth-child(4) {
    border: none;
  }
`
export const Level = styled(Flex)`
  font-size: ${FONT.F_LG};
  color: ${COLORS.GREY_T_60};
  sub {
    font-size: 10px;
    padding-top: 5px;
  }
`
export const Marks = styled.div`
  font-size: ${FONT.F_LG};
  color: ${COLORS.GREY_T_30};
`
