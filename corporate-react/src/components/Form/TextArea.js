import React from 'react'
import { Input, Form } from 'antd'
import Label from 'components/Form/Label'
import styled from 'styled-components'

const { TextArea } = Input

const StyledItem = styled(Form.Item)`
  > div {
    text-align: left;
  }
  .ant-input:focus,
  .ant-input-focused {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  .ant-input:hover {
    border-color: #e9e9e9;
  }

  ${props => props.marginbottom && `margin-bottom: ${props.marginbottom};`}
`
const StyledTextArea = styled(TextArea)`
  border-radius: 10px;
`

const TextAreas = ({
  name,
  type = 'text',
  placeholder,
  label,
  rules,
  required,
  rows = 4,
  marginbottom,
  ...rest
}) => {
  return (
    <StyledItem
      colon={false}
      required={false} // Hides red asterisk
      label={
        label && (
          <Label required={required} showLock={rest.showLock}>
            {label}
          </Label>
        )
      }
      rules={rules}
      name={name}
      marginbottom={marginbottom}
      {...rest}
    >
      <StyledTextArea
        {...rest}
        type={type}
        rows={rows}
        placeholder={placeholder}
      />
    </StyledItem>
  )
}

export default TextAreas
