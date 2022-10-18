import React from 'react'
import Avatar from 'components/Avatar'
import styled from 'styled-components'
import Flex from 'components/Flex'
import ApartmentIcon from 'components/icons/ApartmentIcon'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'
const HeaderFlex = styled(Flex)`
  gap: 10px;
`

const InstituteName = styled.h2`
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_SM};
  line-height: 20px;
  color: ${COLORS.BLACK_WHITE_B_100};
  margin-bottom: 0;
`
const Location = styled.p`
  font-style: normal;
  font-weight: ${FONT.FW_500};
  font-size: ${FONT.F_XS};
  line-height: 20px;
  color: ${COLORS.BLACK_WHITE_B_100};
  opacity: 0.48;
  margin-bottom: 0;
`

const HeaderInstituteInfo = () => {
  return (
    <HeaderFlex>
      <div>
        <Avatar
          background="none"
          src={''}
          size={37}
          icon={<ApartmentIcon width="24" height="24" />}
          boxShadow={true}
          padding="5px"
        />
      </div>
      <Flex column>
        <InstituteName>Indira Institute of Technology</InstituteName>
        <Location>Bengaluru, KA</Location>
      </Flex>
    </HeaderFlex>
  )
}

export default HeaderInstituteInfo
