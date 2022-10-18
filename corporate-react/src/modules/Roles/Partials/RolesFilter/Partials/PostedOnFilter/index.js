import React from 'react'
import { DateRangePicker } from 'components/DatePickerStyles/DateRangePicker'
import styled from 'styled-components'
import Label from 'components/Form/Label'
import Flex from 'components/Flex'

const Wrapper = styled(Flex)`
  padding: 20px 20px 20px 0;
  gap: 5px;
`

const PostedOnFilter = () => {
  return (
    <Wrapper column>
      <Label>Select Date *</Label>
      <DateRangePicker width="100%" />
    </Wrapper>
  )
}

export default PostedOnFilter
