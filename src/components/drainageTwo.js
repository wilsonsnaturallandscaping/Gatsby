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
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
           <StaticImage
          src="../assets/drainage/pipe-installation.jpg"
          className="block w-full h-full"
        />
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 flex-row items-center p-8 mb-4 sidebarform cardborder`}
      >
    
               <div className="p-2 p-sm-2 p-md=3 p-lg-3 mt-3 mt-lg-5">
<h2>Pipe Installation & Trenching Services</h2>
<p><strong>Transforming Excess Water into Landscape Elegance.</strong> Water management is an art, and our pipe installations and trenching services are at the heart of this craft. We specialize in transforming excess water issues into elegant, functional landscape features. Our process is straightforward yet efficient, focusing on channeling water seamlessly to designated areas.</p>
<p><strong>The Art of Precision: Creating, Laying, and Concealing.</strong> Our approach begins with precision. We meticulously create channels, lay high-quality pipes, and then artfully conceal them within your landscape. This isn't just about drainage; it's about enhancing the beauty of your outdoor space. We offer a variety of finishing options, from charming pathways to river stone beds, each designed to complement and elevate your landscape's aesthetic.</p>

<p><strong>Tailored to Your Vision and Budget.</strong> Every landscape has its unique charm and challenges. Our experts are adept at recommending solutions that align perfectly with both. Whether it's a French drain for subtle efficiency, corrugated solid pipe for durability, or various sized catch basins for optimal water management, we tailor our services to fit your landscape's needs and your budget.</p>

<p><strong>Quality Materials for Lasting Beauty and Functionality.</strong> We believe in the harmony of beauty and functionality. That's why we use only the best materials, ensuring that our drainage solutions are not only effective but also add a touch of elegance to your garden. Our commitment to quality means a functional, effective, and visually appealing finish that stands the test of time.</p>

    </div> 
      </div>
    </div>
  </div>
     )
    
  }
} 
