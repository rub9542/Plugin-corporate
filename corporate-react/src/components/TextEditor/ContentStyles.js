import styled from 'styled-components'
import { COLORS } from 'theme'

export const EditorContent = styled.span`
  padding: 20px 0;
  * {
    line-height: 188%;
    color: #808697 !important;
  }
  p,
  ul,
  ol {
    margin-bottom: 10px;
  }

  li {
    line-height: 25px;
  }
  /* ul li::before {
    content: '•';
    color: ${COLORS.GREY_T_50_2};
    font-weight: bold;
    display: inline-block;
    width: 1em;
  } */
`
