import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"; 
import Button from './button'
import { StaticImage } from "gatsby-plugin-image"


const ContentContainer = styled.div``;
const ContentRow = styled.div``
const FeaturedItemsOuterWrapper = styled.section`
  padding: 40px 0;
`

const OneColumn = styled.div`
  @media (max-width: 992px) {
    margin-bottom: 1em;
  }
  display: flex;
  padding: 0 8px !important;
`
const ColumnInnerContainer = styled.div`
  background: #fff;
`
const ColumnBody = styled.div`
  padding: 1.25em;
`
const Excerpt = styled.p`
  color: #666;
  font-size: 16px;
`

const ShortExcerpt = styled.p`
  color: #666;
  font-size: 16px;
`
const Heading = styled.h2`
  margin-bottom: 0.25em;
  font-size: 1.45em;
  line-height: 1.3;
`

const FeaturedItems = () => {
  return (
            <FeaturedItemsOuterWrapper>
      <ContentContainer className="container">
        <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-3'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                  <StaticImage
      src="../assets/home/gardens.jpg"
      alt="Garden Services"
      placeholder="blurred"
      layout="fixed"
   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      height={200}
    />
        <ColumnBody className="brd-clr">
          <span>
            <Heading className="color-dark">
            GARDENS
            </Heading>
            <ShortExcerpt>We pride ourselves on maximizing Mother Nature&apos;s influence in design. Native plants are an ideal plant choice for many sites, especially since they offer so many ecological benefits.</ShortExcerpt>
          </span>
        <Button className="homebutton" title="learn about" to="/services/gardens">Learn More →</Button>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-3'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                  <StaticImage
      src="../assets/home/drainage.jpg"
      alt="Drainage Services"
      placeholder="blurred"
      layout="constrained"
   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      height={200}
    />
        <ColumnBody className="brd-clr">
          <span>
            <Heading className="color-dark">
            DRAINAGE
            </Heading>
            <ShortExcerpt>Water management is an art, and our pipe installations and trenching are at the heart of this craft. We specialize in transforming excess water into elegant, functional landscape features.</ShortExcerpt>
          </span>
        <Button className="homebutton" title="learn about drainage services" to="/services/drainage">Learn More →</Button>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
    <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-3'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                  <StaticImage
      src="../assets/home/hardscapes.jpg"
      alt="Hardscape Services"
      placeholder="blurred"
      layout="constrained"
   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      height={200}
    />
        <ColumnBody className="brd-clr">
          <span>
            <Heading className="color-dark">
            HARDSCAPES
            </Heading>
            <ShortExcerpt>Hardscaping provides the backbone of your landscape design. We are capable of creating an installing patios, retaining walls, water features and outdoor fire places, and fire pits.</ShortExcerpt>
          </span>
        <Button className="homebutton" title="learn about" to="/services/hardscapes">Learn More →</Button>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
    <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-3'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                  <StaticImage
      src="../assets/home/trees.jpg"
      alt="Garden Services"
      placeholder="blurred"
      layout="constrained"
   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      height={200}
    />
        <ColumnBody className="brd-clr">
          <span>
            <Heading className="color-dark">
            LARGE TREES
            </Heading>
            <ShortExcerpt>We understand the transformative power of large trees. They&apos;re immediate game changers for your landscape, offering stunning focal points and a myriad of design possibilities.</ShortExcerpt>
          </span>
        <Button className="homebutton" title="learn about" to="/services/treesgat">Learn More →</Button>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        </ContentRow>
      </ContentContainer>
    </FeaturedItemsOuterWrapper>
 )
}
export default FeaturedItems
