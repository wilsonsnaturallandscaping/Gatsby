import React from 'react'
import styled from 'styled-components'
import { Star } from 'react-feather'

const HeroRating = styled.div`
  color: white;
  margin-top: 20px;
  font-weight: 500;
`

const HeroRatingStar = styled.div`
  svg {
    fill: #ffbc00;
    stroke: none;
  }
  margin-bottom:20px;
`

class HeroRatingStars extends React.Component {
  render() {
    return (
      <HeroRating>
        <HeroRatingStar>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </HeroRatingStar>
      </HeroRating>
    )
  }
}

export default HeroRatingStars
