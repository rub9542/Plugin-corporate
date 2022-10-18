import React, { useState } from 'react'
import Header from 'modules/Roles/NewRoleCreation/Partials/Header'
import RolesForm from 'modules/Roles/NewRoleCreation/Partials/RolesForm'
import { MainWrapper } from 'modules/Roles/NewRoleCreation/Partials/Style/style'
import PreviewRoleDrawer from 'modules/Roles/NewRoleCreation/Partials/PreviewRoleDrawer'
import SelectCollegesDrawer from 'modules/Roles/NewRoleCreation/Partials/SelectCollegesDrawer'
import AllCollegeDrawer from 'modules/Roles/NewRoleCreation/Partials/AllCollegeDrawer/index'
const NewRoleCreation = () => {
  const [previewDrawer, setPreviewDrawer] = useState(false)
  const [collegeDrawer, setCollegeDrawer] = useState(false)
  const [allCollegeDrawer, setAllCollegeDrawer] = useState(false)
  return (
    <>
      <Header setPreviewDrawer={setPreviewDrawer} />
      <MainWrapper column>
        <RolesForm />
      </MainWrapper>

      <PreviewRoleDrawer
        previewDrawer={previewDrawer}
        setPreviewDrawer={setPreviewDrawer}
        setCollegeDrawer={setCollegeDrawer}
      />
      <SelectCollegesDrawer
        collegeDrawer={collegeDrawer}
        setCollegeDrawer={setCollegeDrawer}
        setPreviewDrawer={setPreviewDrawer}
        allCollegeDrawer={allCollegeDrawer}
        setAllCollegeDrawer={setAllCollegeDrawer}
      />
      <AllCollegeDrawer
        allCollegeDrawer={allCollegeDrawer}
        setAllCollegeDrawer={setAllCollegeDrawer}
        setCollegeDrawer={setCollegeDrawer}
      />
    </>
  )
}

export default NewRoleCreation
