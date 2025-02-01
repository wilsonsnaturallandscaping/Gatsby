import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
import {primary} from '../../helpers/colors.js'



export default class CallToAction extends React.Component {
  

 
  render() {


    const CTAContainer = styled.div`
        background: #2980B9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #82d8f6, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #82d8f6, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        margin-top:0px;
        padding:3em 0;
    `;
    const CTAHeading = styled.h1`
        color:${this.props.color === "vibrant" ?  '#fff' : primary};
        @media (max-width: 767px) {
            text-align:center;
        }
        `

    const CTADesc = styled.p`
     color:${this.props.color === "vibrant" ?  '#fff' : '#444'};
     @media (max-width: 767px) {
        text-align:center;
    }
    `

    const CTAButtonContainer = styled.div`
        
    `
   

    return (
        <CTAContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                        <CTAHeading>{this.props.ctaHeading ? this.props.ctaHeading : 'Request a FREE Quote!'}</CTAHeading>
                            <CTADesc>{this.props.ctaSubHeading ? this.props.ctaSubHeading : 'Call us to learn more about our residential and commercial masonry services.'}</CTADesc>
                        </div>
                        <div className="col-xs-12 col-md-6" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CTAButtonContainer>
                            <Link to="/contact"><button className="btn-lg" aria-label="Get a Quote Button" color={this.props.color === "vibrant" ? "white" : "danger"}>{this.props.ctaBtnText ? this.props.ctaBtnText : 'Get a Quote'}</button></Link>
                        </CTAButtonContainer>
                        </div>
                    </div>
           
            </div>
      </CTAContainer>
   
    )
    
  }
} 
