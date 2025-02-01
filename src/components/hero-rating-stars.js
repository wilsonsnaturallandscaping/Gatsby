import React from 'react'
import styled from 'styled-components'
import { Star } from 'react-feather'

const HeroRating = styled.div`
  color: white;
  margin-top: 40px;

  font-weight: 600;
  @media (max-width: 767px) {
    text-align: center;
    margin-top: 20px;
  }
`

const HeroRatingStar = styled.div`
  svg {
    fill: #ffbc00;
    stroke: none;
  }
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
        <span
          itemScope
          className="rating-desc"
          itemType="https://schema.org/Product"
        >
          <span itemProp="name">Wilson&apos;s Natural Landscaping</span>{' '}
          <span
            itemScope
            itemProp="aggregateRating"
            itemType="https://schema.org/AggregateRating"
          >
            rated <span itemProp="ratingValue">4.7</span>/5 <br />
            based on <span itemProp="reviewCount">
        83 Google & Facebook
            </span>{' '}
            reviews.{' '}
          </span>
        </span>
      </HeroRating>
    )
  }
}

export default HeroRatingStars
