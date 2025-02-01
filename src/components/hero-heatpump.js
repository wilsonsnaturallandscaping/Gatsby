import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import CardGeneral from './card-general'

import ImgPlumbing from "../components/images/home/HeroHeatPump";

const ServiceHero = ({
  pageData,
  heroImage,
  serviceTitle,
  excerpt,
  specialOffer,
  offerDisclaimer,
  pageProps,
  badges,
}) => {
  
      const ContentContainer = styled.div``

  const ContentRow = styled.div``

  const ContentCol = styled.div`
    padding-top: 130px;
    padding-bottom: 60px;
    padding-right: 45px;
    color: #fff;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    font-size:1.2em;
    @media (max-width: 767px) {
      text-align: center;
      padding-top: 50px;
      padding-bottom: 0px
    }
  `

  const HeroSection = styled.section`
    height: auto;
    background-size: cover;
    border-bottom: 5px solid;
    position: relative;

    .gatsby-image-wrapper {
      &:before {
        content: '';
        position: absolute;
        height: 104%;
        width: 100%;
        background: #000;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0.5;
      }
    }
 @media (max-width: 767px) {
min-height:400px;
    }
  `
  const HeroHeading = styled.h1`
    position: relative;
margin-bottom:1em;
 @media (max-width: 767px) {
 font-size:1.5em;
    }
  `

  const FormWrapper = styled.div`
    margin-top: 2em;
    @media (max-width: 767px) {
    display:none;
    }
  `


  const FormHeading = styled.h3`
    padding-bottom: 0px;
    margin-bottom: 5px;
  `

  const BadgeItemsContainer = styled.div`
    margin-top: 20px;
    align-items: center;
    flex-wrap: nowrap;
  `

  const BadgeItem = styled.div`
    flex: 0 0 25%;
    overflow: hidden;
    max-width: 110px;
    padding: 0.5em 0.75em;
    &:last-child {
      padding-right: 0;
    }
  `

  

  return (
    <>
      <HeroSection className={'hero-Stacked border-color-primary service-hero'}>
        <ImgPlumbing className="heroAreaImg"/>
        <ContentContainer className="container">
          <ContentRow className="row">
            <ContentCol className="col-lg-6 col-md-6">
              <HeroHeading className="before:background-secondary">
     Ductless Heat Pumps
              </HeroHeading>
       <p className="heroText">Ductless heat pumps are known for their flexibility and the ability to heat or cool individual rooms in your home rather than the entire home.</p>
             
            </ContentCol>
            <div className="col-lg-2 d-none d-lg-block" />
            <FormWrapper className="col-lg-4 col-md-6">
              <CardGeneral>
               
                <FormHeading>
Have Questions?                </FormHeading>
<p className="quotetext">Leave the details and upload a couple of photos. We can give you an idea of what needs to be done to rectify the problem along with a price guideline. A site visit can be arranged if needed.</p>
                <ContactForm
                  style={'minimal-hero'}
                  showPlaceHolders={true}
                  showLabels={false}
                  pageTitle='plumning'
                  pageProps={pageProps}
                  pageLocation='plumbing'
                />
              </CardGeneral>
            </FormWrapper>
          </ContentRow>
        </ContentContainer>
      </HeroSection>
   
    </>
  )
}

export default ServiceHero
