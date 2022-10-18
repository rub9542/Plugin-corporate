import React from 'react'
import {
  Chart,
  SubChart,
  Level,
  Marks,
  ChartElement,
} from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/EligibilityCriteria/Partials/ScoreChart/style'

const ScoreChart = ({
  tenthValue,
  twelfthValue,
  ugMarksValue,
  pgMarksValue,
}) => {
  return (
    <Chart>
      <SubChart>
        <ChartElement>
          <Level>
            10<sub>TH</sub>
          </Level>
          - <Marks>{tenthValue}%</Marks>
        </ChartElement>
        <ChartElement>
          <Level>
            12<sub>TH</sub>
          </Level>
          - <Marks>{twelfthValue}%</Marks>
        </ChartElement>
        <ChartElement>
          <Level>UG</Level>- <Marks>{ugMarksValue}%</Marks>
        </ChartElement>
        <ChartElement>
          <Level>PG</Level>- <Marks>{pgMarksValue}%</Marks>
        </ChartElement>
      </SubChart>
    </Chart>
  )
}

export default ScoreChart
