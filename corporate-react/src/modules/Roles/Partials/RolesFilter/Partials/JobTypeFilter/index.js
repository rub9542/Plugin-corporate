import React from 'react'
import FilterCheckBoxComp from 'components/UIComponents/FilterCheckBoxComp'
import styled from 'styled-components'
import Flex from 'components/Flex'
import { Divider } from 'antd'

const Wrapper = styled(Flex)`
  padding: 20px 20px 20px 0;
  gap: 5px;
`

const JobTypeFilter = () => {
  const options1 = [
    {
      id: 1,
      label: 'Entry level',
      value: 'Entry level',
    },
    {
      id: 2,
      label: 'Internship ',
      value: 'Internship ',
    },
  ]

  const options2 = [
    {
      id: 1,
      label: 'Full time',
      value: 'Full time',
    },
    {
      id: 2,
      label: 'Part time',
      value: 'Part time',
    },
  ]
  return (
    <Wrapper column>
      <FilterCheckBoxComp options={options1} />
      <Divider style={{ margin: '10px 0' }} />
      <FilterCheckBoxComp options={options2} />
    </Wrapper>
  )
}

export default JobTypeFilter
