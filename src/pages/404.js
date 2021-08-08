
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import AdvertiseComponent from "../components/advertise";
import StoriesComponent from "../components/stories";
import "../assets/css/main.css";
import background from "../images/cover.png";
import mobileBackground from "../images/mobileCover.png";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import React, { useState, useEffect } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
import Close from "@material-ui/icons/Close";

const email = ""

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      isAdSubmitted: false,
      advertiser: "",
      oneLiner: "0",
      extendedText: "0",
      sponsor: "0",
      date: new Date()
    }
  }

  componentDidMount(){
		// Set delay in milliseconds
		window.setTimeout(() =>{this.setState({ isModalOpen: true })}, 2000);
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

  handleAdInputChange = event => {
    console.log('test')
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name)
    this.setState({
      [name]: value,
    })
    console.log(this.state.advertiser)
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  submitAdHandler = (e) => {
    e.preventDefault();
    
    
    if (this.state.advertiser !== "") {
    
    const advertiser = this.state.advertiser.toLowerCase()
    const oneLiner = this.state.oneLiner
    const extendedText = this.state.extendedText
    const sponsor = this.state.sponsor
    const requestBody = {
        email: advertiser,
        oneLiner: oneLiner,
        event: extendedText,
        sponsor: sponsor,
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
          isAdSubmitted: true
        })
        
      })
      .catch(err => {
        console.log(err);
      });
  }
  else {
    this.setState({
      submitError: true,
    })
    console.log(true)
  }
  
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
    const requestBody = {
        email: email,
        location: "landing",
        source: postId,
        subscribeDate: this.state.date
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/emails`, {
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
      fetch(`https://nwadailybackend.herokuapp.com/signup`, {
      method: 'POST',
      body: JSON.stringify({email: email}),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log(res.status)
          return res.status
        }
        return res;
      })
      .catch(err => {
        console.log(err);
      });
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
  console.log(breakpoints)
  
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
                                allStrapiEdition(sort: {order: DESC, fields: date}, limit: 5) {
                                  edges {
                                    node {
                                      strapiId
                                      slug
                                      date
                                      posts {
                                        title
                                        content
                                        topic
                                      }
                                      headline
                                      writer {
                                        name
                                        picture {
                                          childImageSharp {
                                            gatsbyImageData(layout: FIXED)
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                
                                allStrapiArticle(sort: {order: DESC, fields: publishedAt}, limit: 5) {
                                  edges {
                                    node {
                                      strapiId
                                      slug
                                      publishedAt
                                      content
                                      title
                                      author {
                                        name
                                      }
                                    }
                                  }
                                }
                            
                              }
                              `}
                              render={data => (
                                <Layout seo={data.strapiHomepage.seo}>
                              
    
      <div style={{paddingTop:"0px"}} className="uk-section">
      
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
      <div class="uk-light" uk-grid>
    <div>
    <Dialog
        open={this.state.isModalOpen}
        keepMounted
        onClose={() => this.handleModalClose()}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
        >
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => this.handleModalClose()}
          >
            <Close />
          </IconButton>
          <h3 style={{fontWeight:"bold"}}>Join thousands of NWA locals and subscribe to the free daily newsletter</h3>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
        >
          {breakpoints.sm ? 
            (
            <form>
            
            {this.state.isSubmitted === false ?
                (
                  
                  <div class="uk-margin" style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            <input 
              style={{width:"100%",marginLeft:"auto",marginRight:"auto", marginBottom:"0px",paddingBottom:"0px"}} 
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
              <br></br>
              <br></br>
            <button 
              style={{width:"100%",marginLeft:"auto",marginRight:"auto",backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Look for us in your inbox!</h4>
              </div>
                )}
             
            </form>
            )
            :
            (
              <form>
            
            {this.state.isSubmitted === false ?
                (
                  
                  <div class="uk-margin" style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            <input 
              style={{width:"70%",marginLeft:"auto",marginRight:"auto", marginBottom:"0px",paddingBottom:"0px"}} 
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
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Look for us in your inbox!</h4>
              </div>
                )}
             
            </form>
            )}
            </DialogContent>
      </Dialog>
        
        {breakpoints.sm ? 
        (
          <div id="coverImg" class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ backgroundImage: `url(${mobileBackground})` }}>
        <div style={{marginTop:"40px",textAlign:"center"}} className="uk-container uk-container-large" >
        <h3 style={{width:"100%"}}>A newsletter about all things NWA delivered to your inbox every weekday</h3>
        <div>
        <form class="uk-form">
            
              <div class="test">
                    
              
                {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input 
              style={{width:"60%", marginBottom:"0px",paddingBottom:"0px"}} 
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
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Look for us in your inbox!</h4>
              </div>
                )}
        
              
                </div>
            
          </form>
        </div>
        <h3 style={{marginTop:"0px",paddingTop:"0px",paddingLeft:"0px",marginLeft:"0px"}}>Check out our latest newsletters</h3>
          <div style={{marginRight:"auto",marginLeft:"auto",width:"70%"}}>
          <ArticlesComponent articles={data.allStrapiEdition.edges} />
        </div>
        </div>
        </div>
        )
        :
        ( 
          <div id="coverImg" class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ backgroundImage: `url(${background})` }}>
        <div style={{marginTop:"20px"}} className="uk-container uk-container-large" >
        <h2 style={{width:"55%"}}>A newsletter about all things NWA delivered to your inbox every weekday</h2>
        <div>
        <form class="uk-form">
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"35%", marginBottom:"0px",paddingBottom:"0px"}} 
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
              >Subscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{marginLeft:"15%"}}>Look for us in your inbox!</h4>
              </div>
                )}
                </div>
            
          </form>
        </div>
        <h3 style={{marginTop:"0px",paddingTop:"0px",paddingLeft:"0px",marginLeft:"0px"}}>Check out our latest newsletters</h3>
          <ArticlesComponent articles={data.allStrapiEdition.edges} />
        
        </div>
        </div>
        )}
        
    </div>
    
    
</div>

<div className="uk-section">
  <h2 className="uk-text-center">Read our local spotlights</h2>
  {breakpoints.sm ? 
        (
<div style={{marginLeft:"0%"}}>
<StoriesComponent stories={data.allStrapiArticle.edges} />
</div>
        )
        :
        (
<div style={{marginLeft:"25%"}}>
<StoriesComponent stories={data.allStrapiArticle.edges} />
</div>
        )}
</div>
<div style={{width:"100%",marginTop:"0px"}} uk-grid>
{breakpoints.sm ? 
              (
                <div style={{paddingBottom:"50px",marginBottom:"0px"}} className="uk-section uk-section-muted uk-section-large">
                <h2 className="uk-title uk-text-center">Advertise with us</h2>
                <h3 className="uk-text-center" style={{color:"#666",marginLeft:"auto",marginRight:"auto",width:"93%"}}>Get in front of thousands of Northwest Arkansans. Select any or all of these options to indicate your interest, submit your email, and we'll get right back to you</h3>
                <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"93%"}}>
                      
                        <div class="test">
                              
                        {this.state.isAdSubmitted === false ?
                          (
                            <div class="uk-margin">
                      <input style={{width:"70%", marginBottom:"0px",paddingBottom:"0px"}} 
                        className="uk-input" 
                        id="advertiser"
                        name="advertiser" 
                        type="text" 
                        placeholder="Email address"
                        labelText="Your Email"
                        value={this.state.advertiser}
                          onChange={(e) => {
                            console.log(e.target.value)
                            this.setState({advertiser:e.target.value})
                        }}
                        />
                      <button 
                        style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
                        className="uk-button uk-button-default"
                        onClick={this.submitAdHandler}
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
                    
              {this.state.isAdSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"70%", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="advertiser"
              name="advertiser" 
              type="text" 
              placeholder="Email address"
              labelText="Your Email"
              value={this.state.advertiser}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({advertiser:e.target.value})
              }}
              />
            <button 
              style={{backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitAdHandler}
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
      
        
      </div>
      
    </Layout>
    )}
    />     
  );
};
}


export default withBreakpoints(NotFoundPage);