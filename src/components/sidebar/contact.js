import React from 'react'
import styled from "styled-components"; 

import CustomCard from "../card"

export default class AboutUs extends React.Component {
  
 
  render() {

    
    const SidebarHeader = styled.h2`
     line-height: 1em;
     font-weight: 600;
     font-size:16px;
     `

     const SidebarP = styled.p`
     
      `

    return (
      <div>
       <CustomCard title={"Wilson's Natural Landscaping"}>

        <SidebarHeader>Our Location</SidebarHeader>
<SidebarP>8316 Harvell Rd<br/>Stanfield, NC 28163</SidebarP>
<SidebarHeader>Our Phone</SidebarHeader>
        <SidebarP><a className="contactPhone" href="tel:+17048884635">(704) 888-4635</a></SidebarP>
      
        <SidebarHeader>Monday - Friday</SidebarHeader>
        <SidebarP>7:00am - 4:00pm</SidebarP>
<SidebarHeader>Certified Plant Professionals</SidebarHeader>
<SidebarP>NC Licensed Landscape Contractor #0357<br/>
Energy Saving Landscape Certified<br/>
Certified Drainage Professionals<br/>
NC Licensed Irrigation Contractors</SidebarP>

       </CustomCard>
      </div>
    )
    
  }
} 
