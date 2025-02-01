import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import StaffCarousel from "../../components/StaffCarousel"
import Layout from "../../components/layout"


const AboutPage = () => (

    
    <Layout>
<section class="py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 order-md-0">
        <h1 class="font-semibold text-3xl leading-tight font-display">Work with us</h1>
        <div class="py-4 text-gray-700">
          <p>When you choose Wilson&apos;s Natural Landscaping, LLC, you&apos;re not just getting a landscaping service; you&apos;re partnering with a team that values your vision. We begin by understanding the style of landscape and features you desire. Then, our experts meticulously design a custom landscape that aligns with your preferences and our eco-friendly philosophy.</p>
        <h2 class="font-semibold text-3xl leading-tight font-display">Our Team</h2>
          <p>At Wilson&apos;s Natural Landscaping, LLC, our strength lies in our team – a dedicated group of plant professionals who are not just experts in their field but are also passionate about creating landscapes that are in harmony with nature. Our commitment to ecological correctness, low maintenance, and sustainability is at the core of everything we do.</p>
        </div>
      </div>
      <div class="col-md-6 order-md-1 mb-4 md:ml-12">
   <StaticImage
            src="../../assets/about/about-team.jpg"
            alt="Wilsons Team Image"
            className="aboutTeam"
            loading="eager"
    width={1366}
    height={966}
placeholder="blurred"
      layout="constrained"
          />
      </div>
    </div>
  </div>
</section>
<StaffCarousel />
    </Layout>
  
  )
export default AboutPage

export const Head = () => (
  <>
  <html lang="en" />
    <title>About Us - Wilson's Natural Landscaping</title>
    <meta name="description" content="At Wilson&apos;s Natural Landscaping, LLC, our design journey begins with a personal, on-site consultation at your property. " />
  </>
)
