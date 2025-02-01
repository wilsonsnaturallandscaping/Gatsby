import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"


export default class HomeAbout extends React.Component {
  

 
  render() {
       return (
     <div className="container mb-4">
    <div
      className="row rounded-lg m-0 overflow-hidden shadow-lg"
      style={{ background: '#fff' }}
    >
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 flex-row items-center p-8 mb-4 sidebarform cardborder`}
      >
        <div className="p-2 p-sm-2 p-md=3 p-lg-3 mt-3 mt-lg-5">
          <p><strong>Harmony with Nature: Aesthetic Integration.</strong> Our design philosophy centers on harmony with nature. Natural stone blends seamlessly with the colors and contours of your outdoor space, providing an aesthetic that is both authentic and soothing. Unlike artificial materials, natural stone complements the natural environment, enhancing its beauty without overpowering it.</p>

<p><strong>Transforming Spaces with Natural Artistry.</strong> Imagine a landscape where every stone tells a story of timelessness and strength. Our natural stone features are more than just installations; they are pieces of natural artistry that transform your outdoor areas into spaces of serene beauty. Whether it's a rugged boulder that anchors your garden, a gracefully winding stone path, or a patio that invites tranquility, each element is chosen for its unique character and ability to enhance your landscape.</p>
     <h2>Elevating Hardscaping</h2>

<p><strong>Beyond Pavers: A Craft of Natural Beauty.</strong> At Wilson's Natural Landscaping, LLC, hardscaping is an art form. Our skilled stone masons don't just lay pavers; they create masterpieces. With years of experience, our craftsmen use locally-sourced natural stone and quality pavers to bring your landscape's design to life.</p>

<p><strong>The Backbone of Your Landscape.</strong> Hardscaping is the foundation of a stunning garden. We specialize in crafting and installing patios, retaining walls, water features, outdoor fireplaces, and fire pits. Each project is a testament to our commitment to beauty and durability.</p>

<p><strong>Trusted Experience, Local Expertise.</strong> Serving the North Carolina region, we pride ourselves on meticulous attention to detail and professionalism. Our goal is to create a space you'll love for years to come.</p>

    </div>  
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
        <StaticImage
          src="../assets/hardscapes/feature-two.jpg"
          className="block w-full h-full"
        />
      </div>
    </div>
  </div>
     )
    
  }
} 