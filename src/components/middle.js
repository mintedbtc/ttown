import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Img from 'gatsby-image';
import bulletin from "../images/bulletin.png";
import { StaticImage } from "gatsby-plugin-image"

const Middle = ({ data }) => {
  const breakpoints = useBreakpoint();

  return (
    
    <div className="uk-section uk-section-muted uk-section-large">
    {breakpoints.sm ? 
              (
    <div className="uk-container">
      <h2 className="uk-title uk-text-center">Advertise with us</h2>
        
            <div style={{display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Sponsor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="uk-text-center">
                    <img src="http://localhost:1337/uploads/sponsor_df238908ba.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Extended Text with Image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="uk-text-center">
                    <img src="http://localhost:1337/uploads/extened_Text_2d77c75449.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Bulletin Board</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="uk-text-center">
                    <img src="http://localhost:1337/uploads/bulletin_e50a7e69bf.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
        </div>
              )
              :
              (
<div className="uk-container">
      <h2 className="uk-title uk-text-center">Advertise with us</h2>
        
            <div style={{width:"30%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Sponsor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="uk-text-center">
                    <img src="http://localhost:1337/uploads/sponsor_df238908ba.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Extended Text with Image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="uk-text-center">
                    <img src="http://localhost:1337/uploads/extened_Text_2d77c75449.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Bulletin Board</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="uk-text-center">
                    <img src="http://localhost:1337/uploads/bulletin_e50a7e69bf.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
        </div>
              )}
        
    </div>

  );
};




const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "../images/bulletin.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


export default Middle;