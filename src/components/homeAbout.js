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
        <div className="p-2 p-sm-2 p-md=3 p-lg-5 mt-3 mt-lg-5">
      <h2>About Us</h2> 
<p className="pb-2">Founded in 2002 by Chad Wilson, Wilson's Natural Landscaping, LLC is a testament to family-driven passion and local expertise. Our team, a blend of dedicated plant professionals and like-minded local talent, is at the heart of our commitment to ecological sustainability and innovative landscape design. As a family-run business, we pride ourselves on creating harmonious, low-maintenance landscapes that reflect our deep respect for nature and our community.</p>
<Link to="/about">Learn More →</Link>

<h2 className="mt-4">Our Mission</h2>


<p>“Our firm was created based on the concepts of providing the highest quality projects using the best materials and artistic and educated team members. Over the past 23 years we have accomplished this vision and are continuing to grow our approaches to exceed our standards and glorify our clients' properties."
</p>

<h4 className="italic">Chad Wilson</h4>
    </div>  
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
        <StaticImage
          src="../assets/home/home-about.jpg"
          className="block w-full h-full"
        />
      </div>
    </div>
  </div>
     )
    
  }
} 
