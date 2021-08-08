import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import SubscribeComponent from "../components/subscribe";

export const query = graphql`
  query StoryQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      content
      slug
      image {
        publicURL
      }
      publishedAt
      author {
        name
      }
      
    }
  }
`;

const Story = ({ data }) => {
  const breakpoints = useBreakpoint();
  const story = data.strapiArticle;
  
  const seo = {
    metaTitle: story.title,
    metaDescription: story.slug,
    shareImage: story.image,
    story: true,
  };
  
  story.content = story.content.split('<img ').join('<img style="text-align:center; margin-left:auto;margin-right:auto;display:block"')
  story.content = story.content.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
  story.content = story.content.split('<em>').join('<em style="color:black">')
  story.content = story.content.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
  
  return (
    
    <Layout seo={seo}>
      {breakpoints.sm ? 
      (
      <div>
        
          <h2 className="uk-text-center" style={{paddingTop:"15%",marginTop:"15%"}}>{story.title}</h2>
          <p className="uk-text-center">{"By: "+story.author.name}</p>
          <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={story.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:story.content}}></div>
          </div>
      </div>
      
      )
      :
      (
      <div>
        
          <h2 className="uk-text-center">{story.title}</h2>
          <p className="uk-text-center">{"By: "+story.author.name}</p>
          <div style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"2%",paddingBottom:"5%"}}>
          
          <div key={story.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:story.content}}></div>
          </div>
      </div>
      )}
      <SubscribeComponent/>
    </Layout>
  );
};

export default Story;