import styled from 'styled-components'
import { Table } from 'antd'
import { COLORS } from 'theme'
import { FONT } from 'theme/font'

export const StyledTable = styled(Table)`
  padding: ${props => (props.padding ? props.padding : '0px')};
  .ant-table-thead {
    height: 60px;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    content: none;
  }
  .ant-table-container table > thead > tr:first-child th:first-child,
  .ant-table-container table > tbody > tr td:first-child {
    padding-left: 25px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child,
  .ant-table-container table > tbody > tr td:last-child {
    padding-right: 25px;
  }
  tr {
    th {
      background: ${COLORS.PRIMARY_GREY_T_98};
      font-style: normal;
      font-weight: ${FONT.FW_500};
      font-size: ${FONT.F_XS};
      line-height: 1.125em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${COLORS.GREY_T_30};

      ::before {
        height: 0px;
      }
    }
  }
  .ant-table-pagination.ant-pagination {
    justify-content: center;
  }
`
