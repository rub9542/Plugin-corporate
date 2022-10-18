import styled from 'styled-components'

import { FONT } from 'theme/font'
import { COLORS } from 'theme'
import Flex from 'components/Flex'

export const Container = styled(Flex)`
  gap: 10px;
`

export const From = styled.div`
  font-weight: ${FONT.FW_500};
  font-size: ${FONT.F_XS};
  line-height: 15px;
  text-align: center;
  color: ${COLORS.PRIMARY};
`

export const On = styled.div`
  font-weight: ${FONT.FW_500};
  font-size: ${FONT.F_XS};
  line-height: 15px;
  text-align: center;
  color: ${COLORS.GREY_T_60};
`
