import React from "react";
import Layout from "../components/layout";
import AdvertiseComponent from "../components/advertise";
import "../assets/css/main.css";
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby";
import { withBreakpoints } from 'gatsby-plugin-breakpoints';

class AdvertisePage extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      oneLiner: "0",
      extendedText: "0",
      sponsor: "0",
    }
  }
  handleInputChange = event => {
    console.log('test')
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name)
    this.setState({
      [name]: value,
    })
    console.log(this.state.email)
  }

  submitHandler = (e) => {
    e.preventDefault();
    
    let postId = null
    console.log(window.location.href.split('?id=').length)
    if (window.location.href.split('?id=').length > 1) {
      console.log('idhere')
      console.log(window.location.href)
      postId = window.location.href.split('?id=')[1]
      postId = postId.split('&')[0]
      console.log(postId)
      }
    else {
        postId = 'regular'
        console.log(postId)
      }
    if (this.state.email !== "") {
    
    const email = this.state.email.toLowerCase()
    const oneLiner = this.state.oneLiner
    const extendedText = this.state.extendedText
    const sponsor = this.state.sponsor
    const requestBody = {
        email: email,
        oneLiner: oneLiner,
        event: extendedText,
        sponsor: sponsor,
        property: "NWA Daily"
        // location: "advertise",
        // source: "regular",
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/inquiries`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData.data)
        this.setState({
          isModalOpen: false,
          isSubmitted: true
        })
        
      })
      .catch(err => {
        console.log(err);
      });
    //   fetch(`https://boiling-lake-07785.herokuapp.com/https://nwadaily-emailer.herokuapp.com/signup/`, {
    //   method: 'POST',
    //   body: JSON.stringify({email: email}),
    //   headers: {
    //     'Access-Control-Allow-Origin':'http://localhost:8000/',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //     'Content-Type': 'application/json'
    //   },
    //   mode: 'cors'
    // })
    //   .then(res => {
    //     if (res.status !== 200 && res.status !== 201) {
    //       console.log(res.status)
    //       return res.status
    //     }
    //     return res;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  else {
    this.setState({
      submitError: true,
    })
    console.log(true)
  }
  
  }

  render() {
    const { breakpoints } = this.props;
  return (
    <StaticQuery
    query={graphql`
    query {
      strapiHomepage {
        hero {
          title
        }
        seo {
          metaTitle
          metaDescription
          shareImage {
            publicURL
          }
        }
      }
    }
    `}
    render={data => (
    <Layout seo={data.strapiHomepage.seo}>

<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
      
      
          
    {breakpoints.sm ? 
              (
                <div style={{paddingBottom:"50px",marginBottom:"0px"}} className="uk-section uk-section-muted uk-section-large">
                <h2 className="uk-title uk-text-center">Advertise with us</h2>
                <h3 className="uk-text-center" style={{color:"#666",marginLeft:"auto",marginRight:"auto",width:"93%"}}>Get in front of thousands of Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you</h3>
                <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"93%"}}>
                      
                        <div class="test">
                              
                        {this.state.isSubmitted === false ?
                          (
                            <div class="uk-margin">
                      <input style={{width:"70%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                        className="uk-input" 
                        id="advertise"
                        name="email" 
                        type="text" 
                        placeholder="Email address"
                        labelText="Your Email"
                        value={this.state.email}
                          onChange={(e) => {
                            console.log(e.target.value)
                            this.setState({email:e.target.value})
                        }}
                        />
                      <button 
                        style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
                        className="uk-button uk-button-default"
                        onClick={this.submitHandler}
                        >Submit</button>
                        </div>
                          )
                          :
                          (
                            <div class="uk-margin">
                      <h4 style={{textAlign:"center"}}>We'll be with you shortly!</h4>
                        </div>
                          )}
                          </div>
                      
                    </form>
    <div className="uk-container">
      
        
            <div style={{display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Sponsor</h3>
                    <p>This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.sponsor === "0" ? 
                    (
                    <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Extended Text with Image</h3>
                    <p>This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.extendedText === "0" ? 
                    (
                    <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ extendedText: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ extendedText: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{paddingTop:"4.5%",display:"block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Bulletin Board</h3>
                    <p>This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.oneLiner === "0" ? 
                    (
                    <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ oneLiner: "1" })
                      }}
                      >Select</button>
                    )
                    :
                    (
                      <button 
                      style={{width:"35%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ oneLiner: "0" })
                      }}
                      >Selected</button>
                    )}
                </div>

            </div>
        </div>
        </div>
              )
              :
              (
                <div style={{paddingBottom:"50px",marginBottom:"0px"}} className="uk-section uk-section-muted uk-section-large">
      <h2 className="uk-title uk-text-center">Advertise with us</h2>
      <h3 className="uk-text-center" style={{color:"#666",marginLeft:"auto",marginRight:"auto",width:"70%"}}>Get in front of thousands of Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you</h3>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"50%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"70%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="signup"
              name="email" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.email}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({email:e.target.value})
              }}
              />
            <button 
              style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Submit</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>We'll be with you shortly!</h4>
              </div>
                )}
                </div>
            
          </form>
<div className="uk-container" style={{paddingTop:"25px",marginTop:"25px"}}>
        
            <div style={{width:"30%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Sponsor</h3>
                    <p>This ad spot is the most prominent spot we offer. It includes your logo and a description about your business or organization and will be the first thing our readers see.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/sponsor_3905f62571.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.sponsor === "0" ? 
                    (
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "1" })
                      }}
                    >Select</button>
                    )
                    :
                    (
                      <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ sponsor: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Extended Text with Image</h3>
                    <p>This ad spot is perfect for a business or that wants to tell its story. It is a block that includes a photo, a header, and text and looks like the rest of our content.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/extened_Text_decd614915.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.extendedText === "0" ? 
                    (
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                    onClick={e => {
                      this.setState({ extendedText: "1" })
                    }}
                    >Select</button>
                    )
                    :
                    (
                      <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ extendedText: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
            <div style={{width:"30%",paddingLeft:"4.5%",display:"inline-block"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Bulletin Board</h3>
                    <p>This ad spot is a one line promotion of your business in a section at the bottom of the news letter. This is the most cost effective way to partner with us.</p>
                    <div className="uk-text-center">
                    <img src="https://nwa-daily-photos.s3.amazonaws.com/bulletin_0a3e0d74e3.png" width="67%" height="67%" style={{marginBottom:"5%",textAlign:"center"}} alt="Bulletin Ad" />
                    </div>
                    {this.state.oneLiner === "0" ? 
                    (
                    <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                    onClick={e => {
                      this.setState({ oneLiner: "1" })
                    }}
                    >Select</button>
                    )
                    :
                    (
                      <button style={{backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        this.setState({ oneLiner: "0" })
                      }}
                    >Selected</button>
                    )}
                </div>

            </div>
        </div>
        </div>
              )}
        
    
        </div>
      
    </Layout>
    )}
    />     
  );
}
}


export default withBreakpoints(AdvertisePage);