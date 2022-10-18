import React from 'react'

import { SingleCard, CardText, CardValue } from 'components/InfoCards/style'
import { COLORS } from 'theme'

const InfoCards = ({
  background = COLORS.BLUE_T_95,
  padding = '15px 25px',
  width = 'auto',
  icon,
  text,
  value,
  height,
}) => {
  return (
    <SingleCard
      background={background}
      padding={padding}
      width={width}
      column
      flexStart
      height={height}
      spaceBetween
    >
      {icon}
      <div>
        <CardText>{text}</CardText>
        <CardValue>{value}</CardValue>
      </div>
    </SingleCard>
  )
}

export default InfoCards
