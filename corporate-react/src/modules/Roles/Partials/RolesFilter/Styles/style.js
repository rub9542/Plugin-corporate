import styled from 'styled-components'
import { StyledTabs } from 'components/TabsPaneStyles'
import Flex from 'components/Flex'
import { COLORS } from 'theme'

export const StyledTab = styled(StyledTabs)`
  .ant-tabs-content {
    height: 250px !important;

    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const SubmitFlex = styled(Flex)`
  gap: 20px;
  padding: 20px;
  border-top: 1px solid ${COLORS.GREY_T_90};
`
export const MenuFlex = styled(Flex)`
  background: ${COLORS.WHITE};
  box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
`
