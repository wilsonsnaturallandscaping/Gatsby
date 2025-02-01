import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactForm from '../ContactForm';
import Popup from 'reactjs-popup';
import { X } from 'react-feather';
import Logo from '../../components/images/SiteLogo';

let windowWidth = 0
if (typeof window !== `undefined`) {
  windowWidth = window.innerWidth
}


const MenuLi = styled.li`
  position: relative;
    font-weight:500;
  @media (min-width: 992px) {
    &.has-submenu,
    &.has-subsection {
      > a {
        &:after {
          border-style: solid;
          border-width: 0.15em 0.15em 0 0;
          content: '';
          display: inline-block;
          height: 0.5em;
          left: 0.15em;
          position: relative;
          top: 0.35em;
          transform: rotate(135deg);
          vertical-align: top;
          width: 0.5em;
          margin-left: 5px;
          color: #000;
        }
      }

      &:hover {
        .submenu.row {
          display: flex!important;
          min-width: 443px;
        }
        .submenu {
          display: inline-block !important;
          li {
            padding: 0;
            cursor:pointer;
            a {
              &:after {
                content: none;
                border: none;
              }

              width: 100%;
              padding: 12px 18px;
              border-bottom: 1px solid rgb(234, 234, 234);
              font-size: 1.1em;
              
}

            }
          }
        }
      }
    }
    &.has-subsection {
      .subsection {
        display: inline-block !important;
        li {
          padding: 0;
          a {
            &:after {
              content: none;
              border: none;
            }
            color: #000;
            width: 100%;
            
          }
        }
        li ul li {
          list-style: none;
        }
      }
    }
  }
`


const SubMenu = styled.ul`
  display: block;
  position: inherit;
  box-shadow: none;
  li {
    @media (max-width: 992px) {
      background: transparent !important;
    }
  }
  a {
    @media (max-width: 992px) {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 992px) {
    background: transparent !important;
padding-left:15px;
  }

  @media (min-width: 992px) {
    display: none !important;
    position: absolute;
    border: 1px solid #e8e8e8b8;
  }

  font-size: 0.7937rem;
font-weight:200;
  line-height: 1.45rem;
  left: 0px;
  color: rgba(0, 0, 0, 1);
  list-style: none;
  margin: 0px;
  top: 100%;
  padding: 0.725rem 0px;
  padding-bottom: 0px;
  z-index: 100;
  overflow: hidden;
  min-width: 250px;
  @media (max-width: 992px) {
    background: transparent !important;
  }
`



    const LogoSVG = styled.div`
  width: 210px;
  padding: 0;
  @media (max-width: 992px) {
    width: 200px;
  }
  .logo-text {
    font-size: 20px;
  }
`

    const PhoneNumberHeader = styled.a`
  text-decoration: none;
  font-size: 1.8em;
  font-weight:900;
  color: #333;
  letter-spacing: -1px;
font-family: system-ui, sans-serif;
  @media (max-width: 992px) {
  color:#fff;
  letter-spacing: 0;
    font-size: 18px;
    font-weight: 800;
  }

`
    const HeaderOuterContainer = styled.div`
  background: rgba(255,255,255,1);
  z-index: 9999;
  position: relative;
  padding: 0 15px !important;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 4px 0px;
`

    const NavOuterContainer = styled.nav`
  border-top: 1px solid whitesmoke;
  position: relative;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    &:hover {
      li {
        a {
          opacity: 0.8;
        }
        &:hover {
          a {
            opacity: 1;
          }
        }
      }
    }
    li {
      list-style-type: none;
      margin: 0;
      padding: 0 18px;
      &:first-child {
        padding-left: 0;
      }
      a {
        color: #333;
        text-decoration: none;
        padding: 16px 0;
        padding-bottom: 16px;
        transition: 0.2s ease all;
        font-size: 16px;
        font-weight: 500;
        display: inline-block;
        border-bottom: 4px solid transparent;
        &:hover {
          opacity: 1;
          &:before {
            opacity: 1;
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
`
    
    
    const NavigationMobileUL = styled.ul`
list-style-type: none;
  margin: 0;
  padding: 1em !important;

  li {
    font-weight: 600;
    a {
      color: #333;
      text-decoration: none;
      font-size: 1.25em;
    }
    &.active {
      color: #1751a1;
    }
  }
`
    
    
    const MobileSecondaryCTA = styled.div`
    background: #000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #000000, #130f40);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #000000, #130f40); 
  padding: 0.5em 0;
`
    
    
    const StickyContainer = styled.div`
  z-index: 10000;
  position: sticky;
  top: 0;`

    const LogoContainer = styled.div`
      a {
        text-decoration: none;
        font-size: 1.25em;
        font-weight: 600;
        color: #ff0000;
        padding: 0.5em 0;
      }`

    const MenuMobile = styled.div``


    
    const CTASectionWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  .cta-button {  @media(max-width:320px){
      padding:.3em .7em;}
  }
