import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"

const Advertise = ({ data }) => {
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
                    <p>This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Extended Text with Image</h3>
                    <p>This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Bulletin Board</h3>
                    <p>This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    
                    <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
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
                    <p>This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Extended Text with Image</h3>
                    <p>This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center">Select</button>
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Bulletin Board</h3>
                    <p>This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
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


export default Advertise;