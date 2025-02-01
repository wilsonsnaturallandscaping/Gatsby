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
     <p><strong>Experience the Charm of Southern Gardens with Wilson's Natural Landscaping</strong></p>

<p>Wilson's Natural Landscaping, we take pride in designing and installing Southern Gardens that embody the essence of the Charlotte Piedmont area. Our passion is mirrored in the joy our clients experience as they stroll through these enchanting spaces.</p>
<p>Whether you envision a classic Southern Courtyard in a structured backyard or a more free-flowing garden set against a woodland backdrop, we are here to bring your dream to life.</p>

 <p><strong>Crafting Your Personal Southern Oasis</strong></p>

<p>Our expertise lies in creating Southern Gardens that are not just visually stunning but also deeply rooted in the local landscape and culture. We understand the unique charm and elegance of the Southern style and integrate this into every aspect of our designs. From the fragrant blossoms of azaleas and magnolias to the graceful drapes of Spanish moss, each element is chosen to reflect the beauty and spirit of the South.</p>

 <p><strong>Versatile Designs for Every Setting</strong></p>

<p>Whether your space is a well-defined backyard or a natural woodland area, our team is skilled in adapting our designs to fit your unique environment. We specialize in creating gardens that feel both organized and spontaneous, capturing the quintessential Southern balance of order and natural beauty.</p>

<p><strong>Begin Your Journey to Southern Elegance</strong></p>

<p>Embark on a journey to transform your outdoor space into a Southern Garden that resonates with elegance and charm. Contact Wilson's Natural Landscaping today, and let's start crafting a Southern gem that you'll cherish for years to come.</p>

    </div>  
      </div>
      <div
        className={`col-12 col-md-6 col-sm-12 col-lg-6 p-0 flex flex-row items-center`}
      >
        <StaticImage
          src="../assets/gardens/feature-three.jpg"
          className="block w-full h-full"
        />
      </div>
    </div>
  </div>
     )
    
  }
} 
