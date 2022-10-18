import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'theme'
import { Slider, Form } from 'antd'
import Flex from 'components/Flex'
import InputNumber from 'components/Form/InputNumber'

const StyledSlider = styled(Slider)`
  width: 95% !important;
  padding: 0px !important;
  height: 2px !important;
  margin: 10px 10px !important;
  margin-bottom: 30px !important;
  .ant-slider-handle {
    width: 20px;
    height: 20px;
    margin-top: -9px;
    background: ${COLORS.WHITE};
    border: 1px solid ${COLORS.GREY_T_95};
    box-shadow: 0px 2px 6px rgba(123, 97, 255, 0.15);
  }
  .ant-slider-track {
    background-color: ${COLORS.PRIMARY} !important;
  }
  .ant-slider-rail,
  .ant-slider-track {
    height: 4px !important;
  }
  .ant-slider-dot {
    border: none !important;
  }
  .ant-slider-mark-text {
    transform: none !important ;
  }
`
const StyledStrong = styled.strong`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${COLORS.GREY_T_60};
`
const StyledFormItem = styled(Form.Item)`
  width: 100%;
`
const RangeFlex = styled(Flex)`
  gap: 20px;
  margin-top: 20px;
`
const StyledInput = styled(InputNumber)`
  .ant-input-number-handler-wrap {
    display: none;
  }
`

const RangeSliderInput = ({
  inputValue,
  setInputValue,
  defaultValue = 0,
  rules,
  min = 0,
  max = 100,
  step = 1,
  sliderrules,
  inputName,
  sliderName,
  ...props
}) => {
  const marks = {
    0: {
      style: {
        marginTop: 'px',
      },
      label: <StyledStrong>{`0%`}</StyledStrong>,
    },
    100: {
      style: {
        left: '90%',
        marginTop: '-6px',
      },
      label: <StyledStrong>{`100%`}</StyledStrong>,
    },
  }

  const onChange = value => {
    setInputValue(value)
  }

  console.log('valueeee', inputValue)
  return (
    <RangeFlex centreVertically>
      <StyledFormItem name={sliderName} rules={sliderrules}>
        <StyledSlider
          step={step}
          onChange={onChange}
          marks={marks}
          min={min}
          max={max}
          value={typeof inputValue === 'number' ? inputValue : 0}
          {...props}
        />
      </StyledFormItem>
      <StyledInput
        width="90px"
        type="number"
        min={min}
        max={max}
        value={inputValue}
        onChange={onChange}
        onKeyDown={e =>
          ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()
        }
        name={inputName}
      />
    </RangeFlex>
  )
}

export default RangeSliderInput
