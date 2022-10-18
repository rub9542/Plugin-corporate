import React from 'react'
import CustomTag from 'components/CustomTag'

const RoleStatus = ({ status }) => {
  var colorType
  var tagMessage
  if (status == '0') {
    colorType = 'grey'
    tagMessage = 'Draft'
  } else if (status == '1') {
    colorType = 'green'
    tagMessage = 'Active'
  } else if (status == -1) {
    colorType = 'red'
    tagMessage = 'Close'
  }
  return (
    <CustomTag colorType={colorType} message={tagMessage} bordered={false} />
  )
}

export default RoleStatus
