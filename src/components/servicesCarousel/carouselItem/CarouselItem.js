import React from 'react'
import styled from "styled-components"; 
import {Button } from 'reactstrap';
import { Link } from "gatsby"
import Col from 'reactstrap/es/Col';
import Row from 'reactstrap/es/Row';



export default class CarouselItem extends React.Component {
  
  componentDidMount(){
  
  }


  render() {
    let {props} = this;

      const CarouselItemContainer = styled.div`
        color: #ffffff;
        background:#fff;
        box-shadow: 0px 0px 10px 4px rgba(0,0,0,.02);
        border-radius:.25em;
        margin-bottom:1em;
      `;
      const ItemInner = styled.div`
      padding:.75em 1.35em 1.75em 1.35em;
      `
      
      const ItemTitle = styled.h3`
        color: #333;
      `;
      const ItemDesc = styled.p`
       
        color: #666;
        font-size: .95em;
        line-height: 1.45;
        @media(max-width:767px){
        
        }
      `;
      const ItemImg = styled.img`
            margin-bottom:1em;
            object-fit: cover;
            height: 100%;
            width: 100%;
            max-height: 250px;
      `;
      
    return (
      <CarouselItemContainer className="headline">
        <div className="row">
          <div className="col-md-12">
             <ItemImg src={props.img} alt={props.altText}/> 
          </div>
          <div className="col-md-12">
          <ItemInner>
              <ItemTitle>{props.title}</ItemTitle>
              <ItemDesc>{props.desc}</ItemDesc>
              <Link to={props.linkTo}><button ariaLabel="carousel button" className="buttonDanger">{props.buttonText}</button></Link>
              </ItemInner>
          </div>
           </div>
      </CarouselItemContainer>
    )
    
  }
} 
