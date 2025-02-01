import React from 'react';
import Layout from "../components/layout";
import HeroArea from "../components/hero-area";
import ServicesCarousel from "../components/ServiceCarousel";
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ChevronRight from 'react-feather/dist/icons/chevron-right'
import BeforeAfter from '../components/before-after-image';
import CallToAction from '../components/cta';
import HomeAbout from '../components/homeAbout';
import Button from '../components/button'
import BlogHome from '../components/blogHome'
import Video from "../components/video"

const IndexPage = ({ data }) => (
  
  <Layout>
 
      <HeroArea />


 <ServicesCarousel />
   
  
<div className="container main-content">
<div className="row">
<div className="col-sm-12 homeCallout">
   
     <h2>Charlotte&apos;s #1 Choice for Landscaping, Drainage, Native Gardens, and Hardscapes</h2>
                 <p>Wilson&apos;s Natural Landscaping is a testament to family-driven passion and local expertise. Our team, a blend of dedicated plant professionals and like-minded local talent, is at the heart of our commitment to ecological sustainability and innovative landscape design. As a family-run business, we pride ourselves on creating harmonious, low-maintenance landscapes that reflect our deep respect for nature and our community.</p>

</div>
    </div>
  
    </div>
  <div className="container ">
<div className="row">
<div className="col-12 col-md-6 pt-3 mb-5">  
  <div class="youtube-container">
   <Video
        videoSrcURL="https://www.youtube.com/embed/A3jE7Q2PXZQ"
        videoTitle="Wilson's Natural Landscaping"
      />
  </div>
  </div>
  <div className="col-12 col-md-6 pt-3 mb-5">
  <div class="youtube-container">
   <Video
        videoSrcURL="https://www.youtube.com/embed/awcydy37PJw"
        videoTitle="Wilson's Natural Landscaping"
      />
  </div>
  </div>
  </div>
  </div>
  <HomeAbout />
  
      
  <div className="container main-content homeCallout">
        <div className="row">
          <div className="col-12">
          <h2 className="mt-5">How We Work</h2>
<p>Our dedicated team of professionals, deeply rooted in family values and local expertise, meticulously crafts sustainable, low-maintenance landscapes that harmonize with nature, reflecting our unwavering commitment to ecological integrity and aesthetic excellence.</p>

     <Link to="/" className="underlineLink">
     Learn about our process →
       </Link>
</div>
</div>

  </div>
   <div className="beforeaftersection">
          <div className="container main-content flex flex-wrap justify-center">
    <div className="row">
            <div className="flex flex-col justify-center col-lg-5 col-xs-12 pr-lg-4 w-full lg:items-start">
              <p className="font-semibold m-0 p-0">
                Before &amp; After
              </p>
              <h2 className="my-2 font-bold text-2xl">
                Breathe new life into your yard!
              </h2>
              <p className="text-gray-600">Let our expert landscaping team transform your yard into your own personal outdoor oasis. Imagine lush, healthy lawns, beautifully designed gardens, and functional spaces perfect for relaxing or entertaining. From creative hardscaping solutions to vibrant plant selections, we’ll help you bring your vision to life and create an outdoor space that feels as good as it looks.</p>
        <Button className="homebutton" title="project gallery" to="/">See more transformations →</Button>
            </div>

            <div className="col-lg-7 col-xs-12 pl-lg-6 w-full">
              <div className="flex items-center mt-4 mt-lg-0 flex-wrap">
                    <BeforeAfter
   leftImageLabel="Before"
                      rightImageLabel="After"
                    />
            
              </div>
              <p className="text-gray-500 text-center pt-2 italic text-sm">
                Drag the arrows to see the before &amp; after transformation!
              </p>
            </div>
    </div>
          </div>
      </div>
<BlogHome />z


  </Layout>
)

export default IndexPage



export const Head = () => (
  <>
  <html lang="en" />
    <title>Wilson's Natural Landscaping: Expert Native Gardens</title>
    <meta name="description" content="Transform your outdoor space with sustainable designs, native plants, and expert hardscaping. Explore stunning southern courtyard ideas and more." />
  </>
)

