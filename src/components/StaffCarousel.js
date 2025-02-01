import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"; 
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
const SubHeading = styled.span`
  margin-bottom: 0.25em;
  font-size: 0.8em;
  line-height: 1;
`

const StaffCarousel = () => {
  return (
            <FeaturedItemsOuterWrapper>
      <ContentContainer className="container">
        <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                  <StaticImage
      src="../assets/about/chad-wilson.jpg"
      alt="Chad Wilson"
      placeholder="blurred"
      layout="fixed"
   style={{ width: '100%', objectFit: 'cover' }}
   height={600}
    />
        <ColumnBody className="brd-clr">
          <span>
            <SubHeading>
            President & Founder
</SubHeading>
            <Heading className="color-dark">
            CHAD WILSON
            </Heading>
            <ShortExcerpt>
            Wilson&apos;s Natural Landscaping, LLC, brings over 45 years of landscape industry experience. His journey began in Lake Floyd, evolving into a passion for designing and installing breathtaking landscapes in Charlotte, NC. Chad&apos;s impressive educational background includes multiple master&apos;s degrees and a deep commitment to integrating his knowledge with his love for nature. As a basketball coach and certified Mental Game Coaching Professional, Chad applies his expertise to nurture young athletes, paralleling his dedication to creating sustainable, beautiful landscapes.    
                </ShortExcerpt>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
              <StaticImage
      src="../assets/about/mike.jpg"
      alt="Mike"
      placeholder="blurred"
      layout="fixed"
   style={{ width: '100%', objectFit: 'cover' }}
   height={600}
    />
        <ColumnBody className="brd-clr">
          <span>
           <SubHeading>
Lead Project Manager
    </SubHeading>
            <Heading className="color-dark">
            MIKE
            </Heading>
            <ShortExcerpt>
           Mike, our lead project manager with nearly two decades at our firm, is known for his exceptional talent in landscape design and construction. His commitment as a family man extends to his clients, whom he treats with the same care and dedication.
                </ShortExcerpt>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
    <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                <StaticImage
      src="../assets/about/jose.jpg"
      alt="Jose"
      placeholder="blurred"
      layout="fixed"
   style={{ width: '100%', objectFit: 'cover' }}
   height={600}
    />
        <ColumnBody className="brd-clr">
          <span>
            <SubHeading>&nbsp;
    </SubHeading>
            <Heading className="color-dark">
            JOSE
            </Heading>
            <ShortExcerpt>
           Jose, a valued team member for over seven years, is celebrated for his outstanding work ethic and dedication to client satisfaction. His ability to handle diverse landscaping tasks with precision makes him an indispensable part of our team. 
                </ShortExcerpt>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
 
        </ContentRow>
</ContentContainer>
   <ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
                  <StaticImage
      src="../assets/about/will.jpg"
      alt="WILL HILL"
      placeholder="blurred"
      layout="fixed"
   style={{ width: '100%', objectFit: 'cover' }}
   height={600}
    />
        <ColumnBody className="brd-clr">
          <span>
            <SubHeading>
          &nbsp;
</SubHeading>
            <Heading className="color-dark">
           WILL HILL
            </Heading>
            <ShortExcerpt>
           Will, the glue that holds our team together, has been with us for over three years. His multifaceted talents and commitment to excellence make him the go-to person for high-level tasks, ensuring client satisfaction and company success.
                </ShortExcerpt>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
              <StaticImage
      src="../assets/about/sherry.jpg"
      alt="Sherry"
      placeholder="blurred"
      layout="fixed"
   style={{ width: '100%', objectFit: 'cover' }}
   height={600}
    />
        <ColumnBody className="brd-clr">
          <span>
           <SubHeading>
Operations Manager
    </SubHeading>
            <Heading className="color-dark">
            SHERRY BRUNK
            </Heading>
            <ShortExcerpt>
         Sherry, at the core of our operations for four years, excels in supporting our clients and team. Known for her fantastic organizational skills and family-oriented nature, she is a cherished member who contributes significantly to our success.
                </ShortExcerpt>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
 
 
        </ContentRow>
      </ContentContainer>
    </FeaturedItemsOuterWrapper>
 )
}
export default StaffCarousel
