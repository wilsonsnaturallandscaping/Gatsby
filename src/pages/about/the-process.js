import React from 'react';
import Layout from "../../components/layout";
import HeroArea from "../../components/hero-process";
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ChevronRight from 'react-feather/dist/icons/chevron-right'
import CustomCard from "../../components/card/ContactCard"
import QuoteForm from "../../components/ContactForm";
import styled from "styled-components"; 


const ContentContainer = styled.div`
          padding: 2em 0;
          @media(max-width:767px){
            padding: .5em 0;
          }
        `
        const HeroText = styled.div`
      
        padding-bottom:1em;
        margin-bottom:1em;
        border-bottom:1px solid #f1f1f1;
    `;

const ProcessPage = () => (
  
  <Layout>
 
      <HeroArea />


<section class="process-list white-bg page-section-pt">
  <div class="container">
    <div class="row ">
      <div class="col-sm-12">
       <div class="process left">
           <div class="process-step">
            <strong>01</strong>
           </div>
           <div class="process-content">
            <div class="process-icon">
              <span class="flaticon-line"></span>
            </div>
            <div class="process-info">
              <h5 class="mb-20"> Personalized on Site Consultation</h5>
               <p>At Wilson&apos;s Natural Landscaping, LLC, our design journey begins with a personal, on-site consultation at your property. Our experts will meet with you to thoroughly understand your landscaping vision and objectives. During this visit, we&apos;ll conduct a detailed assessment of your site, discussing your goals to ensure we capture the essence of your dream landscape. To inspire and inform you, we&apos;ll showcase a portfolio of our previous projects, complete with drawings that illustrate the breadth of our craftsmanship. For an even closer look at the quality we deliver, we&apos;re happy to provide references and locations of our finished projects, inviting you to experience firsthand the beauty and detail of our work.</p>
            </div>
           </div>
           <div class="border-area left-bottom"></div>
         </div>
       <div class="process right">
           <div class="process-step">
             <strong>02</strong>
           </div>
           <div class="process-content text-end">
             <div class="process-icon">
              <span class="flaticon-technology-1"></span>
             </div>
             <div class="process-info">
              <h5 class="mb-20"> Real Time Customization</h5>
               <p>Following our initial consultation, Wilson&apos;s Natural Landscaping, LLC will craft a detailed landscape design proposal, presented to you via our advanced tablet technology. Utilizing photos taken during our site visit, we leverage cutting-edge software to make real-time adjustments, ensuring the design aligns perfectly with your garden&apos;s unique requirements and your desired services. This interactive approach allows you to visualize and tailor your landscape design instantly. Upon your approval of the proposal, we will proceed with bringing your personalized landscape vision to life, combining our expertise with your unique preferences.</p>
             </div>
           </div>
             <div class="border-area right-top"></div>
             <div class="border-area right-bottom"></div>
         </div>
         <div class="process left">
           <div class="process-step">
             <strong>03</strong>
           </div>
           <div class="process-content">
               <div class="process-icon">
                <span class="flaticon-computer"></span>
               </div>
               <div class="process-info">
                <h5 class="mb-20"> Formalizing the Agreement</h5>
                 <p>After finalizing the design details and reaching an agreement, we&apos;ll proceed to formalize our partnership through a comprehensive contract. This step ensures a clear understanding and alignment of expectations between both parties. Once the contract is executed, our dedicated front desk staff at Wilson&apos;s Natural Landscaping, LLC will schedule your project, setting the stage for the transformation of your landscape. Our commitment to professionalism and clear communication is reflected in every phase, ensuring a smooth and efficient process from start to finish.</p>
               </div>
             </div>
             <div class="border-area left-bottom"></div>
             <div class="border-area left-top"></div>
         </div>

       <div class="process right">
           <div class="process-step">
             <strong>04</strong>
           </div>
           <div class="process-content text-end">
             <div class="process-icon">
              <span class="flaticon-stopwatch-tool-to-control-test-time"></span>
             </div>
           <div class="process-info">
              <h5 class="mb-20"> Exceptional Execution</h5>
               <p>As we embark on the actual landscaping work, our skilled crews at Wilson&apos;s Natural Landscaping, LLC bring a meticulous attention to detail to every phase of the job. With a dedicated foreman present on-site, we ensure that each aspect of your project is executed with the highest standards of craftsmanship. Our team&apos;s passion for excellence is evident in the stunning beauty and enduring quality of your completed landscape. </p>
             </div>
           </div>
            <div class="border-area right-top"></div>
           <div class="border-area right-bottom"></div>
         </div>
</div>
     </div>
    </div>
    <div className="container pt-0">
          <div className="row">
            <div className="col-12">
  <CustomCard title={'Ready to transform your outdoor space?'} bgcolor={'success'}>
    <HeroText>
    <p>Start your journey with us by filling out the form below, or calling us at <strong>(704)888-4635</strong>. Let&apos;s create a landscape that reflects your vision and our commitment to natural beauty and quality.</p>
               </HeroText>
               <QuoteForm/></CustomCard>
    </div>
    </div>
    </div>
  </section>



  </Layout>
)

export default ProcessPage



export const Head = () => (
  <>
  <html lang="en" />
    <title>Our Process</title>
    <meta name="description" content="At Wilson's, we have developed a seamless process that takes the complexity out of landscaping so you can enjoy the journey as much as the result. " />
  </>
)

