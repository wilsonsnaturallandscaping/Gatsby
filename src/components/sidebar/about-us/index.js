import React from 'react'
import styled from "styled-components"; 

import CustomCard from "../../card"

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
       <CustomCard title={'CityWide Plumbing & Power'}>
      
        
        <SidebarHeader>Victoria</SidebarHeader>
        <SidebarP>(250)475-1950</SidebarP>

        <SidebarHeader>Nanaimo</SidebarHeader>
        <SidebarP>(250)741-9844</SidebarP>

        <SidebarHeader>Parksville</SidebarHeader>
        <SidebarP>(250)468-2798</SidebarP>
      
        <SidebarHeader>Qualicum Beach</SidebarHeader>
        <SidebarP>(250)752-1852</SidebarP>
      
        <SidebarHeader>Comox Valley</SidebarHeader>
        <SidebarP>(250)336-8661</SidebarP>
       </CustomCard>
      </div>
    )
    
  }
} 
