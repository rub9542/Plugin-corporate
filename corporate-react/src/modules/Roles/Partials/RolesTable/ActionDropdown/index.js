import React from 'react'

import {
  StyledDropDownButton,
  ButtonText,
  Main,
  ActionMenu,
  ItemText,
  ItemDeleteText,
} from 'components/ActionStyles/ActionStyles'
import DownArrow from 'components/icons/DownArrow'

const ActionDropdown = () => {
  const menu = (
    <ActionMenu
      width={'165px'}
      items={[
        {
          key: 'edit',
          label: <ItemText>Edit & Update</ItemText>,
        },
        {
          key: 'close',
          label: <ItemText>Close Application</ItemText>,
        },
        {
          key: 'duplicate',
          label: <ItemText>Duplicate</ItemText>,
        },
        {
          key: 'delete',
          label: <ItemText>Delete</ItemText>,
        },
      ]}
    />
  )

  return (
    <Main>
      <StyledDropDownButton
        overlay={menu}
        shape="round"
        // onClick={() => handleMenuClick(studentId)}
        trigger={['click']}
        icon={<DownArrow />}
      >
        <ButtonText>View</ButtonText>
      </StyledDropDownButton>
    </Main>
  )
}

export default ActionDropdown
