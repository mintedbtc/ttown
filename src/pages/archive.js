import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArchivesComponent from "../components/archives";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const ArchivePage = () => {
  const data = useStaticQuery(query);
  const breakpoints = useBreakpoint()
  return (
    <Layout seo={data.strapiHomepage.seo}>
{breakpoints.sm ? 
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div style={{marginLeft:"3%"}} className="uk-container uk-container-large" >
        <h2 style={{marginLeft:"8%"}}>Browse all our newsletters</h2>
          <ArchivesComponent articles={data.allStrapiEdition.edges} />
        
        </div>
      </div>
)
:
(
<div className="uk-section">
      {/* <h1 className="uk-text-center">{data.strapiHomepage.hero.title}</h1> */}
        <div style={{marginLeft:"30%"}} className="uk-container uk-container-large" >
        <h2 style={{marginLeft:"5%"}}>Browse all our newsletters</h2>
          <ArchivesComponent style={{marginLeft:"5%"}} articles={data.allStrapiEdition.edges} />
        
        </div>
      </div>
)}
    </Layout>
  );
};

const query = graphql`
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
    allStrapiEdition(sort: {order: DESC, fields: date},
      filter: {writer: {id: {eq: 1}}}) {
      edges {
        node {
          strapiId
          slug
          date
          posts {
            title
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
  }
`;

export default ArchivePage;