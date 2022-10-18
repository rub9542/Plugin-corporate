import React from 'react'

//importing styled components
import { Container, From, On } from 'components/RoutePath/style'

//importing Link
import { Link } from 'react-router-dom'

const RoutePath = ({ path, from, on }) => {
  return (
    <Container centerVertically>
      <Link to={path}>
        <From>{from}</From>
      </Link>
      <On>/</On>
      <On>{on}</On>
    </Container>
  )
}

export default RoutePath
