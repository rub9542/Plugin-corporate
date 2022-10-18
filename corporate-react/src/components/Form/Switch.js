import React from 'react'
import { Switch as AntdSwitch, Form } from 'antd'
import styled from 'styled-components'
import Flex from 'components/Flex'

const FlexWrapper = styled(Flex)`
  width: ${props => props.width};
`
export const FormItem = styled(Form.Item)`
  margin-bottom: ${props =>
    props.marginbottom ? props.marginbottom : '0px !important'};
`
const StyledSwitch = styled(AntdSwitch)`
  box-shadow: none !important;
`
const LabelWrapper = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #202020;
`

const Switch = ({
  label,
  name,
  onChange,
  valuePropName,
  width = '100%',
  ...rest
}) => {
  return (
    <FormItem name={name} valuePropName={valuePropName} {...rest}>
      <FlexWrapper spaceBetween centerVertically width={width}>
        <LabelWrapper>{label}</LabelWrapper>
        <StyledSwitch onChange={onChange} {...rest} />
      </FlexWrapper>
    </FormItem>
  )
}

export default Switch
