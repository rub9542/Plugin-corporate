/* eslint-disable */
import React from 'react'
import SidebarPage from 'components/SidebarPage'
import Flex from 'components/Flex'
import styled from 'styled-components'
import Nav from 'modules/Nav/Container/index'
import Header from 'modules/Page/Components/Partials/Header'
import { COLORS } from 'theme'

const BREAKPOINT = '999px'

const ContentWrapper = styled(Flex)`
  overflow-y: auto;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0px 4px 12px rgba(153, 153, 153, 0.35);
  border: 1px solid ${COLORS.PAGE_BORDER};
  &::-webkit-scrollbar {
    display: none;
  }
`
const PageWrapper = styled(Flex)`
  background: '#FFFFFF';
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  flex-grow: 1;
  @media screen and (max-width: ${BREAKPOINT}) {
    padding: 0px;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Flex>
        <Nav />
        <SidebarPage>
          <ContentWrapper>{children}</ContentWrapper>
        </SidebarPage>
      </Flex>
    </PageWrapper>
  )
}
export default Page
