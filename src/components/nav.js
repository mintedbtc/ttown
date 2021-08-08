import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';


const Nav = () => {
  const breakpoints = useBreakpoint();
  
  return (
      
      <div>
        {breakpoints.sm ? 
        (
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/"><img width="125" height="25" src="https://nwa-daily-photos.s3.amazonaws.com/faviconweb_removebg_preview_ec3f8396cb.png"/></Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
            <li>
                <a href="#">Browse</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <Link to="/story">Stories</Link>
                    </li>
                    <li>
                      <Link to="/archive">Archive</Link>
                    </li>
                    <li>
                      <Link to="/jobs">Jobs</Link>
                    </li>
                    <li>
                      <Link to="/advertise">Advertise</Link>
                    </li>
                    <li>
                      <Link to="/subscribe">Subscribe</Link>
                    </li>
                    </ul>
                </div>
            </li>
              </ul>
            </div>
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
          </nav>
        </div>
        )
        :
        (
          <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/"><img width="125" height="25" src="https://nwa-daily-photos.s3.amazonaws.com/faviconweb_removebg_preview_ec3f8396cb.png"/></Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li>
                  <Link to="/story">Stories</Link>
                </li>
                <li>
                  <Link to="/archive">Archive</Link>
                </li>
                <li>
                      <Link to="/jobs">Jobs</Link>
                    </li>
                <li>
                  <Link to="/advertise">Advertise</Link>
                </li>
                <li>
                  <Link to="/subscribe">Subscribe</Link>
                </li>
              
                
                
              </ul>
            </div>
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
          </nav>
        </div>
        )}
      </div>
    )}

export default Nav;