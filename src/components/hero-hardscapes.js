import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ChevronLeft from "react-feather/dist/icons/chevron-left";
import ChevronRight from "react-feather/dist/icons/chevron-right";
import { StaticImage } from "gatsby-plugin-image";
import Button from './button'
import HeroRatingStars from './hero-rating-stars'


const ContentContainer = styled.div``;

const ContentRow = styled.div``;
const ContentCol = styled.div`
  padding-top: 130px;
  padding-bottom: 90px;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  @media (max-width: 767px) {
    padding-top: 90px;
  }
`;

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
      content: "";
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
`;
const HeroHeading = styled.h2`
  position: relative;
  line-height: 1.1;
  margin-bottom: 0.25em;
  text-shadow: rgba(0, 0, 0, 0.5) 0px 3px 10px;
  font-size: calc(1.35vw + 1.5em);
  @media (max-width: 767px) {
    text-align: center;
    font-size: calc(1.35vw + 1.6em);
  }
`;
const HeroDescription = styled.div`
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const FeaturedIconsContainer = styled.div`
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.25);
  display: flex;
  justify-content: space-between;
`;

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
  align-items: flex-start;
  svg {
    width: 25px;
  }
  @media (max-width: 576px) {
    padding-right: 5px;
    padding-left: 5px;
    flex-wrap: wrap;
    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;

const IconDetailsDetails = styled.div`
  padding-left: 15px;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-top: 15px;
    text-align: center;
  }

  h4 {
    margin-bottom: 0.15em;
    letter-spacing: 0.2px;
    font-size: 1em;
    font-weight: 600;
  }
  p {
    margin-bottom: 0.05em;
    font-size: 13px;
    letter-spacing: 0.2px;
  }
`;
const SliderContainer = styled.div`
  &:hover {
    .PrevNextArrowsContainer {
      opacity: 1 !important;
    }
  }
  .PrevNextArrowsContainer {
    opacity: 0.1;
    background-color: rgba(204, 204, 204, 0.4);
    &:hover {
      background-color: rgba(204, 204, 204, 0.9);
    }
  }
  &.server-rendered {
    .slick-track {
      left: 0% !important;
    }
  }
`;
const PrevNextArrowsContainer = styled.div`
  position: absolute;
  z-index: 1;
  @media (max-width: 767px) {
    top: calc(50% - 15px);
    height: 30px;
    width: 30px;
    padding: 5px;
  }
  top: calc(50% - 25px);
  height: 50px;
  width: 50px;

  transition: 0.2s ease all;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  &.carousel-icon-right {
    right: 18px;
  }
  &.carousel-icon-left {
    left: 18px;
  }
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <PrevNextArrowsContainer className="icon-container carousel-icon-right PrevNextArrowsContainer" onClick={onClick}>
      <ChevronRight size={26} />
    </PrevNextArrowsContainer>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <PrevNextArrowsContainer className="icon-container carousel-icon-left PrevNextArrowsContainer" onClick={onClick}>
      <ChevronLeft size={26} />
    </PrevNextArrowsContainer>
  );
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  pauseOnHover: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  className: "disable-interaction-on-non-active relative",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const HeroArea = ({ heroContent }) => {
  const isBuildingHTML = typeof window === "undefined";

  return (
    <SliderContainer className={isBuildingHTML ? "server-rendered" : null}>
      <Slider {...settings}>
        <HeroSection className={"hero-Stacked"}>
          <StaticImage
            src="../assets/hardscapes/hardscape-banner.jpg"
            alt="Wilsons Process Banner"
            className="heroAreaImg"
            loading="eager"
placeholder="blurred"
      layout="fullWidth"
          />
          <ContentContainer className="container">
            <ContentRow className="row">
              <ContentCol className="col-md-9 col-lg-6">
                <HeroHeading className="feature-extended-image has-animation">
Hardscapes and Natural Stone Masonry
  </HeroHeading>
                <HeroDescription>
                  <p className="pb-5">With over 25 years of experience, trust us to deliver hardscaping that not only enhances your design but lasts for years.
                  </p>

                
                </HeroDescription>
   <HeroRatingStars />
              </ContentCol>
            </ContentRow>
          </ContentContainer>
        </HeroSection>
      </Slider>
    </SliderContainer>
  );
};

export default HeroArea;
