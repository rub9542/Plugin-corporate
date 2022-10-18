import styled from 'styled-components'
import Flex from 'components/Flex'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'
import SearchInput from 'components/SearchInput'
import AntdAvatar from 'components/Avatar'
import Button from 'components/Button'
export const SearchField = styled(SearchInput)`
  width: 80vh;
`
export const CollagesFlex = styled(Flex)`
  margin: 25px 0;
  padding: 10px 0;
`
export const CollagesInfoDiv = styled.div`
  margin-right: 10px;
  color: ${COLORS.GREY_T_30};
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_BASE};
`
export const CollagesSpan = styled.span`
  font-style: normal;
  font-weight: ${FONT.FW_700};
  font-size: ${FONT.F_XS};
  color: ${COLORS.GREY_T_20};
  background: #f2f3f5;
  border-radius: 10px;
  padding: 11px 6px;
  margin: -11px 0;
  gap: 10px;
  text-align: center;
  width: 35px;
  height: 22px;
`
export const CollageNameFlex = styled(Flex)`
  flex-direction: column;
  flex: 1;
  gap: 20px;
  margin: 0 10px;
`
export const CollegeNameDiv = styled.div`
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_SM};
  color: ${COLORS.GREY_T_20};
`
export const CollegeCity = styled.div`
  font-style: normal;
  font-weight: ${FONT.FW_600};
  font-size: ${FONT.F_XS};
  color: ${COLORS.GREY_T_60};
`
export const SelectClgDiv = styled.div`
  font-style: normal;
  cursor: pointer;
  font-weight: ${FONT.FW_400};
  font-size: ${FONT.F_XS};
  color: ${COLORS.GREY_T_60};
`
export const ClgAvatar = styled(AntdAvatar)`
  padding: 8px !important;
  margin: -7px 0 0 0;
`
export const CloseButton = styled(Button.Secondary)`
  width: 80px;
  height: 38px;
  padding: 9px 20px;
  border-radius: 10px;
  border: 1px solid ${COLORS.PURPLE_T_80};
`
export const AddButton = styled(Button.Primary)`
  width: 69px;
  height: 38px;
  border-radius: 10px;
  padding: 9px 20px;
`
export const CollageDetailsFlex = styled(Flex)`
  margin: 0 0 24px 0;
  padding: 0 0 20px 0;
  border-bottom: 1px solid ${COLORS.GREY_T_90};
`
