import React from "react";
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import "../assets/css/main.css";
import 'react-quill/dist/quill.snow.css';

class JobpostPage extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
        this.ReactQuill = require('react-quill')
      }
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      title: "",
      organization: "",
      description: "",
      location: "",
      basic: "0",
      featured: "0",
      premium: "0",
      applicationLink: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      date: new Date()
    }
  }
  handleInputChange = event => {
    event.preventDefault();
    console.log('test')
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name)
    this.setState({
      [name]: value,
    })
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
    const location = this.state.location
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const applicationLink = this.state.applicationLink

    const requestBody = {
        email: email,
        location: location,
        // source: postId,
        title: title,
        organization: organization,
        description: description,
        applicationLink: applicationLink,
        // property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/jobs`, {
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
    //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
    //   method: 'POST',
    //   body: JSON.stringify({email: email}),
    //   headers: {
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

  submitBasicHandler = (e) => {
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
    const location = this.state.location
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const applicationLink = this.state.applicationLink

    const requestBody = {
        email: email,
        location: location,
        // source: postId,
        title: title,
        organization: organization,
        description: description,
        type: 'Basic',
        applicationLink: applicationLink,
        // property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/jobs`, {
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
    //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
    //   method: 'POST',
    //   body: JSON.stringify({email: email}),
    //   headers: {
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

  submitFeaturedHandler = (e) => {
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
    const location = this.state.location
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const applicationLink = this.state.applicationLink

    const requestBody = {
        email: email,
        location: location,
        // source: postId,
        title: title,
        organization: organization,
        description: description,
        type: 'Featured',
        applicationLink: applicationLink,
        // property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/jobs`, {
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
    //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
    //   method: 'POST',
    //   body: JSON.stringify({email: email}),
    //   headers: {
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

  submitPremiumHandler = (e) => {
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
    const location = this.state.location
    const organization = this.state.organization
    const description = this.state.description
    const title = this.state.title
    const applicationLink = this.state.applicationLink

    const requestBody = {
        email: email,
        location: location,
        // source: postId,
        title: title,
        organization: organization,
        description: description,
        type: 'Premium',
        applicationLink: applicationLink,
        // property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/jobs`, {
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
    //   fetch(`https://nwadailybackend.herokuapp.com/signup`, {
    //   method: 'POST',
    //   body: JSON.stringify({email: email}),
    //   headers: {
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
    const ReactQuill = this.ReactQuill
    
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
      <div>
{breakpoints.sm ? 
(
<div className="uk-section">
      
      <h3 className="uk-text-center">Post a job on our job board</h3>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}></p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
              <label>
              Job Title
              </label>
              <br></br>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobTitle"
              name="title" 
              type="text" 
              placeholder="Job Title"
              labelText="Job Title"
              value={this.state.title}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({title:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Organization
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobOrganization"
              name="organization" 
              type="text" 
              placeholder="Organization"
              labelText="Organization"
              value={this.state.organization}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({organization:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Job Location
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobLocation"
              name="location" 
              type="text" 
              placeholder="Job Location"
              labelText="Location"
              value={this.state.location}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({location:e.target.value})
              }}
              />
              
              <br></br>
              <br></br>
              <label>
              Job Description
              </label>
              <br></br>
             
              {(typeof window !== 'undefined' && ReactQuill) ? 
                (
              <ReactQuill theme="snow" 
                  name="jobDescription"
                  value={this.state.description}
                  onChange={(content) => {
                  this.setState({description:content})
                  }}
              />
                )
                :
                (
                    <textarea />
                )}
              
              <br></br>
              <label>
              Job Application Link
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobLink"
                name="link" 
                type="text" 
                placeholder="Job Application Link"
                labelText="Job Application Link"
                value={this.state.applicationLink}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({applicationLink:e.target.value})
                }}
                />
                <br></br>
                <br></br>
              <label>
              Contact Email Address
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobEmail"
                name="email" 
                type="text" 
                placeholder="Email Address"
                labelText="Your Email"
                value={this.state.email}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({email:e.target.value})
                }}
                />
                <div className="uk-container">
      
        
      <div style={{paddingRight:"20px",paddingTop:"25px",width:"100%"}}>

          <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
              <h3 className="uk-card-title uk-text-center" id="sponsor-title">Basic</h3>
              <p style={{textDecoration:"line-through",textAlign:"center"}}>$100 / month</p>
              <p style={{textAlign:"center"}}>Free</p>
              <ul>
                <li>
                Position posted on NWA Daily's job board
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >Post Basic</button>
                    </div>
              {/* {this.state.basic === "0" ? 
              (
              <button 
                style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                className="uk-button uk-button-default uk-position-bottom-center"
                onClick={e => {
                console.log(e.target.value)
                  this.setState({ basic: "1" })
                }}
                >Select</button>
                )
              :
              (
                <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                onClick={e => {
                    console.log(e.target.value)
                  this.setState({ basic: "0" })
                }}
              >Selected</button>
              )} */}
          </div>

      </div>
      <div style={{paddingRight:"20px",paddingTop:"25px",width:"100%"}}>

          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-title uk-text-center">Featured</h3>
              <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p>
              <p style={{textAlign:"center"}}>$100 / month</p>
              <ul>
              <li>
                    Job board posting
                </li>
                <li>
                    Posted 2 times in newsletter
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitFeaturedHandler}
                    >Post Featured</button>
                    </div>
              {/* {this.state.featured === "0" ? 
              (
              <button 
                style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                className="uk-button uk-button-default uk-position-bottom-center"
                onClick={e => {
                    console.log(e.target.value)
                  this.setState({ featured: "1" })
                }}
                >Select</button>
                )
              :
              (
                <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                onClick={e => {
                    console.log(e.target.value)
                  this.setState({ featured: "0" })
                }}
              >Selected</button>
              )} */}
          </div>

      </div>
      <div style={{width:"100%",paddingTop:"25px"}}>

          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-title uk-text-center">Premium</h3>
              <p style={{textDecoration:"line-through",textAlign:"center"}}>$250 / month</p>
              <p style={{textAlign:"center"}}>$150 / month</p>
              <ul>
                <li>
                    Job board posting
                </li>
                <li>
                    Posted 4 times in newsletter
                </li>
              </ul>
              <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitPremiumHandler}
                    >Post Premium</button>
                    </div>
              {/* {this.state.premium === "0" ? 
              (
              <button 
                style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                className="uk-button uk-button-default uk-position-bottom-center"
                onClick={e => {
                    console.log(e.target.value)
                  this.setState({ premium: "1" })
                }}
                >Select</button>
              )
              :
              (
                <button 
                style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                className="uk-button uk-button-default uk-position-bottom-center"
                onClick={e => {
                    console.log(e.target.value)
                  this.setState({ premium: "0" })
                }}
                >Selected</button>
              )} */}
          </div>

      </div>
  </div>
                <br></br>
                <br></br>
                
                {/* <div style={{textAlign: "center"}}>
            <button 
              style={{textAlign: "center",backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Post Job</button>
              </div> */}
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>You're all set!</h4>
              </div>
                )}
                </div>
            
          </form>
        
        </div>
)
:
(
<div className="uk-section">
      
      <h3 className="uk-text-center">Post a job on our job board</h3>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}></p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"75%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
              <label>
              Job Title
              </label>
              <br></br>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobTitle"
              name="title" 
              type="text" 
              placeholder="Job Title"
              labelText="Job Title"
              value={this.state.title}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({title:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Organization
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobOrganization"
              name="organization" 
              type="text" 
              placeholder="Organization"
              labelText="Organization"
              value={this.state.organization}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({organization:e.target.value})
              }}
              />
              <br></br>
              <br></br>
              <label>
              Job Location
              </label>
              <br></br>
              
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
              className="uk-input" 
              id="jobLocation"
              name="location" 
              type="text" 
              placeholder="Job Location"
              labelText="Location"
              value={this.state.location}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({location:e.target.value})
              }}
              />
              
              <br></br>
              <br></br>
              <label>
              Job Description
              </label>
              <br></br>
              {(typeof window !== 'undefined' && ReactQuill) ? 
                (
              <ReactQuill theme="snow" 
                  name="jobDescription"
                  value={this.state.description}
                  onChange={(content) => {
                  this.setState({description:content})
                  }}
              />
                )
                :
                (
                    <textarea />
                )}
              
              <br></br>
              <label>
              Job Application Link
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobLink"
                name="link" 
                type="text" 
                placeholder="Job Application Link"
                labelText="Job Application Link"
                value={this.state.applicationLink}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({applicationLink:e.target.value})
                }}
                />
                <br></br>
                <br></br>
              <label>
              Contact Email Address
              </label>
              <input style={{width:"100%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
                className="uk-input" 
                id="jobEmail"
                name="email" 
                type="text" 
                placeholder="Email Address"
                labelText="Your Email"
                value={this.state.email}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({email:e.target.value})
                }}
                />
                <br></br>
                <br></br>
                <div className="uk-container">
      
        
            <div style={{display:"inline-block",paddingRight:"20px",width:"30%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body" id="ad-card-sponsor">
                    <h3 className="uk-card-title uk-text-center" id="sponsor-title">Basic</h3>
                    <p style={{textDecoration:"line-through",textAlign:"center"}}>$100 / month</p>
                    <p style={{textAlign:"center"}}>Free</p>
                    <ul>
                        <li>
                            Position posted on NWA Daily's job board
                        </li>
                    </ul>
                    <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitBasicHandler}
                    >Post Basic</button>
                    </div>
                    {/* {this.state.basic === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ basic: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ basic: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>

            </div>
            <div style={{paddingRight:"20px",display:"inline-block",width:"30%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Featured</h3>
                    <p style={{textDecoration:"line-through",textAlign:"center"}}>$200 / month</p>
                    <p style={{textAlign:"center"}}>$100 / month</p>
                    <ul>
                        <li>
                            Job board posting
                        </li>
                        <li>
                            Posted 2 times in newsletter
                        </li>
                    </ul>
                    <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitFeaturedHandler}
                    >Post Featured</button>
                    </div>
                    {/* {this.state.featured === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "1" })
                      }}
                      >Select</button>
                      )
                    :
                    (
                      <button style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ featured: "0" })
                      }}
                    >Selected</button>
                    )} */}
                </div>

            </div>
            <div style={{display:"inline-block",width:"30%"}}>

                <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 className="uk-card-title uk-text-center">Premium</h3>
                    <p style={{textDecoration:"line-through",textAlign:"center"}}>$250 / month</p>
                    <p style={{textAlign:"center"}}>$150 / month</p>
                    <ul>
                        <li>
                            Job board posting
                        </li>
                        <li>
                            Posted 4 times in newsletter
                        </li>
                    </ul>
                    <div style={{textAlign: "center"}}>
                    <button 
                    style={{width:"100%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                    className="uk-button uk-button-default"
                    onClick={this.submitPremiumHandler}
                    >Post Premium</button>
                    </div>
                    {/* {this.state.premium === "0" ? 
                    (
                    <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ premium: "1" })
                      }}
                      >Select</button>
                    )
                    :
                    (
                      <button 
                      style={{width:"70%",backgroundColor:"#307765",opacity:1,color:"white",marginBottom:"10px"}} 
                      className="uk-button uk-button-default uk-position-bottom-center"
                      onClick={e => {
                        console.log(e.target.value)
                        this.setState({ premium: "0" })
                      }}
                      >Selected</button>
                    )} */}
                </div>

            </div>
        </div>
        <br></br>
        <br></br>
                {/* <div style={{textAlign: "center"}}>
            <button 
              style={{textAlign: "center",backgroundColor:"#307765",opacity:1,color:"white"}} 
              className="uk-button uk-button-default"
              onClick={this.submitHandler}
              >Post Job</button>
              </div> */}
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>You're all set!</h4>
              </div>
                )}
                </div>
            
          </form>
        
        </div>
)}
      </div>
    </Layout>
    )}
    />     
  )
               
}
}


export default withBreakpoints(JobpostPage);