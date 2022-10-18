/* eslint-disable */
import React, { Fragment } from 'react'
import { Input as AntdInput, Form } from 'antd'
import Label from 'components/Form/Label'
import styled from 'styled-components'
import { FONT } from 'theme/font'

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
  }
  border-radius: 8px;
  margin-bottom: 0px !important;
`
const AntdInputStyle = styled(AntdInput)`
  ::placeholder {
    font-size: 16px;
  }
  height: ${props => (props.height ? props.height : '40px')};
  border-radius: 8px;
  box-shadow: none;
  border-color: ${props => (props.error ? 'red' : '#e9e9e9')};
  :focus {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  :hover {
    border-color: #e9e9e9;
  }
  :not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #e9e9e9 !important;
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }
`
const Notice = styled.div`
  margin-top: 10px;
  font-weight: ${FONT.FW_500};
  font-size: ${FONT.F_XS};
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cccfd6;
`
const Input = ({
  label,
  type,
  name,
  rules,
  onChange,
  placeholder,
  required,
  disabled,
  width = '552px',
  height,
  marginRight,
  labelStyle,
  defaultValue,
  optional,
  noStyle = undefined,
  notice,
  ...rest
}) => {
  return (
    <div>
      <StyledItem
        style={{
          width: width,
          marginRight: marginRight,
        }}
        rules={rules}
        noStyle={noStyle}
        name={name}
        colon={false}
        required={false}
        label={
          label && (
            <Fragment>
              <Label required={required} labelStyle={labelStyle}>
                {label} <span>{optional}</span>
              </Label>
            </Fragment>
          )
        }
      >
        <AntdInputStyle
          {...rest}
          defaultValue={defaultValue}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          height={height}
        />
      </StyledItem>
      {notice && <Notice>{notice}</Notice>}
    </div>
  )
}
export default Input
