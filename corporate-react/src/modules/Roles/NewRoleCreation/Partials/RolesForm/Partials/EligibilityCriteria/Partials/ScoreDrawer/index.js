import React, { useState } from 'react'
import Drawer from 'components/Drawer'
import RangeSliderInput from 'components/RangeSliderInput'
import Label from 'components/Form/Label'
import Flex from 'components/Flex'
import styled from 'styled-components'
import Button from 'components/Button'
import { Form } from 'antd'

const FlexWrap = styled(Flex)`
  gap: 30px;
`

const ScoreDrawer = ({
  openScoreDrawer,
  setOpenScoreDrawer,
  setMarksValue,
}) => {
  const [tenthValue, setTenthValue] = useState(0)
  const [twelfthValue, setTwelfthValue] = useState(0)
  const [ugMarksValue, setUgMarksValue] = useState(0)
  const [pgMarksValue, setPgMarksValue] = useState(0)

  const [marksForm] = Form.useForm()

  const onSubmitFormData = data => {
    setMarksValue({
      tenthValue: data?.scoreDrawer?.tenthScore,
      twelfthValue: data?.scoreDrawer?.twelfthScore,
      ugMarksValue: data?.scoreDrawer?.UGScore,
      pgMarksValue: data?.scoreDrawer?.PGMarks,
    })
    setOpenScoreDrawer(false)
  }
  const content = () => {
    return (
      <Form
        scrollToFirstError
        onFinish={onSubmitFormData}
        id={'marksForm'}
        form={marksForm}
        layout="vertical"
      >
        <FlexWrap column>
          <div>
            <Label>10th Mark</Label>
            <RangeSliderInput
              inputValue={tenthValue}
              setInputValue={setTenthValue}
              defaultValue={tenthValue}
              sliderName={['scoreDrawer', 'tenthScore']}
              inputName={['scoreDrawer', 'tenthScore']}
              sliderrules={[
                {
                  required: true,
                  message: 'required',
                },
                {
                  pattern: new RegExp(/^[1-9]$|^[1-9][0-9]$|^(100)$/),
                  message: 'not valid',
                },
              ]}
            />
          </div>

          <div>
            <Label>12 or Equivalent Mark</Label>
            <RangeSliderInput
              inputValue={twelfthValue}
              setInputValue={setTwelfthValue}
              defaultValue={twelfthValue}
              sliderName={['scoreDrawer', 'twelfthScore']}
              inputName={['scoreDrawer', 'twelfthScore']}
              sliderrules={[
                {
                  required: true,
                  message: 'required',
                },
              ]}
            />
          </div>

          <div>
            <Label>UG Marks</Label>
            <RangeSliderInput
              inputValue={ugMarksValue}
              setInputValue={setUgMarksValue}
              defaultValue={ugMarksValue}
              sliderName={['scoreDrawer', 'UGScore']}
              inputName={['scoreDrawer', 'UGScore']}
              sliderrules={[
                {
                  required: true,
                  message: 'required',
                },
              ]}
            />
          </div>

          <div>
            <Label>PG Marks</Label>
            <RangeSliderInput
              inputValue={pgMarksValue}
              setInputValue={setPgMarksValue}
              defaultValue={pgMarksValue}
              sliderName={['scoreDrawer', 'PGMarks']}
              inputName={['scoreDrawer', 'PGMarks']}
              sliderrules={[
                {
                  required: true,
                  message: 'required',
                },
              ]}
            />
          </div>
        </FlexWrap>
      </Form>
    )
  }
  const footer = () => {
    return (
      <FlexWrap right>
        <Button.Secondary
          text="Close"
          onClick={() => {
            setOpenScoreDrawer(false)
          }}
        />
        <Button.Primary htmlType="submit" form="marksForm" text={'Confirm'} />
      </FlexWrap>
    )
  }

  return (
    <>
      <Drawer
        width="30%"
        title={'Config Custom Score'}
        placement="right"
        closable={true}
        onClose={() => setOpenScoreDrawer(false)}
        visible={openScoreDrawer}
        content={content()}
        footer={footer()}
      />
    </>
  )
}

export default ScoreDrawer
