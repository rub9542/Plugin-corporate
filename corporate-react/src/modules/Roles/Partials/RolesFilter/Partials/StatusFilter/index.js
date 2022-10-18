import React from 'react'
import FilterCheckBoxComp from 'components/UIComponents/FilterCheckBoxComp'

const StatusFilter = () => {
  const options2 = [
    {
      id: 1,
      label: 'Active',
      value: 'Active',
    },
    {
      id: 2,
      label: 'Closed',
      value: 'Closed',
    },
  ]

  return <FilterCheckBoxComp options={options2} />
}

export default StatusFilter
