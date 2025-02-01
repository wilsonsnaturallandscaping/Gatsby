import React from 'react'
import Helmet from 'react-helmet'
import HeroArea from "../../components/hero-service"
import styled from 'styled-components'
import Layout from "../../components/layout"



const MainContentContainer = styled.div`
  h1 {
    margin-bottom: 0.25em;
  }
`


const ServicePage = () => (

      
  
  <Layout>

   
      <HeroArea />
      
<div className="container brand-padding-y">
<div className="row">
<MainContentContainer className="col-sm-12">
    
    <h2 className="mt-5 mb-5"> It doesn’t matter if you need regular plumbing maintenance or an emergency repair, our team of licensed and skilled plumbing specialists will solve the problem at hand, so you can rest easy knowing the job will be completed properly and quickly.</h2>


    
    
</MainContentContainer> 
    </div>
    </div>     
    
  </Layout>
)
export default ServicePage