`
    
    const SiteTagline = styled.div`
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: 0;
  }`

    
const CallToAction = props => {
  const popUpHandler = close => (
    <div className="p-2 block">
      <button
        style={{ borderWidth: '0', float: 'right' }}
        className="cursor-pointer borderNone d-block mt-3 mr-4 p-2 float-right m0-auto m-0-auto button__ButtonOuter-gFbSyU"
        onClick={() => {
          close()
        }}
      >
        <X color={'#333'} strokeWidth={'3'} className="d-block borderNone" />
      </button>
      <div className="p-3 py-4 block">
        <h2 className="mb-1 popupheading" style={{ lineHeight: '1.05' }}>
Wilson&apos;s Natural Landscaping</h2>
        <p
          style={{
            color: '#666',
            lineHeight: '1.5',
            fontSize: '.9em',
          }}
          className="mb-3 popupdesc"
        > will be happy to provide a professional consultation for your next project. A site visit can be arranged if needed.
              </p>
        <ContactForm
          showServicesList={true}
          showLabels={true}
          showPlaceHolders={true}
        />
      </div>
    </div>
  )

  return (
    <CTASectionWrapper>
      <div className="headeroneph">
        <div className="flex items-center">
          
           
            <PhoneNumberHeader
              href="tel:+17048884635"
              className="hover:text-color-primary mr-4 items-center"
            >
             (704) 888-4635
            </PhoneNumberHeader>
         

          <div className="column divcentervertical estbuttonalign">
            <Popup
              trigger={
                <button
                  title={'Book Your Stay'}
                  style={{ borderWidth: '0' }}
                  className="button-header-primary"
                >
                   
    <span>REQUEST YOUR</span>
<span>CONSULTATION</span>
                </button>
              }
              modal
              closeOnDocumentClick
            >
              {popUpHandler}
            </Popup>
          </div>
        </div>
      </div>
    </CTASectionWrapper>
  )
}

class Header extends React.Component {
  state = {
    headerOpen: false,
    windowWidth: windowWidth,
    defaultMenu: this.props.mainNavigation,
  }

  subSectionRefs = {}

  componentDidMount() {
    this.updatePhoneLoadScrollReveal()
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.handleWindowResize)
    }
  }

  componentDidUpdate() {
    this.updatePhoneLoadScrollReveal()
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.handleWindowResize)
    }
  }

  handleWindowResize = () => {
    if (typeof window !== `undefined`) {
      this.setState({ windowWidth: window.innerWidth })
    }
  }

  updatePhoneLoadScrollReveal = () => {
    try {
      window.CallTrk.swap()
    } catch (e) {
      console.log('phone swap blocked')
    }
    // window.ScrollReveal().reveal('.hero-title, .hero-paragraph, .hero-cta', {
    //   duration: 1e3,
    //   distance: '40px',
    //   easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    //   origin: 'bottom',
    //   interval: 150,
    // })
    // window.ScrollReveal().reveal('.feature, .pricing-table', {
    //   duration: 600,
    //   distance: '40px',
    //   easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    //   interval: 100,
    //   origin: 'bottom',
    //   viewFactor: 0.5,
    // })
    // window.ScrollReveal().reveal('.feature-extended-image', {
    //   duration: 600,
    //   scale: 0.9,
    //   interval: 100,
    //   easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    //   viewFactor: 0.5,
    // })
  }

  toggleMobileMenuOverlay = e => {
    e.preventDefault()
    this.setState({
      headerOpen: (this.headerOpen = !this.headerOpen),
    })

    if (document.body.classList.contains('mobile-menu-overlay--open')) {
      document.body.classList.remove('mobile-menu-overlay--open')
    } else {
      document.body.classList.add('mobile-menu-overlay--open')
    }
  }


  render() {
    return (
      <>
        <HeaderOuterContainer className="container-fluid">
          <div className="container padding-0  bg-color-header-inner">
            <div className="row">
              <LogoContainer className="py-1 col-4 col-lg-3 d-flex align-items-center">
                <Link to="/" title="Wilsons Landscaping" style={{ lineHeight: '0', padding: '0'}}>
               <LogoSVG alt={this.props.siteTitle + " Logo"}>

                    <Logo />
                  </LogoSVG>
                </Link>
              </LogoContainer>

              <div className="col-8 col-lg-9 flex flex-col justify-content-center align-items-end-mobile justify-content-lg-end md:justify-content-end p-0">

<div className="flex pb-4 pt-4">
                <SiteTagline className="sitetaglinehead divcentervertical d-xl-flex col-5">
                  <p className="sitelinehead">
             Committed to Quality & Sustainability
                  </p>
               <p className="areasservedheader">We continue what mother nature started</p>
                </SiteTagline>

              <div className="d-none d-lg-flex align-items-center col-7 justify-content-end">
                <CallToAction {...this.props} />
              </div>

              <MenuMobile className="d-lg-none d-xl-none col-12 d-flex align-items-center justify-content-end">
              <button
                    type="button"
                    onClick={this.toggleMobileMenuOverlay}
                    className=" bg-white border-none cursor-pointer duration-150 ease-in focus:bg-gray-50 focus:outline-none focus:text-gray-700 hover:bg-white p-2 rounded-lg text-center text-gray-600 transition"
                  >{this.state.headerOpen ? <svg
                    className="h-6 w-6 mx-auto"
                    x-description="Heroicon name: x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg> :  <svg
                      className="h-6 w-6 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>}
                   
                    <span className="block uppercase font-semibold" style={{fontSize:'.6rem'}}>{this.state.headerOpen ? 'Close' : 'Menu'}</span>
                  </button>
 
              </MenuMobile>
</div>
              <NavOuterContainer className="menu-desktop d-none d-lg-flex align-items-center">
          <div className="container">
            <ul className="justify-content-around">
      <MenuLi>
      <Link to="/" title="Home" activeClassName="active" >Home</Link>
    </MenuLi>  
               <MenuLi className="has-submenu" >
      <Link to="/about" title="About Us" activeClassName="active" >About Us</Link>
  <SubMenu className="submenu bg-color-primary-lg">
       <MenuLi>
      <Link to="/about/the-process" title="The Process" activeClassName="active" >The Process</Link>
    </MenuLi>  
  <MenuLi>
      <Link to="#" title="Eco Friendly Solutions" activeClassName="active" >Eco Friendly Solutions</Link>
    </MenuLi> 
 
        </SubMenu>
    </MenuLi> 
                      <MenuLi className="has-submenu" >
      <Link to="#" title="Our Services" activeClassName="active" >Our Services</Link>
  <SubMenu className="submenu bg-color-primary-lg">
       <MenuLi>
      <Link to="/services/drainage" title="Drainage Solutions" activeClassName="active" >Drainage Solutions</Link>
    </MenuLi>  
  <MenuLi>
      <Link to="/services/gardens" title="Gardens" activeClassName="active" >Gardens</Link>
    </MenuLi> 
  <MenuLi>
      <Link to="/services/hardscapes" title="Natural Stone & Hardscapes" activeClassName="active" >Natural Stone & Hardscapes</Link>
    </MenuLi> 
  <MenuLi>
      <Link to="/services/trees" title="Trees" activeClassName="active" >Trees</Link>
    </MenuLi> 
 <MenuLi>
      <Link to="/services/maintenance" title="Horticulture Management" activeClassName="active" >Horticulture Management</Link>
    </MenuLi>
 <MenuLi>
      <Link to="/services/design" title="Landscape Design Services" activeClassName="active" >Landscape Design Services</Link>
    </MenuLi>
        </SubMenu>
    </MenuLi>    
       
                          <MenuLi>
      <Link to="/testimonials" title="Testimonials" activeClassName="active" >Testimonials</Link>
    </MenuLi>             
                      <MenuLi>
      <Link to="/blog" title="The Blog" activeClassName="active" >Blog</Link>
    </MenuLi>     
                      <MenuLi>
      <Link to="/contact" title="Contact Us" activeClassName="active" >Contact Us</Link>
    </MenuLi>    
            </ul>
          </div>
          
        </NavOuterContainer>

              </div>

         
            </div>
          </div>

     


        </HeaderOuterContainer>

       

        <StickyContainer>
          <MobileSecondaryCTA className="d-lg-none d-xl-none">
            <div className="container">
              <CallToAction
                {...this.props}
                className="d-lg-none d-xl-none col-6 d-flex align-items-center"
              />
            </div>
          </MobileSecondaryCTA>
        </StickyContainer>
        <div
          className={'mobileOverlay' + (this.state.headerOpen ? ' open' : '')}
        >
          <div className="animate-overlay-content">
            <NavigationMobileUL>
       <MenuLi>
      <Link to="/" title="Home" activeClassName="active" >Home</Link>
    </MenuLi>  
               <MenuLi className="has-submenu" >
      <Link to="/about" title="About Us" activeClassName="active" >About Us</Link>
  <SubMenu className="submenu bg-color-primary-lg">
       <MenuLi>
      <Link to="/about/the-process" title="The Process" activeClassName="active" >The Process</Link>
    </MenuLi>  
  <MenuLi>
      <Link to="#" title="Eco Friendly Solutions" activeClassName="active" >Eco Friendly Solutions</Link>
    </MenuLi> 
 
        </SubMenu>
    </MenuLi> 
                      <MenuLi className="has-submenu" >
      <Link to="#" title="Our Services" activeClassName="active" >Our Services</Link>
  <SubMenu className="submenu bg-color-primary-lg">
       <MenuLi>
      <Link to="/services/drainage" title="Drainage Solutions" activeClassName="active" >Drainage Solutions</Link>
    </MenuLi>  
  <MenuLi>
      <Link to="/services/gardens" title="Gardens" activeClassName="active" >Gardens</Link>
    </MenuLi> 
  <MenuLi>
      <Link to="/services/hardscapes" title="Natural Stone & Hardscapes" activeClassName="active" >Natural Stone & Hardscapes</Link>
    </MenuLi> 
  <MenuLi>
      <Link to="/services/trees" title="Trees" activeClassName="active" >Trees</Link>
    </MenuLi> 
 <MenuLi>
      <Link to="/services/maintenance" title="Horticulture Management" activeClassName="active" >Horticulture Management</Link>
    </MenuLi>
 <MenuLi>
      <Link to="/services/design" title="Landscape Design Services" activeClassName="active" >Landscape Design Services</Link>
    </MenuLi>
        </SubMenu>
    </MenuLi>    
        
                          <MenuLi>
      <Link to="/testimonials" title="Testimonials" activeClassName="active" >Testimonials</Link>
    </MenuLi>             
                      <MenuLi>
      <Link to="/blog" title="The Blog" activeClassName="active" >Blog</Link>
    </MenuLi>     
                      <MenuLi>
      <Link to="/contact" title="Contact Us" activeClassName="active" >Contact Us</Link>
    </MenuLi>   
            </NavigationMobileUL>
          </div>
        </div>       
     </>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
}

Header.defaultProps = {
  siteTitle: '',
  siteDescription: ''
}

export default Header