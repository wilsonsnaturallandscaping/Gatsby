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
            <h2>Combat Water Erosion: Protect Your Landscape and Investment</h2>
<p>Water erosion isn't just an inconvenience; it's a silent threat to the beauty and integrity of your property. From the nuisance of a small puddle to the peril of a steadily eroding landscape, water erosion is an issue that demands immediate attention. Left unchecked, it can escalate into costly repairs, dying vegetation, and even the risk of flooding.</p>

<p><strong>The Root Cause: Understanding the Impact of Improper Grading.</strong> At the heart of many water erosion problems lies improper grading. Often overlooked during construction, the correct slope is crucial for guiding water safely away to designated drainage areas. A minor change in elevation can be the deciding factor between a thriving, vibrant yard and a waterlogged wasteland.</p>

<p><strong>Our Solution: Expertise in Elevation and Drainage.</strong> Our approach to combating water erosion is twofold: precision and prevention. We meticulously analyze your landscape to identify the root causes of water mismanagement. By adjusting the grading and implementing strategic drainage solutions, we transform your yard into a resilient, flourishing oasis. Our expertise ensures that water flows where it should, safeguarding your property and enhancing the health of your plants.</p>

<p><strong>Invest in Your Landscape's Future.</strong> Don't let water erosion wash away your peace of mind and investment. With our specialized knowledge and commitment to sustainable, effective solutions, we're here to secure the longevity and beauty of your landscape. Protect your property from the hidden dangers of water erosion and enjoy a lush, thriving garden year-round.</p>

    </div>  
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
        <StaticImage
          src="../assets/drainage/drainage.jpg"
          className="block w-full h-full"
        />
      </div>
    </div>
  </div>
     )
    
  }
} 
