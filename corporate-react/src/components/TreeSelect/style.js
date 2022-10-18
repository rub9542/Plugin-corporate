import styled from 'styled-components'
import { TreeSelect } from 'antd'
import { COLORS } from 'theme'

export const TreeSelectLocal = styled(TreeSelect)`
  width: 100%;
  margin-top: 10px;

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 50px;
    width: 100%;
    background: ${props =>
      props.white ? '#ffffff' : COLORS.PRIMARY_GREY_T_98};
    border: 1px solid #e6e7ea;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600px;
    &.ant-select-selection-placeholder {
      color: #676e83;
      font-size: 16px;
      font-weight: 600px;
    }
  }
`
