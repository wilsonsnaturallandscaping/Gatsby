import React from 'react'
import styled from 'styled-components'
import ImportImgAbout from "../components/images/home/HeroAbout";



const HeroAbout = ({ heroContent }) => {


   const ContentContainer = styled.div``

  const ContentRow = styled.div``
  const ContentCol = styled.div`
    padding-top: 130px;
    padding-bottom: 90px;
    color: #fff;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
@media (max-width: 767px) {
     padding-top:30px;
padding-bottom:40px;
    }
  `

  const HeroSection = styled.section`
    height: auto;
    background-size: cover;
    position: relative;
    &:hover {
      .icon-container {
        background: red !important;
      }
    }

    .gatsby-image-wrapper {
      &:before {
        content: '';
        position: absolute;
        height: 104%;
        width: 100%;
        background: linear-gradient(transparent 5%, #000);
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0.75;
      }
    }
  `
  const HeroHeading = styled.h1`
    position: relative;
    margin-bottom: 0.25em;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 3px 10px;
    font-size: calc(1.35vw + 1.5em);
    @media (max-width: 767px) {
      text-align: center;
      font-size:calc(1.25vw + 1em);
    }
  `
  const HeroDescription = styled.div`
font-size:1.2rem;
    @media (max-width: 767px) {
      text-align: center;
font-size:1rem;
    }
  `

  const FeaturedIconsContainer = styled.div`
    margin-top: 25px;
    padding-top: 25px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.25);
    display: flex;
    justify-content: space-between;
 @media (max-width: 767px) {
       margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.25);
    }
  `

  const IconDetails = styled.div`
    border-right: 1px solid hsla(0, 0%, 100%, 0.25);
    padding-right: 15px;
    padding-left: 15px;
    flex-grow: 1;
    flex-basis: 0;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
      padding-right: 0;
    }
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      padding-right: 5px;
      padding-left: 5px;
      flex-wrap: wrap;
      svg {
        display: block;
        margin: 0 auto;
      }
    }
.gatsby-image-wrapper {
      &:before {
        content: '';
        position: absolute;
        height: 104%;
        width: 100%;
        background: none !important;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 1;
      }
    }
a {
margin-left:auto;
margin-right:auto;
}
  `
 
    return (
    <HeroSection className="hero-Stacked" key={1}>
            <ImportImgAbout className="heroAreaImg"/>
              <ContentContainer className="container">
                <ContentRow className="row">
                  <ContentCol className="col-md-9 col-lg-6">
                    <HeroHeading className="feature-extended-image has-animation">
                   About Us
                    </HeroHeading>
                    <HeroDescription>
We are a local family owned & operated plumbing & power company that is proud to service all of Vancouver Island
                    </HeroDescription>

                  
                  </ContentCol>
                </ContentRow>
              </ContentContainer>
            </HeroSection>
    )
  }


export default HeroAbout

