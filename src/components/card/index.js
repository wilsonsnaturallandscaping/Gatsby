import React from 'react'
import styled from "styled-components"; 
import {primary} from '../../helpers/colors.js'


export default class CustomCard extends React.Component {
  
 
  render() {
    let bgcolor;
    let bodycolor;
    let textcolor;


    if(this.props.style === "success"){
      bgcolor = "#006747";
      bodycolor = "#29a33f0d"
      textcolor = "#fff"
    }
    if(this.props.style === "vibrant"){
      bgcolor = primary
      bodycolor = "#fff"
      textcolor = "#fff"
    }

     
      const CardContainer = styled.div`
         margin-bottom:1.25em;
    
         
         @media(max-width:767px){
          margin-top:1.25em;
         }
      `;
      const CardHeader = styled.h3`
         margin:0;

      `;
    
      const CardHeaderContainer = styled.div`
      background: ${bgcolor ? bgcolor : '#f7f7f7'};
      color: ${textcolor ? textcolor : ''};
      padding: 1em;
      margin: 0;
      border-radius: .25em .25em 0 0;
      `
      const CardBodyBG = styled.div`
        background: ${bodycolor ? bodycolor : ''};
  

      `
     

    return (
      <CardContainer>
       <div className="card">
       {this.props.title ?  <CardHeaderContainer>
           <CardHeader>{this.props.title}</CardHeader>
           
        </CardHeaderContainer> : null} 
        <CardBodyBG>
           <div className="card-body">
            {/* {this.props.subtitle ? <Subtitle>{this.props.subtitle}</Subtitle> : null} */}
               {this.props.children}
           </div>
           </CardBodyBG>
       </div>
      </CardContainer>
    )
    
  }
} 
