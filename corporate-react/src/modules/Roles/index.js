import React, { useEffect, useState } from 'react'
import {
  SectionWrapper,
  PaddedDiv,
  TopHeader,
  TopHeading,
  CardRow,
} from 'modules/Roles/Style/style'
import Button from 'components/Button/index'
import PlusIcon from 'components/icons/PlusIcon'
import InfoCards from 'components/InfoCards'
import OpenRoles from 'components/icons/OpenRoles'
import EntryLevel from 'components/icons/EntryLevel'
import Internship from 'components/icons/Internship'
import ClosedRoles from 'components/icons/ClosedRoles'
import Select from 'components/Select'
import { COLORS } from 'theme'
import RolesTable from 'modules/Roles/Partials/RolesTable'
import RolesFilter from 'modules/Roles/Partials/RolesFilter'
import { useNavigate } from 'react-router-dom'

const Roles = ({ getJobsList, corporateMetrics, jobsList }) => {
  const [cardsData, setCardsData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getJobsList()
  }, [])

  useEffect(() => {
    const cardData = [
      {
        key: 1,
        icon: <OpenRoles />,
        text: 'Active Roles',
        value: corporateMetrics?.open_count,
      },
      {
        key: 2,
        icon: <EntryLevel />,
        text: 'Entry Level',
        value: corporateMetrics?.entry_count,
      },
      {
        key: 3,
        icon: <Internship />,
        text: 'Internship',
        value: corporateMetrics?.intern_count,
      },
      {
        key: 4,
        icon: <ClosedRoles />,
        text: 'Closed Roles',
        value: corporateMetrics?.closed_count,
      },
    ]
    setCardsData(cardData)
  }, [corporateMetrics])

  const optionData = [
    {
      id: 1,
      value: 'all_roles',
      label: 'All Roles',
    },
    {
      id: 2,
      value: 'active_roles',
      label: 'Active Roles',
    },
    {
      id: 3,
      value: 'closed_rles',
      label: 'Closed Roles',
    },
  ]

  return (
    <SectionWrapper column>
      <PaddedDiv column>
        <TopHeader row spaceBetween alignCenter>
          <TopHeading flexStart>Roles</TopHeading>

          <Button.Primary
            height={'38px'}
            text={'New Role'}
            icon={<PlusIcon />}
            onClick={() => navigate('new-role')}
          />
        </TopHeader>

        <CardRow>
          {cardsData?.map(card => (
            <InfoCards
              key={card?.key}
              width={'25%'}
              icon={card?.icon}
              text={card?.text}
              value={card?.value}
              height="130px"
            />
          ))}
        </CardRow>

        <Select
          width={'160px'}
          defaultValue={2}
          OptionData={optionData}
          nameParam="label"
          backgroundcolor={COLORS.GREY_T_98}
        />
      </PaddedDiv>

      <RolesFilter />
      <RolesTable jobsList={jobsList} />
    </SectionWrapper>
  )
}
export default Roles
