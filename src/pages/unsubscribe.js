import React from "react";
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import { withBreakpoints } from 'gatsby-plugin-breakpoints';
import "../assets/css/main.css";


class UnsubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      isModalOpen: false,
      submitError: false,
      isSubmitted: false,
      date: new Date()
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
    const requestBody = {
        email: email,
        location: "email",
        source: postId,
        unSubscribeDate: this.state.date,
        property: "NWA Daily"
      }
  
    fetch(`https://nwadailybackend.herokuapp.com/unsubscribes`, {
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
{breakpoints.sm ? 
(
<div className="uk-section">
      <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1>
      <h3 className="uk-text-center">Unsubscribe from our daily newsletter</h3>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"90%"}}>If you no longer want to stay up to date with the latest happenings in NWA with our newsletter, submit your email address here</p>
      <form class="uk-form" style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"55%",color:"#307765", marginLeft:"auto",marginRight:"auto",marginBottom:"0px",paddingBottom:"0px"}} 
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
              >Unsubscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Thanks for the memories!</h4>
              </div>
                )}
                </div>
            
          </form>
        
        </div>
)
:
(
<div className="uk-section">
      <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1>
      <h3 className="uk-text-center">Unsubscribe from our daily newsletter</h3>
      <p className="uk-text-center" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>If you no longer want to stay up to date with the latest happenings in NWA with our newsletter, submit your email address here</p>
      <form class="uk-form" style={{marginLeft:"auto",marginRight:"auto",width:"60%"}}>
            
              <div class="test">
                    
              {this.state.isSubmitted === false ?
                (
                  <div class="uk-margin">
            <input style={{width:"75%",color:"#307765", marginBottom:"0px",paddingBottom:"0px"}} 
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
              >Unsubscribe</button>
              </div>
                )
                :
                (
                  <div class="uk-margin">
            <h4 style={{textAlign:"center"}}>Thanks for the memories!</h4>
              </div>
                )}
                </div>
            
          </form>
        
        </div>
)}
    </Layout>
    )}
    />     
  );
}
}


export default withBreakpoints(UnsubscribePage);