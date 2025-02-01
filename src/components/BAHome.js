import React from 'react'
import { Link } from "gatsby"
import BeforeAfter from '../components/before-after-image'
import ChimneyBefore from "../assets/beforeafter/chimney-before.jpg"
import ChimneyAfter from "../assets/beforeafter/chimney-after.jpg"
import ConcreteBefore from "../assets/beforeafter/concrete-before.jpg"
import ConcreteAfter from "../assets/beforeafter/concrete-after.jpg"
import ChevronRight from 'react-feather/dist/icons/chevron-right'

export default class HomeBA extends React.Component {
 render() {
      return (
    
 <div className="beforeaftersection">
          <div className="container flex flex-wrap justify-center">
    <div className="row">
            <div className="flex flex-col justify-center col-lg-4 col-xs-12 pr-lg-4 w-full text-center text-md-left lg:items-start">
              <p className="font-semibold m-0 p-0">
                Before &amp; After 
              </p>
              <h2 className="my-2 font-bold text-2xl">
                Breathe new life and beauty into your home!
              </h2>
              <p className="text-gray-600">Let the skilled artisans at Wilsons Landscaping LLC transform your home and amaze you with the end result</p>
                <Link
                  className="btn btn-danger "
                 to="/before-after"
                >
                  <span className="flex items-center justify-center">
                    See More Transformations <ChevronRight />
                  </span>
                </Link>
            </div>

            <div className="col-lg-8 col-xs-12 pl-lg-6 w-full">
              <div className="flex items-center mt-4 mt-lg-0 flex-wrap">
                <div className="col-md-6 col-xs-12 px-md-2 w-full">
                    <BeforeAfter
                      leftImage={ChimneyBefore}
                      leftImageLabel="Before"
                      rightImage={ChimneyAfter}
                      rightImageLabel="After"
                    />
                </div>
                <div className="col-md-6 col-xs-12 pt-sm-3 pt-md-0 px-md-2 w-full d-none d-sm-block">
                      <BeforeAfter
                        leftImage={ConcreteBefore}
                        leftImageLabel="Before"
                        rightImage={ConcreteAfter}
                        rightImageLabel="After"
                      />
                </div>
              </div>
              <p className="text-gray-500 text-center pt-2 italic text-sm">
                Drag the arrows to see the before &amp; after transformation!
              </p>
            </div>
    </div>
          </div>
        </div>
    )
    
  }
} 

