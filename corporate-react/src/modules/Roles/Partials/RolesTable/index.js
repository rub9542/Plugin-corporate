import React from 'react'
import { StyledTable } from 'components/TableStyles/TableStyles'
import {
  RoleColHead,
  RoleColComment,
  RowNumberData,
  UpTag,
} from 'components/TableStyles/TableContentStyles/TableContentStyles'
import Flex from 'components/Flex'
import UpwardGreenArrowIcon from 'components/icons/UpwardGreenArrowIcon'
import RoleStatus from 'modules/Roles/Partials/RolesTable/RoleStatus/index'
import ActionDropdown from 'modules/Roles/Partials/RolesTable/ActionDropdown/index'

const RolesTable = ({ jobsList }) => {
  const getDay = text => {
    let month = new Date(text).toLocaleDateString('en-us', { month: 'long' })
    let day1 = new Date(text).toLocaleDateString('en-us', { day: 'numeric' })
    let year = new Date(text).toLocaleDateString('en-us', { year: 'numeric' })
    const date = `${day1} ${month} ${year}`
    return date
  }

  const columns = [
    {
      title: 'Roles',
      dataIndex: 'tittle',
      sorter: true,
      render: (text, data) => (
        <>
          <RoleColHead>{text}</RoleColHead>
          <RoleColComment>
            {`${data?.jobTypeLevel.toLowerCase()} Level - ${data?.jobType.toLowerCase()} Time`}
          </RoleColComment>
        </>
      ),
    },
    {
      title: 'Colleges',
      title: 'Colleges',
      dataIndex: 'colleges',
      sorter: true,
      render: text => <RowNumberData>{text}</RowNumberData>,
    },
    {
      title: 'Candidates',
      dataIndex: 'candidates',
      sorter: true,
      render: (text, data) => (
        <Flex centerVertically>
          <RowNumberData>{text}</RowNumberData>
          <UpTag centerVertically>
            <RowNumberData>
              <b>0</b>
            </RowNumberData>
            <UpwardGreenArrowIcon />
          </UpTag>
        </Flex>
      ),
    },
    {
      title: 'status',
      dataIndex: 'status',
      render: status => <RoleStatus status={status} />,
    },
    {
      title: 'Posted On',
      dataIndex: 'postedDate',
      sorter: true,
      render: date => (
        <RowNumberData>{date ? getDay(date) : '-'}</RowNumberData>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: () => <ActionDropdown text={'view'} />,
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    getCheckboxProps: record => ({
      disabled: record.roles === 'Disabled User',
      // Column configuration not to be checked
      roles: record.roles,
    }),
  }

  return (
    <>
      <StyledTable
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        rowKey="id"
        columns={columns}
        dataSource={jobsList?.result}
      />
    </>
  )
}

export default RolesTable
