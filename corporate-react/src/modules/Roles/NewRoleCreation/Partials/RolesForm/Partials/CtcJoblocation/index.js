import React, { useState } from 'react'
import {
  FormItem,
  FormHeading,
  RadioGroup,
  SelectInputDiv,
  StyledInput,
} from 'components/UIComponents/FormStyles'
import Label from 'components/Form/Label'
import Radio from 'components/Form/RadioButton'
import Select from 'components/Select'
import Switch from 'components/Form/Switch'
import Checkbox from 'components/Form/Checkbox'
import Input from 'components/Form/Input'
import Dash from 'components/icons/Dash'
import {
  RangeDiv,
  Wrapper,
} from 'modules/Roles/NewRoleCreation/Partials/RolesForm/Partials/CtcJoblocation/Style/style'

const CtcJoblocation = () => {
  const RadioOptions = [
    {
      id: 1,
      label: 'Annually',
      value: 'Annually',
    },
    {
      id: 2,
      label: 'Monthly',
      value: 'Monthly',
    },
  ]
  const optionData = [
    {
      id: 1,
      name: 'Mumbai, MH',
      value: 'Mumbai, MH',
    },
    {
      id: 2,
      name: 'Bangalore, KA',
      value: 'Bangalore, KA',
    },
    {
      id: 3,
      name: 'Chennai, TN',
      value: 'Chennai, TN',
    },
  ]
  const cityOption = [
    {
      id: 1,
      name: 'Anywhere',
      value: 'Anywhere',
    },
    {
      id: 2,
      name: 'Anywhere within the selected state',
      value: 'Anywhere within the selected state',
    },
    {
      id: 3,
      name: 'Bangalore',
      value: 'Bangalore',
    },
    {
      id: 4,
      name: 'Pune',
      value: 'Pune',
    },
    {
      id: 5,
      name: 'Mumbai',
      value: 'Mumbai',
    },
    {
      id: 6,
      name: 'Chennai',
      value: 'Chennai',
    },
    {
      id: 7,
      name: 'Surat',
      value: 'Surat',
    },
    {
      id: 8,
      name: 'Noida',
      value: 'Noida',
    },
    {
      id: 9,
      name: 'Others',
      value: 'Others',
    },
  ]
  const TierPriceOption = [
    {
      id: 1,
      name: 'INR  ₹',
      value: 'INR  ₹',
    },
  ]

  const [tierBased, setTierBased] = useState(false)
  const [remote, setRemote] = useState(false)
  const [range1, setRange1] = useState(false)
  const [range2, setRange2] = useState(false)
  const [range3, setRange3] = useState(false)
  const [range4, setRange4] = useState(false)

  // data of number of tiers fields to show (current 1 + 3)
  const tierFormData = [
    {
      id: 2,
      heading: 'Tier 2 CTC *',
      activeState: range2,
      setActiveState: setRange2,
      selectValue: 'INR  ₹',
      //   selectOptions: TierPriceOption,
      inputMinName: ['CTCJoblocation', 'Tier2', 'min'],
      inputMaxName: ['CTCJoblocation', 'Tier2', 'max'],
    },
    {
      id: 3,
      heading: 'Tier 3 CTC *',
      activeState: range3,
      setActiveState: setRange3,
      selectValue: 'INR  ₹',
      //   selectOptions: TierPriceOption,
      inputMinName: ['CTCJoblocation', 'Tier3', 'min'],
      inputMaxName: ['CTCJoblocation', 'Tier3', 'max'],
    },
    {
      id: 4,
      heading: 'Tier 4 CTC *',
      activeState: range4,
      setActiveState: setRange4,
      selectValue: 'INR  ₹',
      //   selectOptions: TierPriceOption,
      inputMinName: ['CTCJoblocation', 'Tier4', 'min'],
      inputMaxName: ['CTCJoblocation', 'Tier4', 'max'],
    },
  ]

  return (
    <>
      <FormHeading>CTC & Job location </FormHeading>

      <div>
        <Label>Select Period *</Label>
        <FormItem
          name={['CTCJoblocation', 'period']}
          rules={[
            {
              required: true,
              message: 'Please select period!',
            },
          ]}
        >
          <RadioGroup>
            {RadioOptions?.map((item, index) => (
              <Radio
                key={index}
                border={true}
                label={item?.label}
                value={item?.value}
              />
            ))}
          </RadioGroup>
        </FormItem>
      </div>

      <div>
        <RangeDiv spaceBetween alignCenter>
          <Label>{tierBased ? 'Tier 2 CTC *' : 'CTC *'}</Label>
          <Checkbox
            checked={range1}
            label={'Range'}
            value={'Range'}
            onClick={() => setRange1(!range1)}
          />
        </RangeDiv>
        <Wrapper>
          <SelectInputDiv width="50%">
            <Select
              width="30%"
              OptionData={TierPriceOption}
              valueParam="value"
              bordered={false}
              // onChange={onCountryCodeChange}
              value={'INR  ₹'}
            />
            <StyledInput
              width="100%"
              type="text"
              name={['CTCJoblocation', 'Tier1', 'min']}
              placeholder="Eg: 1,00,000"
              rules={[
                {
                  required: true,
                  message: 'Please Enter CTC value!',
                },
                {
                  pattern: new RegExp(/^[0-9]*$/),
                  message: 'Please Enter Valid CTC value!',
                },
              ]}
            />
          </SelectInputDiv>

          {range1 ? (
            <>
              <Dash />
              <Input
                type="text"
                width="100%"
                name={['CTCJoblocation', 'Tier1', 'max']}
                placeholder="Eg: 1,00,000"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter CTC value!',
                  },
                  {
                    pattern: new RegExp(/^[0-9]*$/),
                    message: 'Please Enter Valid CTC value!',
                  },
                ]}
              />
            </>
          ) : null}
        </Wrapper>
      </div>

      <Switch
        onChange={checked => setTierBased(checked)}
        label="Different CTC for each Tier"
        width={'50%'}
      />

      {tierBased &&
        tierFormData?.map((item, index) => (
          <div key={index}>
            <RangeDiv spaceBetween alignCenter>
              <Label>{item?.heading}</Label>
              <Checkbox
                checked={item?.activeState}
                label={'Range'}
                value={'Range'}
                onClick={() => item?.setActiveState(!item?.activeState)}
              />
            </RangeDiv>
            <Wrapper>
              <SelectInputDiv width="50%">
                <Select
                  width="30%"
                  OptionData={TierPriceOption}
                  valueParam="value"
                  bordered={false}
                  // onChange={onCountryCodeChange}
                  value={item?.selectValue}
                />
                <StyledInput
                  width="100%"
                  type="text"
                  name={item?.inputMinName}
                  placeholder="Eg: 1,00,000"
                  rules={[
                    {
                      required: true,
                      message: 'Please Enter CTC value!',
                    },
                    {
                      pattern: new RegExp(/^[0-9]*$/),
                      message: 'Please Enter Valid Tier CTC value!',
                    },
                  ]}
                />
              </SelectInputDiv>

              {item?.activeState ? (
                <>
                  <Dash />
                  <Input
                    type="text"
                    width="100%"
                    name={item?.inputMaxName}
                    placeholder="Eg: 1,00,000"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter CTC value!',
                      },
                      {
                        pattern: new RegExp(/^[0-9]*$/),
                        message: 'Please Enter Valid CTC value!',
                      },
                    ]}
                  />
                </>
              ) : null}
            </Wrapper>
          </div>
        ))}

      <FormItem
        name={['CTCJoblocation', 'jobLocation']}
        rules={[{ required: true, message: 'Please select Job Location' }]}
      >
        <Select
          showSearch={true}
          showArrow={true}
          OptionData={optionData}
          label="Job Location *"
          valueParam="value"
          placeholder="Enter Job Location"
          mode="multiple"
          maxTagCount={2}
        />
      </FormItem>

      <Switch
        label="Allow Remote Work"
        width={'50%'}
        onChange={checked => setRemote(checked)}
      />

      {remote && (
        <FormItem
          name={['CTCJoblocation', 'remoteLocation']}
          rules={[{ required: true, message: 'Please select any location' }]}
        >
          <Select
            showSearch={true}
            showArrow={true}
            OptionData={cityOption}
            label="Remote Location *"
            valueParam="value"
            placeholder="Remote Location"
            mode="multiple"
            maxTagCount={2}
            notFoundContent={
              <>
                Please select <b>"Others"</b>
              </>
            }
          />
        </FormItem>
      )}
    </>
  )
}

export default CtcJoblocation
