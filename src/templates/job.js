import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import SubscribeComponent from "../components/subscribe";

export const query = graphql`
  query JobQuery($slug: String!) {
    strapiJob(slug: { eq: $slug }) {
      strapiId
      slug
      title
      organization
      location
      type
      applicationLink
      logo {
        publicURL
      }
      published_at
      description
    }
  }
`;

const Job = ({ data }) => {
  const breakpoints = useBreakpoint();
  const job = data.strapiJob;
  
  const seo = {
    metaTitle: job.title,
    metaDescription: job.slug,
    shareImage: job.image,
    job: true,
  };
  
  job.description = job.description.split('<img ').join('<img style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  job.description = job.description.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  job.description = job.description.split('<em>').join('<em style="color:black">')
  job.description = job.description.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  
  
  return (
    
    <Layout seo={seo}>
      {breakpoints.sm ? 
      (
      <div>
          <h2 className="uk-text-center" style={{paddingTop:"15%",marginTop:"15%"}}>{job.organization + ' - '+ job.title}</h2>
          <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <a href={job.applicationLink}>
            <button className="job-post-button"
                    >Apply Here</button>
            </a>
            </div>
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={job.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:job.description}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
        <br></br>
        <br></br>
        <br></br>
          <h2 className="uk-text-center">{job.organization + ' - '+ job.title}</h2>
          <div style={{textAlign:"center",paddingBottom:"20px"}}>
            <a href={job.applicationLink}>
            <button className="job-post-button"
                    >Apply Here</button>
            </a>
            </div>
          <div style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"2%"}}>
          
          <div key={job.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:job.description}}></div>
          </div>
      </div>
      )}
      
    </Layout>
  );
};

export default Job;