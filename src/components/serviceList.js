import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Tanks from "../components/images/HotWatertank";
import Repairs from "../components/images/PlumbingRepairs";
import Faucets from "../components/images/Faucets";
import Toilets from "../components/images/Toilets";
import Showers from "../components/images/Showers";
import Button from './button'

export default class ServicesCarousel extends React.Component {
  
 
  render() {

const MainContainerOuter = styled.div`

`

const ListingItemOuterContainer = styled.div`
background:#fff;
overflow:hidden;

margin:2em 0!important;`

const ItemTitle = styled.h3`
margin-bottom:.25em;
`
const ItemExcerpt = styled.p`
margin-bottom:.65em;
color: #666;
`

const ImageContainer =  styled.div``

const BodyContainer =  styled.div`
padding:.75em;
padding-left:1.75em!important;
`




    return (
 
      <MainContainerOuter>
     <ListingItemOuterContainer activeClassName="active" className="row shadow-md border-radius overflow-hidden">
      <ImageContainer className="col-12 col-lg-3">
       <StaticImage
      src="../assets/services/gardens.jpg"
      alt="Garden Services"
      placeholder="blurred"
      layout="constrained"
  style={{'marginLeft': '-15px', 'marginRight' : '-15px', 'height': '100%'}}
      width={740}
    />
     
      </ImageContainer>
       <BodyContainer className="col-12 col-lg-9 brd-clr-bottom">
       <ItemTitle>Gardens</ItemTitle>
      <ItemExcerpt>We've been creating sustainable landscapes that limit the use of valuable natural resources, reduce waste, and prevent pollution for over 25 years. Sustainable gardens aren’t bland and boring, they use ecologically correct plants and placement to create a beautiful and easy to maintain landscape.</ItemExcerpt>   
      <Button to="/services/gardens" color="light" title="Learn more">Learn More</Button>
      </BodyContainer>
    </ListingItemOuterContainer>
      
      <ListingItemOuterContainer activeClassName="active" className="row shadow-md border-radius overflow-hidden">
      <ImageContainer className="col-12 col-lg-3">
       <Repairs style={{'marginLeft': '-15px', 'marginRight' : '-15px', 'height': '100%'}} alt=""/>
      </ImageContainer>
       <BodyContainer className="col-12 col-lg-9 brd-clr-bottom">
       <ItemTitle>Drainage</ItemTitle>
      <ItemExcerpt>Water management is an art, and our pipe installations and trenching services are at the heart of this craft. We specialize in transforming excess water issues into elegant, functional landscape features. Our process is straightforward yet efficient, focusing on channeling water seamlessly to designated areas.</ItemExcerpt>   
      <Button to="/services/drainage" color="light" title="Learn more">Learn More</Button>
      </BodyContainer>
    </ListingItemOuterContainer>
      
      
    <ListingItemOuterContainer activeClassName="active" className="row shadow-md border-radius overflow-hidden">
      <ImageContainer className="col-12 col-lg-3">
       <Faucets style={{'marginLeft': '-15px', 'marginRight' : '-15px', 'height': '100%'}} alt=""/>
      </ImageContainer>
       <BodyContainer className="col-12 col-lg-9 brd-clr-bottom">
       <ItemTitle>Trees</ItemTitle>
      <ItemExcerpt>At Wilson's Natural Landscaping, LLC, we understand the transformative power of large trees. They're not just plants; they're immediate game-changers for your landscape, offering stunning focal points and a myriad of design possibilities. Trees are the ultimate solution for an instant and impressive transformation.</ItemExcerpt>   
      <Button to="/services/trees" color="light" title="Learn more">Learn More</Button>
      </BodyContainer>
    </ListingItemOuterContainer>
      
      
      <ListingItemOuterContainer activeClassName="active" className="row shadow-md border-radius overflow-hidden">
      <ImageContainer className="col-12 col-lg-3">
       <Toilets style={{'marginLeft': '-15px', 'marginRight' : '-15px', 'height': '100%'}} alt=""/>
      </ImageContainer>
       <BodyContainer className="col-12 col-lg-9 brd-clr-bottom">
       <ItemTitle>Hardscapes</ItemTitle>
      <ItemExcerpt>Our skilled stone masons craftsmen have years of experience creating hardscape features using beautiful natural stone that is locally sourced, as well as pavers.  Hardscaping provides the backbone of your landscape design, and we are capable of creating and installing patios, retaining walls, outdoor fireplaces, and fire pits.</ItemExcerpt>   
      <Button to="/services/hardscapes" color="light" title="Learn more">Learn More</Button>
      </BodyContainer>
    </ListingItemOuterContainer>
      
      
      <ListingItemOuterContainer activeClassName="active" className="row shadow-md border-radius overflow-hidden">
      <ImageContainer className="col-12 col-lg-3">
       <Showers style={{'marginLeft': '-15px', 'marginRight' : '-15px', 'height': '100%'}} alt=""/>
      </ImageContainer>
       <BodyContainer className="col-12 col-lg-9 brd-clr-bottom">
       <ItemTitle>Design</ItemTitle>
      <ItemExcerpt>Our skilled stone masons craftsmen have years of experience creating hardscape features using beautiful natural stone that is locally sourced, as well as pavers.  Hardscaping provides the backbone of your landscape design, and we are capable of creating and installing patios, retaining walls, outdoor fireplaces, and fire pits.</ItemExcerpt>   
      <Button to="/services/design" color="light" title="Learn more">Learn More</Button>
      </BodyContainer>
    </ListingItemOuterContainer>

   
      <ListingItemOuterContainer activeClassName="active" className="row shadow-md border-radius overflow-hidden">
      <ImageContainer className="col-12 col-lg-3">
       <Showers style={{'marginLeft': '-15px', 'marginRight' : '-15px', 'height': '100%'}} alt=""/>
      </ImageContainer>
       <BodyContainer className="col-12 col-lg-9 brd-clr-bottom">
       <ItemTitle>Horticulture Maintenance</ItemTitle>
      <ItemExcerpt>At Wilson's Natural Landscaping, LLC, our horticulture management is rooted in over 25 years of experience. Specializing in the transplantation of trees and shrubs, we bring an unmatched level of expertise and care to every project.</ItemExcerpt>   
      <Button to="/services/maintenance" color="light" title="Learn more">Learn More</Button>
      </BodyContainer>
    </ListingItemOuterContainer>
      
      </MainContainerOuter>
    )
    
  }
} 
