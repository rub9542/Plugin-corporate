import React from 'react'
import {
  FormItem,
  FormHeading,
  FlexWrap,
  RadioGroup,
} from 'components/UIComponents/FormStyles'
import Select from 'components/Select'
import Label from 'components/Form/Label'
import Toggle from 'components/UIComponents/Toggle'
import Radio from 'components/Form/RadioButton'
import TextEditor from 'components/TextEditor'
import Input from 'components/Form/Input'
import DatePicker from '/components/DatePickerStyles/DatePicker'

const JobDetails = () => {
  const jobRoleData = [
    {
      id: 1,
      name: 'System Engineer',
      value: 'System Engineer',
    },
    {
      id: 2,
      name: 'Software Engineer',
      value: 'Software Engineer',
    },
    {
      id: 3,
      name: 'Security Engineer',
      value: 'Security Engineer',
    },
    {
      id: 4,
      name: 'QA Engineer',
      value: 'QA Engineer',
    },
    {
      id: 5,
      name: 'Mobile Developer',
      value: 'Mobile Developer',
    },
  ]

  const functionData = [
    {
      id: 1,
      name: 'Backend Developer',
      value: 'Backend Developer',
    },
    {
      id: 2,
      name: 'Frontend Developer',
      value: 'Frontend Developer',
    },
    {
      id: 3,
      name: 'FullStack Developer',
      value: 'FullStack Developer',
    },
    {
      id: 4,
      name: 'Tester',
      value: 'Tester',
    },
  ]

  const RadioOptions = [
    {
      id: 1,
      label: 'Full-time',
      value: 'Full-time',
    },
    {
      id: 2,
      label: 'Part-time',
      value: 'Part-time',
    },
  ]
  const onEditorChange = e => {
    console.log('Editor Content => ', e)
  }
  return (
    <>
      <FormHeading>Job Details</FormHeading>
      <FormItem
        name={['jobDetails', 'jobTitle']}
        rules={[
          { required: true, message: 'please select any one Job title/role' },
        ]}
      >
        <Select
          showArrow={false}
          showSearch={true}
          OptionData={jobRoleData}
          label="Job title/role *"
          valueParam="value"
          placeholder="Enter Job Title/Role"
        />
      </FormItem>

      <FormItem
        name={['jobDetails', 'function']}
        rules={[{ required: true, message: 'please select any one Function' }]}
      >
        <Select
          showSearch={true}
          OptionData={functionData}
          label="Function *"
          valueParam="value"
          placeholder="Select Function"
        />
      </FormItem>

      <div>
        <Label>Job Type *</Label>
        <FormItem name={['jobDetails', 'jobTypeLevel']}>
          <Toggle
            left="Entry-Level Role"
            right="Internship Role"
            onClick={e => console.log(e)}
          />
        </FormItem>
      </div>

      <FormItem
        name={['jobDetails', 'jobType']}
        rules={[
          {
            required: true,
            message: 'Please select job type!',
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

      <FormItem>
        <TextEditor onChange={onEditorChange} />
        {/* {description.length < 1 && (
          <span style={{ color: 'red' }}>Please enter description</span>
        )} */}
      </FormItem>

      <Input
        type="text"
        width="100%"
        name={['jobDetails', 'numberOfCandidates']}
        label="Number of candidates to be hired *"
        placeholder="Eg: 25 - 50"
        notice="For range, use ‘-’ hyphen to separate"
        rules={[
          {
            required: true,
            message: 'Please select job type!',
          },
          {
            pattern: new RegExp(/^((\d{0,3})(\-)?(\d{0,3})?)$/),
            message: 'not valid',
          },
        ]}
      />

      <FlexWrap spaceBetween>
        <DatePicker
          name={['jobDetails', 'applicationStartDate']}
          rules={[{ required: true, message: 'Please enter start date!' }]}
          width="48%"
          label="Application End Date *"
        />

        <DatePicker
          label="Application End Date *"
          width="48%"
          name={['jobDetails', 'applicationEndDate']}
          rules={[{ required: true, message: 'Please enter end date!' }]}
        />
      </FlexWrap>
    </>
  )
}

export default JobDetails
