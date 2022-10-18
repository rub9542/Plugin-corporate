import React, { useState } from 'react'
import { FormHeading } from 'components/UIComponents/FormStyles'
import EvaluationForm from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/EvaluationProcess/EvaluationForm'
import DragDiv from 'components/DragDiv'

const EvaluationProcess = () => {
  const [sortedItems, setSortedItems] = useState([
    {
      id: 1,
      name: 'Aptitude Test',
      description:
        'An aptitude test is an exam used to determine an individuals skill or propensity to succeed in a given activity. ',
      type: 'WRITERN',
    },
    {
      id: 2,
      name: 'Group Discussion',
      description:
        "An aptitude test is an exam used to determine an individual's skill or propensity to succeed in a given activity.",
      type: 'ASSESSMENT',
    },
    {
      id: 3,
      name: 'Technical Interview',
      description:
        "An aptitude test is an exam used to determine an individual's skill or propensity to succeed in a given activity.",
      type: 'GROUP',
    },
  ])

  return (
    <>
      <FormHeading>Evaluation Process</FormHeading>
      {/* <DragDiv sortedItems={sortedItems} setSortedItems={setSortedItems} /> */}
      <EvaluationForm
        sortedItems={sortedItems}
        setSortedItems={setSortedItems}
      />
    </>
  )
}

export default EvaluationProcess
