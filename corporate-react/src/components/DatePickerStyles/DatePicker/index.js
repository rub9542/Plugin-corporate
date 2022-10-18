import React from 'react'
import CalendarIcon from 'components/icons/CalendarIcon'
import moment from 'moment'
import { DateStyles } from 'components/DatePickerStyles/Styles/Styles'
import Label from 'components/Form/Label'
import styled from 'styled-components'
import Flex from 'components/Flex'
import { FormItem } from 'components/UIComponents/FormStyles'

const StyledFlex = styled(Flex)`
  width: ${props => props.width};
`

const DatePicker = ({
  suffixIcon = <CalendarIcon />,
  id,
  width = '50%',
  name = 'date',
  rules,
  color = '#010E30',
  placeholder = 'DD/MM/YYYY',
  dateFormat = 'DD/MM/YYYY',
  label,
}) => {
  return (
    <StyledFlex column width={width}>
      <Label>{label}</Label>
      <FormItem name={name} rules={rules} width={'100%'}>
        <DateStyles
          suffixIcon={suffixIcon}
          id={id}
          width={'100%'}
          color={color}
          opacity="1"
          placeholder={placeholder}
          format={dateFormat}
          // onChange={onDOBChange}
          // disabledDate={d => !d || d.isAfter(moment())}
        />
      </FormItem>
    </StyledFlex>
  )
}

export default DatePicker
