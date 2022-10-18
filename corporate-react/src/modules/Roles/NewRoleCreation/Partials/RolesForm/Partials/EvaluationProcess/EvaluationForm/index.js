import React, { useState } from 'react'
import Input from 'components/Form/Input'
import Radio from 'components/Form/RadioButton'
import Label from 'components/Form/Label'
import TextAreas from 'components/Form/TextArea'
import PlusIcon from 'components/icons/PlusIcon'
import Button from 'components/Button'
import {
  FormItem,
  SecondaryHeading,
  RadioGroup,
  RedText,
} from 'components/UIComponents/FormStyles'

const EvaluationForm = ({ sortedItems, setSortedItems }) => {
  const [roundValues, setRoundValues] = useState({
    roundName: '',
    roundNameError: '',
    interviewType: '',
    interviewTypeError: '',
    assessmentType: '',
    assessmentTypeError: '',
    roundDescription: '',
    roundDescriptionError: '',
  })
  const [loading, setLoading] = useState(false)

  const RadioOptions = [
    {
      id: 1,
      label: 'Assessment',
      value: 'Assessment',
    },
    {
      id: 2,
      label: 'Group',
      value: 'Group',
    },
    {
      id: 3,
      label: 'Face-to-face',
      value: 'Face-to-face',
    },
  ]
  const assessmentOptions = [
    {
      label: 'Cognitive',
      value: 'Cognitive',
    },
    {
      id: 2,
      label: 'Technical',
      value: 'Technical',
    },
    {
      id: 3,
      label: 'Communication',
      value: 'Communication',
    },
  ]

  const handleOnChange = (value, key) => {
    setRoundValues({ ...roundValues, [key]: value, [key + 'Error']: '' })
  }

  const handleSubmit = async () => {
    let isValid = true
    let localState = roundValues
    if (!roundValues.roundName) {
      isValid = false
      localState = { ...localState, roundNameError: 'Please Enter round name!' }
    }
    if (!roundValues.interviewType) {
      isValid = false
      localState = {
        ...localState,
        interviewTypeError: 'Please Select round type!',
      }
    }
    if (
      roundValues.interviewType == 'Assessment' &&
      !roundValues.assessmentType
    ) {
      isValid = false
      localState = {
        ...localState,
        assessmentTypeError: 'Please Select assessment type!',
      }
    } else {
      localState = {
        ...localState,
        assessmentTypeError: '',
      }
    }
    if (!roundValues.roundDescription) {
      isValid = false
      localState = {
        ...localState,
        roundDescriptionError: 'Please enter description!',
      }
    }
    if (isValid) {
      setLoading(true)

      setTimeout(() => {
        setSortedItems([
          ...sortedItems,
          {
            id: sortedItems.length + 1,
            name: roundValues.roundName,
            type: roundValues.interviewType.toUpperCase(),
            assesmentType: roundValues.assessmentType,
            description: roundValues.roundDescription,
          },
        ])
        setLoading(false)
        clearAll()
      }, 2000)
    } else {
      setRoundValues(localState)
    }
  }

  const clearAll = () => {
    setRoundValues({
      ...roundValues,
      roundName: '',
      roundNameError: '',
      interviewType: '',
      interviewTypeError: '',
      assessmentType: '',
      assessmentTypeError: '',
      roundDescription: '',
      roundDescriptionError: '',
    })
  }

  return (
    <>
      <SecondaryHeading>Round {sortedItems.length + 1}</SecondaryHeading>

      <div>
        <Input
          type="text"
          width="100%"
          label="Round name *"
          placeholder="Add Round Name"
          value={roundValues?.roundName}
          onChange={({ target }) => handleOnChange(target.value, 'roundName')}
          status={roundValues?.roundNameError && 'error'}
        />
        <RedText>{roundValues?.roundNameError} </RedText>
      </div>

      <div>
        <Label>Interview Type *</Label>
        <FormItem>
          <RadioGroup
            spaceBetween
            onChange={({ target }) =>
              handleOnChange(target.value, 'interviewType')
            }
            value={roundValues.interviewType}
          >
            {RadioOptions?.map((item, index) => (
              <Radio
                width={'30%'}
                key={index}
                border={true}
                label={item?.label}
                value={item?.value}
              />
            ))}
          </RadioGroup>
        </FormItem>
        <RedText>{roundValues?.interviewTypeError}</RedText>
      </div>

      {roundValues?.interviewType == 'Assessment' ? (
        <div>
          <Label>Assessment Type *</Label>
          <FormItem>
            <RadioGroup
              spaceBetween
              onChange={({ target }) =>
                handleOnChange(target.value, 'assessmentType')
              }
              value={roundValues.assessmentType}
            >
              {assessmentOptions?.map((item, index) => (
                <Radio
                  width={'30%'}
                  key={index}
                  border={true}
                  label={item?.label}
                  value={item?.value}
                />
              ))}
            </RadioGroup>
          </FormItem>
          <RedText>{roundValues?.assessmentTypeError}</RedText>
        </div>
      ) : null}

      <div>
        <TextAreas
          placeholder="E.g.  There is no negative marking."
          label="Round description *"
          onChange={({ target }) =>
            handleOnChange(target.value, 'roundDescription')
          }
          value={roundValues?.roundDescription}
          status={roundValues?.roundDescriptionError && 'error'}
          marginbottom="0"
        />
        <RedText>{roundValues?.roundDescriptionError}</RedText>
      </div>

      <Button.Secondary
        text="Add Round"
        width="100%"
        icon={<PlusIcon color="#3249D7" />}
        type="dashed"
        onClick={handleSubmit}
        disabled={loading}
      />
    </>
  )
}

export default EvaluationForm
