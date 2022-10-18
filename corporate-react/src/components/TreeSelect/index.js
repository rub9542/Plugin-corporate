import React, { useState } from 'react'
import { TreeSelectLocal } from 'components/TreeSelect/style'
import SelectArrowIcon from 'components/icons/SelectArrowIcon'
import CrossIcon from 'components/icons/CrossIcon'

const TreeSelect = ({
  showSearch = false,
  treeData,
  treeCheckable,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <TreeSelectLocal
        showSearch={showSearch}
        treeData={treeData}
        treeCheckable={treeCheckable}
        placeholder={placeholder}
        onChange={onChange}
        suffixIcon={<SelectArrowIcon />}
        removeIcon={<CrossIcon />}
        {...props}
      />
    </>
  )
}

export default TreeSelect
