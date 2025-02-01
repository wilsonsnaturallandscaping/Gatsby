import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
import { Check } from 'react-feather';
import FooterLogo from '../../components/images/SiteLogo';
import {siteMetadata} from '../../site-configs'
import FacebookIcon from "../../assets/icons/facebook"
import InstagramIcon from "../../assets/icons/instagram"
import YouTubeIcon from "../../assets/icons/youtube"


export default class Footer extends React.Component {
  
    getYear() {
        return new Date().getFullYear();
    }
    
  render() {
    let {props} = this;

 


    
      const FooterFluid = styled.div`
    padding: 5em 1em;
    font-size: 0.9em;
    font-weight:400;
    border-top: 4px solid #006747;
    color: rgb(34, 34, 34);
      `;
      const LogoContainer = styled.div`
        svg {
            opacity: .3;
            max-width:150px;
            min-width:150px;
        }
        padding:1em 0;
      `;

      const FooterHeader = styled.h3`
      color: #000;
       line-height: 1em;
       font-weight: 700;
       font-size:16px;
       margin-bottom:1em;
       `

       const FooterP = styled.p`
       color: #333;
        `

       
       const FooterUl = styled.ul`
       color: #333;
       font-size: .93em;
       list-style-type:none;
       padding:0;
        `

        
        const FooterLiViewAll = styled.li`
        color: #333;
        list-style:none;
        font-style:italic;
        padding-left:15px;
        line-height:1.35;
        margin-bottom: .5em;
         a {
            color: #333;
         }
         a:hover {
            color:#006747;
        }
        `


        const FooterLi = styled.li`
        color: #333;
        line-height:1.35;
        margin-bottom: .5em;
         a {
            color: #333;
         }
         a:hover {
            color:#006747;
        }
        `

        const CopyrightContainer = styled.div`
        display:flex;
        align-items:center;
        
        justify-content:center;
        border-top: 1px solid rgba(0, 0, 0, 0.79);
        padding-top: 2em;
margin-top:1.5em;
        `

        const CopyrightText = styled.p`
        color: #333;
        text-align:center;
        `
        const CopyrightSlogan = styled.span`
        font-style:italic;
        `
        const SocialMediaIcon = styled.div`
            path {
                fill:#006747;
            }
            a {
                svg {
                    height: 24px;
                }
            }
padding-right:15px;
        `

        const SocialMediaIcons = styled.div`
            display:flex;
            `
            


            console.log("footer", this.props)
    return (
    <FooterFluid>
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-3 mb-4">
        <FooterLogo />
                  
        <FooterHeader className="mt-2">Call Us: (704) 888-4635<br/>
Charlotte, NC, USA</FooterHeader>
         <SocialMediaIcons>
                    
                    {siteMetadata.social.facebook ? 
                    <SocialMediaIcon>
                        <a href="http://www.facebook.com/WilsonsNaturalLandscaping" title="facebook" target="_blank">
                            <FacebookIcon/>
                        </a>
                    </SocialMediaIcon>
                    : ''} 

                    {siteMetadata.social.google ? 
                    <SocialMediaIcon>
                        <a href="http://www.instagram.com/WilsonsNaturalLandscaping" title="google" target="_blank">
                            <InstagramIcon title="google" className="googlefooter"/>
                        </a>
                    </SocialMediaIcon>
                    : ''} 
        
                            {siteMetadata.social.youtube ? 
                    <SocialMediaIcon>
                        <a href="https://www.youtube.com/@WilsonsNaturalLandscaping" title="Youtube" target="_blank">
                            <YouTubeIcon/>
                        </a>
                    </SocialMediaIcon>
                    : ''} 
        
                     
                
                </SocialMediaIcons>           
      </div>
            
      <div className="col-12 col-md-3 mb-4">  
        
        <FooterHeader>Why Choose Us</FooterHeader>
                    <FooterUl>
                  
        <li>Competitive Pricing</li>
                      <li>Family-Owned & Operated</li>
                      <li>Established & Reputable</li>
<li>NC Licensed Landscape Contractor #0357</li>
                      
         </FooterUl>
        </div>
        
     <div className="col-12 col-md-3 mb-4">
              
       <FooterHeader>Popular Services</FooterHeader>
                    <FooterUl>
                      <li className="greyText"><Link to="/services/drainage">Drainage</Link></li>
                      <li className="greyText"><Link to="/services/gardens">Gardens</Link></li>
                      <li className="greyText"><Link to="/services/hardscapes">Natural Stone & Hardscapes</Link></li>
                      <li className="greyText"><Link to="/services/trees">Trees</Link></li>
                       <li className="greyText"><Link to="/services/maintenance">Horticulture</Link></li>
         </FooterUl>
        </div>
       <div className="col-12 col-md-3 mb-4">
              
       <FooterHeader>Helpful Links</FooterHeader>
                    <FooterUl>
                    <li className="greyText"><Link to="/about">About Us</Link></li>
                      <li className="greyText">Eco-Friendly Solutions</li>
                        <li className="greyText"><Link to="/about/the-process">The Process</Link></li>
                      <li className="greyText"><Link to="/testimonials">Client Testimonials</Link></li>
                      <li className="greyText"><Link to="/contact">Contact</Link></li>
    
                      
         </FooterUl>
            
        </div>
      
        </div>
       
                
     
        <CopyrightContainer>
       
        <CopyrightText> 
            <CopyrightSlogan>Copyright &copy; Wilson&apos;s Natural Landscaping LLC. All Rights Reserved. {this.getYear()}.</CopyrightSlogan>
            
           
</CopyrightText>
 {/* <LogoContainer><Logo style={"fullwhite"}/></LogoContainer> */}
           
        </CopyrightContainer>
        
        </div>
      </FooterFluid>
    )
    
  }
} 
