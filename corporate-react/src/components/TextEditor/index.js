/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'
import Flex from 'components/Flex'
import styled from 'styled-components'
import Label from 'components/Form/Label'

export const WrapperText = styled.div`
  .jodit-container:not(.jodit_inline) {
    border-radius: 8px !important;
    margin-top: 15px !important;
  }

  .jodit-toolbar__box:not(:empty) {
    border-radius: 8px 8px 0px 0px !important;
  }

  .jodit-wysiwyg {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .jodit-add-new-line {
    display: none !important;
  }
`

const TextEditor = ({
  value,
  autofocus = false,
  isReadOnly = false,
  onChange,
  buttons = [
    'bold',
    'italic',
    'underline',
    '|',
    'ul',
    `ol`,
    '|',
    'fontsize',
    'brush',
  ],
  labelName = 'Job description *',
  placeholder = 'Enter job description here...',
  icon = false,
}) => {
  const editor = useRef(null)

  const config = {
    readOnly: isReadOnly,
    autofocus: autofocus,
    useSearch: false,
    spellcheck: false,
    enter: 'P',
    defaultMode: '1',
    toolbarAdaptive: false,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    minHeight: 200,
    maxHeight: 500,
    minWidth: null,
    uploader: {
      insertImageAsBase64URI: true,
    },
    buttons: buttons,
    editorCssClass: false,
    toolbarButtonSize: 'middle',
    placeholder: placeholder,
    colorPickerDefaultTab: 'text',
  }

  return (
    <div>
      <Flex centerVertically>
        <Label>{labelName}</Label>
        {icon && <span style={{ paddingLeft: 5 }}>{icon}</span>}
      </Flex>
      <WrapperText>
        <JoditEditor
          ref={editor}
          value={value}
          config={config}
          tabIndex={1}
          onBlur={onChange}
        />
      </WrapperText>
    </div>
  )
}

export default TextEditor
