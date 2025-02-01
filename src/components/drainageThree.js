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
        <h2>Dry Basins, Flumes, and Rain Gardens</h2>
<p><strong>Tailored Elegance in Water Management.</strong> Every landscape tells a different story, and our water-transport designs are the perfect narrative for yours. We understand that the shape and size of water management solutions should be as unique as your property. That's why we specialize in customizing large basins and flumes, meticulously measured and crafted to meet your specific needs.</p>

<p><strong>Precision Meets Beauty: Basins and Flumes.</strong> Our team's expertise lies in creating water-transport solutions that are not just functional but also visually striking. We carefully measure and dig each basin and flume, ensuring they not only enhance the effectiveness of our work but also add an element of sophistication to your landscape.</p>

<p><strong>Aesthetic Integration: Functional Additives with Style.</strong> We believe that functionality should never compromise beauty. Our designs are thoughtfully integrated into your landscape, keeping aesthetics at the forefront. Our goal is to transform your previously unusable areas into stunning features that capture attention and admiration.</p>

<p><strong>From Unusable to Unforgettable.</strong> Imagine turning the overlooked corners of your property into breathtaking highlights. Our water-transport designs do just that. We're not just managing water; we're creating art. Let us help you turn functional necessities into beautiful assets that elevate the charm and value of your landscape.</p>

<p><strong>Impress with Every Detail.</strong> Choose a solution that makes a statement. Our water-transport designs are more than just practical; they're a testament to your taste and our commitment to excellence. Let's work together to create something truly impressive, turning every challenge into an opportunity to beautify and enhance your outdoor space.</p>

    </div>  
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
        <StaticImage
          src="../assets/drainage/drainage-garden.jpg"
          className="block w-full h-full"
        />
      </div>
    </div>
  </div>
     )
    
  }
} 
