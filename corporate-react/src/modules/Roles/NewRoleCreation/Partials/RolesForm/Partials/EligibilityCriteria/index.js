import React, { useEffect, useState } from 'react'
import TreeSelect from 'components/TreeSelect'
import Label from 'components/Form/Label'
import Select from 'components/Select'
import Flex from 'components/Flex'
import PercentIcon from 'components/icons/PercentIcon'
import SettingsIcon from 'components/icons/SettingsIcon'
import Toggle from 'components/UIComponents/Toggle'
import { Button } from 'antd'
import ScoreChart from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/EligibilityCriteria/Partials/ScoreChart'
import {
  FormItem,
  FormHeading,
  FlexWrap,
  SelectInputDiv,
  StyledInput,
} from 'components/UIComponents/FormStyles'
import ScoreDrawer from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/EligibilityCriteria/Partials/ScoreDrawer'
import { Tooltip } from 'antd'

const EligibilityCriteria = () => {
  const [allowArrears, setAllowArrears] = useState(false)
  const [openScoreDrawer, setOpenScoreDrawer] = useState(false)
  const [scoreType, setScoreType] = useState('Average')
  const [scoreValue, setScoreValue] = useState(0)
  const [marksValue, setMarksValue] = useState({
    tenthValue: '0',
    twelfthValue: '0',
    ugMarksValue: '0',
    pgMarksValue: '0',
  })
  // const [tenthValue, setTenthValue] = useState(0)
  // const [twelfthValue, setTwelfthValue] = useState(0)
  // const [ugMarksValue, setUgMarksValue] = useState(0)
  // const [pgMarksValue, setPgMarksValue] = useState(0)

  const treeData = [
    {
      title: 'BE',
      value: 'BE',
      children: [
        {
          title: 'CSE',
          value: 'CSE',
        },
      ],
    },
    {
      title: 'TECH',
      value: '0-1',
      children: [
        {
          title: 'B-TECH',
          value: 'B-TECH',
        },
        {
          title: 'MCA',
          value: 'MCA',
        },
        {
          title: 'BCA',
          value: 'BCA',
        },
      ],
    },
  ]
  const mandatoryOptions = [
    {
      name: 'JavaScript',
      value: 'JavaScript',
    },
    {
      name: 'HTML',
      value: 'HTML',
    },
    {
      name: 'css',
      value: 'css',
    },
    {
      name: 'Node Js',
      value: 'Node Js',
    },
    {
      name: 'React Js',
      value: 'React Js',
    },
    {
      name: 'Python',
      value: 'Python',
    },
    {
      name: 'Django',
      value: 'Django',
    },
    {
      name: 'TensorFlow',
      value: 'TensorFlow',
    },
    {
      name: 'Next js',
      value: 'Next js',
    },
    {
      name: 'ML',
      value: 'ML',
    },
  ]
  const yearOptions = [
    {
      name: '2016',
      value: '2016',
    },
    {
      name: '2017',
      value: '2017',
    },
    {
      name: '2018',
      value: '2018',
    },
    {
      name: '2019',
      value: '2019',
    },
    {
      name: '2020',
      value: '2020',
    },
    {
      name: '2021',
      value: '2021',
    },
    {
      name: '2022',
      value: '2022',
    },
  ]
  const conditionOptions = [
    {
      name: 'Equals',
      value: 'Equals',
    },
    {
      name: 'Not Equals',
      value: 'Not Equals',
    },
    {
      name: 'Greater than or equal',
      value: 'Greater than or equal',
    },
    {
      name: 'Less than or equal',
      value: 'Less than or equal',
    },
  ]
  const scoreTypeOptions = [
    {
      name: 'Average',
      value: 'Average',
    },
    {
      name: 'Custom',
      value: 'Custom',
    },
  ]
  const RadioOptions = [
    {
      id: 1,
      label: 'No Arrears',
      value: 'No Arrears',
    },
    {
      id: 2,
      label: 'Allow Arrears',
      value: 'Allow Arrears',
    },
  ]

  useEffect(() => {
    if (scoreType == 'Average') {
      setMarksValue({
        tenthValue: scoreValue,
        twelfthValue: scoreValue,
        ugMarksValue: scoreValue,
        pgMarksValue: scoreValue,
      })
    }
  }, [scoreValue, scoreType])

  return (
    <>
      <FormHeading>Eligibility Criteria</FormHeading>
      <div>
        <Label>Degree *</Label>
        <FormItem
          name={['eligibility', 'degree']}
          rules={[{ required: true, message: 'Please select degree' }]}
        >
          <TreeSelect
            showArrow={true}
            treeData={treeData}
            treeCheckable={true}
            placeholder="Select Degree"
            maxTagCount={3}
            showSearch={true}
            // value={newRoleData.elgibilty.degrees[0].subs}
            // onChange={e => dispatch(addDegree(e))}
          />
        </FormItem>
      </div>
      <div>
        <FormItem
          name={['eligibility', 'mandatorySkills']}
          //   rules={[{ required: true, message: 'Please select skills' }]}
        >
          <Select
            showArrow={true}
            OptionData={mandatoryOptions}
            label="Mandatory skills"
            valueParam="value"
            placeholder="Select Skills"
            mode="multiple"
          />
        </FormItem>
        <Flex right>
          <Label>0/15</Label>
        </Flex>
      </div>
      <div>
        <FormItem
          name={['eligibility', 'optionalSkills']}
          //   rules={[{ required: true, message: 'Please select skills' }]}
        >
          <Select
            OptionData={mandatoryOptions}
            label="Optional skills"
            valueParam="value"
            placeholder="Select Skills"
            showArrow={true}
            mode="multiple"
          />
        </FormItem>
        <Flex right>
          <Label>0/15</Label>
        </Flex>
      </div>
      <FormItem
        name={['eligibility', 'yearOfPassing']}
        rules={[{ required: true, message: 'Please select year!' }]}
      >
        <Select
          OptionData={yearOptions}
          label="Year of passing"
          valueParam="value"
          placeholder="Select year"
          showArrow={true}
          mode="multiple"
        />
      </FormItem>
      <div>
        <Label>Score</Label>
        <FlexWrap spaceBetween gap="20px">
          <FormItem
            width="40%"
            name={['eligibility', 'scoreCondtion']}
            rules={[{ required: true, message: 'Please select condition!' }]}
          >
            <Select
              OptionData={conditionOptions}
              valueParam="value"
              placeholder="Select Condition"
              showArrow={true}
            />
          </FormItem>
          <SelectInputDiv marginbottom="0" width="40%" centerVertically>
            <FormItem width="100%" name={['eligibility', 'scoreType']}>
              <Select
                OptionData={scoreTypeOptions}
                valueParam="value"
                defaultValue={scoreType}
                bordered={false}
                onChange={e => setScoreType(e)}
              />
            </FormItem>
            <StyledInput
              width="80%"
              disabled={scoreType == 'Average' ? false : true}
              suffix={<PercentIcon />}
              type="text"
              value={scoreValue}
              onChange={e => setScoreValue(e.target.value)}
              name={['eligibility', 'avgScore']}
              placeholder="00"
              rules={[
                {
                  required: true,
                  message: 'required',
                },
                {
                  pattern: new RegExp(/^(\d?[1-9]|[1-9]0)$/),
                  message: 'not valid',
                },
              ]}
            />
          </SelectInputDiv>
          <Tooltip title={scoreType == 'Average' && 'Please select Custom'}>
            <Button
              disabled={scoreType == 'Average' ? true : false}
              type="link"
              onClick={() => setOpenScoreDrawer(true)}
            >
              <SettingsIcon />
            </Button>
          </Tooltip>
        </FlexWrap>
      </div>

      <ScoreChart
        tenthValue={marksValue.tenthValue}
        twelfthValue={marksValue.twelfthValue}
        ugMarksValue={marksValue.ugMarksValue}
        pgMarksValue={marksValue.pgMarksValue}
      />
      <div>
        <Label>Arrears *</Label>
        <FormItem
          name={['eligibility', 'arrears']}
          rules={[
            {
              required: true,
              message: 'Please select arrears!',
            },
          ]}
        >
          <Toggle
            left="No Arrears"
            right="Allow Arrears"
            onClick={e => setAllowArrears(e)}
          />
        </FormItem>
      </div>

      {allowArrears && (
        <SelectInputDiv centerVertically>
          <FormItem width="70%" name={['eligibility', 'arrearsType']}>
            <Select
              OptionData={conditionOptions}
              valueParam="value"
              defaultValue="Less than or equal"
              bordered={false}
            />
          </FormItem>
          <StyledInput
            width="35%"
            type="text"
            name={['eligibility', 'arrearsValue']}
            placeholder="00"
            rules={[
              {
                required: true,
                message: 'required',
              },
              {
                pattern: new RegExp(/^(\d?[1-9]|[1-9]0)$/),
                message: 'not valid',
              },
            ]}
          />
        </SelectInputDiv>
      )}

      <ScoreDrawer
        openScoreDrawer={openScoreDrawer}
        setOpenScoreDrawer={setOpenScoreDrawer}
        marksValue={marksValue}
        setMarksValue={setMarksValue}
      />
    </>
  )
}

export default EligibilityCriteria
