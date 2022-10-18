/* eslint-disable */
import React from 'react'
import { Radio as AntdRadio } from 'antd'
import { COLORS } from 'theme'
import styled from 'styled-components'

const StyledDiv = styled.div`
  ${props => props.width && `width: ${props.width};`}
  .ant-radio-wrapper-checked {
    border-color: ${COLORS.PRIMARY};
  }
`
const StyledRadio = styled(AntdRadio)`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.HEADING};
  border: ${props => props.border && '1px solid #e6e7ea'};
  border-radius: 10px;
  padding: 15px;
  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: none !important;
  }

  .ant-radio-checked .ant-radio-inner::after {
    transform: scale(0.75);
  }
  .ant-radio-inner {
    background-color: transparent;
  }
`

const Radio = ({ onChange, label, border = false, width, ...rest }) => {
  return (
    <StyledDiv width={width}>
      <StyledRadio border={border} onChange={onChange} {...rest}>
        {label}
      </StyledRadio>
    </StyledDiv>
  )
}
export default Radio
