import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';




const Footer = () => {
  
  const breakpoints = useBreakpoint()
  
  
    
    return (
      
      <div>
        <div>
          
            
            {breakpoints.sm ? 
              (
                <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-center">
              <ul className="uk-navbar-nav" style={{display:"block"}}>
              
                <li style={{display:"block"}}>
                  <Link to="/terms">{"Terms & Conditions"}</Link>
                </li>
                <li style={{display:"block"}}>
                  <Link to="/privacy">{"Privacy Policy"}</Link>
                </li>
                <li style={{display:"block"}}>
                  <Link to="/sweepstakes">{"Sweepstakes"}</Link>
                </li>
                <li>
                <Link to="/">{"Built with ❤️ ".concat("  ").concat(" in Fayetteville")}</Link>
                </li>
                <li style={{display:"block"}}>
                <Link to="/">&copy; {1900 + new Date().getYear()}, NWA Daily LLC</Link>
              </li>
              </ul>
                </div>
                </nav>
              ) 
              :
              (
                <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
              
                <li>
                  <Link to="/terms">{"Terms & Conditions"}</Link>
                </li>
                <li>
                  <Link to="/privacy">{"Privacy Policy"}</Link>
                </li>
                <li>
                  <Link to="/sweepstakes">{"Sweepstakes"}</Link>
                </li>
              
              </ul>
              
            </div>
            <div style={{paddingRight:"30px"}} className="uk-navbar-center">
              <ul className="uk-navbar-nav">
                <li>
                <Link to="/">{"Built with ❤️ ".concat("  ").concat(" in Fayetteville")}</Link>
                </li>
              </ul>
            </div>
            <div style={{paddingRight:"30px"}} className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li>
                <Link to="/">&copy; {1900 + new Date().getYear()}, NWA Daily LLC</Link>
                </li>
              
                
                
              </ul>
              </div>
              </nav>
              )}
            
            
            {/* <div className="uk-navbar-right">
              <button
                className="uk-button uk-button-default uk-margin-right"
                type="button"
              >
                Categories
              </button>
              <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                  {data.allStrapiCategory.edges.map((category, i) => (
                    <li key={`category__${category.node.slug}`}>
                      <Link to={`/category/${category.node.slug}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          
        </div>
      </div>
      );
    }
  

export default Footer;