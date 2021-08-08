import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import SubscribeComponent from "../components/subscribe";

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const query = graphql`
  query EditionQuery($slug: String!) {
    strapiEdition(slug: { eq: $slug }) {
      strapiId
      headline
      sponsor {
        website
        signup
        partnerMessage 
        partnerWebsite
        partnerLogo {
          publicURL
        }
      }
      posts {
          title
          topic
          slug
          coverImage {
            publicURL
          }
          photoCredit
          date
          content
      }
      pick {
        title
        content
      }
      writer {
        name
        picture {
          childImageSharp {
            fixed(width: 30, height: 30) {
              src
            }
          }
        }
      }
    }
  }
`;

const Article = ({ data }) => {
  const breakpoints = useBreakpoint();
  const article = data.strapiEdition;
  const seo = {
    metaTitle: article.headline,
    metaDescription: article.posts.map(post => {
        return post.title
    }).join(','),
    shareImage: article.image,
    article: true,
  };
  console.log(seo)
  const header = article.headline;
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
console.log(article.date)
const dt = new Date(article.posts[0].date)
console.log(article)
  return (
    <Layout seo={seo}>
      <div>
        
          <h2 className="uk-text-center" style={{paddingTop:"3%",marginTop:"3%"}}>{article.headline}</h2>


        <div className="uk-section">
        {breakpoints.sm ? 
        (
          <div className="uk-container uk-container-small uk-width-11-12">
            <div style={{borderBottom:"1px solid #f9f9f9", borderRadius:"20px", marginBottom:"7px", textAlign:"left"}}>
              <div style={{borderBottom:"1px solid #f5f5f5", borderRadius:"19px"}}>
              <div style={{borderRight:"1px solid #f5f5f5", borderBottom:"1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderRight:"1px solid #f2f2f2", borderBottom:"1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderRight:"1px solid #eee",borderBottom:"1px solid #eee",borderRadius:"16px"}}>
              <div style={{borderLeft:"0.3px solid #f5f5f5", borderTop:"0.1px solid #f2f2f2", borderRadius:"18px"}}>
              {/* <div style={{borderLeft:"0.3px solid #f2f2f2", borderTop:"0.1px solid #f0f0f0", borderRadius:"17px"}}> */}
              {/* <div style={{borderLeft:"0.3px solid #eee",borderTop:"0.1px solid #eee",borderRadius:"16px"}}> */}
            {/* forced update */}
            {/* forced update */}
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              <td width="33%" style={{padding: "15px", fontFamily:"Helvetica,Arial,sans-serif",fontSize:"12px",color:"#000000",marginTop:"0",marginBottom:"0"}}>
              {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ', '+ dt.getFullYear()}
              </td>
              <td width="33%"></td>
              <td width="33%" style={{textAlign: "right",paddingRight:"20px", fontFamily:"Helvetica,Arial,sans-serif",fontSize:"12px",color:"#000000",marginTop:"0",marginBottom:"0"}}>
              <a href="/subscribe" className="subscribeButton">Subscribe</a>
              </td>
              </tr>
              <tr>
              
              </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              
            <td width="100%" style={{paddingBottom:"15px"}}><img style={{width:"100%",height:"288px",maxHeight: "165px"}} src="https://nwa-daily-photos.s3.amazonaws.com/OPG_Qp_Jd_Qqils_B_Eitd_D_Gl_985ded29be"/></td>
            
            </tr>
            </table>
            {
              article.sponsor !== null ?
            (
            <div>
            <br></br>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr><td><h3 style={{fontFamily:"Helvetica,Arial,sans-serif",textAlign:"center",fontSize:"20px",color:"#000000",fontWeight:"700",marginTop:"0",marginBottom:"0"}}>Together With</h3></td></tr>
              <tr>
              
            <td width="100%" style={{textAlign:"center"}}><a href={article.sponsor.partnerWebsite} target="_blank"><img style={{width:"70%",maxWidth:"70%",maxHeight:"30%"}} src={article.sponsor.partnerLogo.publicURL}></img></a></td>
            
            </tr>
            
            
              <tr>
              <td>
            <div key={article.strapiId} style={{color:"black",textAlign:"left",padding:"15px"}} dangerouslySetInnerHTML={{__html:article.sponsor.partnerMessage.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666">')}}></div>
            </td>
            </tr>
            </table>
            <br></br>
            </div>)
            :
            <br></br>
          }
            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

          {article.posts.map(post => {
            
            let givenDate = new Date('2021-01-05')
            let currentDate = new Date(post.date)
            
            post.content = post.content.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
            post.content = post.content.split('<em>').join('<em style="color:black">')
            
            post.content = post.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
            console.log(post.content)
            console.log(post.photoCredit)
            return (
                    <div>
                      <div style={{borderBottom:"1px solid #f9f9f9", borderRadius:"20px", marginBottom:"7px", textAlign:"left"}}>
              <div style={{borderBottom:"1px solid #f5f5f5", borderRadius:"19px"}}>
              <div style={{borderRight:"1px solid #f5f5f5", borderBottom:"1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderRight:"1px solid #f2f2f2", borderBottom:"1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderRight:"1px solid #eee",borderBottom:"1px solid #eee",borderRadius:"16px"}}>
              <div style={{borderLeft:"0.3px solid #f5f5f5", borderTop:"0.1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderLeft:"0.3px solid #f2f2f2", borderTop:"0.1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderLeft:"0.3px solid #eee",borderTop:"0.1px solid #eee",borderRadius:"16px"}}>
            
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              <td style={{padding: "15px"}}>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"16px",color:"#307765",fontWeight:"700",marginTop:"0",marginBottom:"0"}}>
              {post.topic}
              </h3>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"24px",color:"#333",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}}>
              <a href={`/post/${post.slug}`} target="_blank" style={{color:"#000000!important",textDecoration:"none",borderBottom:"none!important"}}>
              <font color="#000000">
              {post.title}
              </font></a>
              </h3>
              </td>
              </tr>
              </table>
              
                        {post.coverImage !== null ? (
                          <div>
                        <img src={post.coverImage.publicURL}/>
                        <p style={{lineHeight:"22px",marginTop:"0",marginBottom:"15px",paddingLeft:"10px",marginTop:"5px",marginBottom:"0px",lineHeight:"14px"}}>
                        <small style={{color:"#666"}}><em style={{color:"#666"}}>{post.photoCredit}</em></small>
                        </p>
                        </div>
                        ):<div></div>}
                    
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
                      <tr>
                      <td>
                      <div style={{color:"black", padding: "15px"}} key={post.strapiId} dangerouslySetInnerHTML={{__html:post.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666">')}}></div>
                    {/* <Markdown source={post.content} escapeHtml={false} /> */}
                    </td>
            </tr>
            </table>
                    </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
            </div>
            )
        })}

              <div style={{borderBottom:"1px solid #f9f9f9", borderRadius:"20px", marginBottom:"7px", textAlign:"left"}}>
              <div style={{borderBottom:"1px solid #f5f5f5", borderRadius:"19px"}}>
              <div style={{borderRight:"1px solid #f5f5f5", borderBottom:"1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderRight:"1px solid #f2f2f2", borderBottom:"1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderRight:"1px solid #eee",borderBottom:"1px solid #eee",borderRadius:"16px"}}>
              <div style={{borderLeft:"0.3px solid #f5f5f5", borderTop:"0.1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderLeft:"0.3px solid #f2f2f2", borderTop:"0.1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderLeft:"0.3px solid #eee",borderTop:"0.1px solid #eee",borderRadius:"16px"}}>


        
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              <td style={{padding: "15px"}}>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"16px",color:"#307765",fontWeight:"700",marginTop:"0",marginBottom:"0"}}>
                NWA Daily Picks
              </h3>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"24px",color:"#333",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}}>
              <font color="#000000">
              In other news
              </font>
              </h3>
              </td>
              </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
                <tr>
                <td>
                <div style={{color:"black", padding: "15px"}} dangerouslySetInnerHTML={{__html:article.pick.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666;">').split('<li>').join('<li style="padding-bottom:10px;">')}}></div>
                </td>
            </tr>
            </table>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
        </div>
        )
        :
        (
          <div className="uk-container uk-container-small uk-width-3-5">
           <div style={{borderBottom:"1px solid #f9f9f9", borderRadius:"20px", marginBottom:"7px", textAlign:"left"}}>
              <div style={{borderBottom:"1px solid #f5f5f5", borderRadius:"19px"}}>
              <div style={{borderRight:"1px solid #f5f5f5", borderBottom:"1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderRight:"1px solid #f2f2f2", borderBottom:"1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderRight:"1px solid #eee",borderBottom:"1px solid #eee",borderRadius:"16px"}}>
              <div style={{borderLeft:"0.3px solid #f5f5f5", borderTop:"0.1px solid #f2f2f2", borderRadius:"18px"}}>
              {/* <div style={{borderLeft:"0.3px solid #f2f2f2", borderTop:"0.1px solid #f0f0f0", borderRadius:"17px"}}> */}
              {/* <div style={{borderLeft:"0.3px solid #eee",borderTop:"0.1px solid #eee",borderRadius:"16px"}}> */}
            
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              <td width="33%" style={{padding: "15px", fontFamily:"Helvetica,Arial,sans-serif",fontSize:"12px",color:"#000000",marginTop:"0",marginBottom:"0"}}>
              {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ', '+ dt.getFullYear()}
              </td>
              <td width="33%"></td>
              <td width="33%" style={{textAlign: "right",paddingRight:"20px", fontFamily:"Helvetica,Arial,sans-serif",fontSize:"12px",color:"#000000",marginTop:"0",marginBottom:"0"}}>
              <a href="/subscribe" className="subscribeButton">Subscribe</a>
              </td>
              </tr>
              <tr>
              
              </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              
            <td width="100%" style={{paddingBottom:"25px"}}><img style={{width:"100%",height:"288px",maxHeight: "12%"}} src="https://nwa-daily-photos.s3.amazonaws.com/OPG_Qp_Jd_Qqils_B_Eitd_D_Gl_985ded29be"/></td>
            
            </tr>
            </table>
            
            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

          {article.posts.map(post => {
            
            let givenDate = new Date('2021-01-05')
            let currentDate = new Date(post.date)
            

            return (
                    <div>
                      <div style={{borderBottom:"1px solid #f9f9f9", borderRadius:"20px", marginBottom:"7px", textAlign:"left"}}>
              <div style={{borderBottom:"1px solid #f5f5f5", borderRadius:"19px"}}>
              <div style={{borderRight:"1px solid #f5f5f5", borderBottom:"1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderRight:"1px solid #f2f2f2", borderBottom:"1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderRight:"1px solid #eee",borderBottom:"1px solid #eee",borderRadius:"16px"}}>
              <div style={{borderLeft:"0.3px solid #f5f5f5", borderTop:"0.1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderLeft:"0.3px solid #f2f2f2", borderTop:"0.1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderLeft:"0.3px solid #eee",borderTop:"0.1px solid #eee",borderRadius:"16px"}}>
            
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              <td style={{padding: "15px"}}>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"16px",color:"#307765",fontWeight:"700",marginTop:"0",marginBottom:"0"}}>
              {post.topic}
              </h3>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"24px",color:"#333",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}}>
              <a href={`/post/${post.slug}`} target="_blank" style={{color:"#000000!important",textDecoration:"none",borderBottom:"none!important"}}>
              <font color="#000000">
              {post.title}
              </font></a>
              </h3>
              </td>
              </tr>
              </table>
              
                        {post.coverImage !== null ? (
                          <div>
                        <img src={post.coverImage.publicURL}/>
                        <p style={{lineHeight:"22px",marginTop:"0",marginBottom:"15px",paddingLeft:"10px",marginTop:"5px",marginBottom:"0px",lineHeight:"14px"}}>
                        <small style={{color:"#666"}}><em style={{color:"#666"}}>{post.photoCredit}</em></small>
                        </p>
                        </div>
                        ):<div></div>}
                    
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
                      <tr>
                      <td>
                    {/* <Markdown source={post.content} escapeHtml={false} /> */}
                    <div style={{color:"black", padding: "15px"}} key={post.strapiId} dangerouslySetInnerHTML={{__html:post.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666">')}}></div>
                    </td>
            </tr>
            </table>
                    </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div>
            </div>
            )
        })}
        {/* <div style={{borderBottom:"1px solid #f9f9f9", borderRadius:"20px", marginBottom:"7px", textAlign:"left"}}>
              <div style={{borderBottom:"1px solid #f5f5f5", borderRadius:"19px"}}>
              <div style={{borderRight:"1px solid #f5f5f5", borderBottom:"1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderRight:"1px solid #f2f2f2", borderBottom:"1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderRight:"1px solid #eee",borderBottom:"1px solid #eee",borderRadius:"16px"}}>
              <div style={{borderLeft:"0.3px solid #f5f5f5", borderTop:"0.1px solid #f2f2f2", borderRadius:"18px"}}>
              <div style={{borderLeft:"0.3px solid #f2f2f2", borderTop:"0.1px solid #f0f0f0", borderRadius:"17px"}}>
              <div style={{borderLeft:"0.3px solid #eee",borderTop:"0.1px solid #eee",borderRadius:"16px"}}>


        
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
              <tr>
              <td style={{padding: "15px"}}>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"16px",color:"#307765",fontWeight:"700",marginTop:"0",marginBottom:"0"}}>
                NWA Daily Picks
              </h3>
              <h3 style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"24px",color:"#333",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}}>
              <font color="#000000">
              In other news
              </font>
              </h3>
              </td>
              </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{borderCollapse: "collapse"}}>
                <tr>
                <td>
                <div style={{color:"black", padding: "15px"}} dangerouslySetInnerHTML={{__html:article.pick.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666;">').split('<li>').join('<li style="padding-bottom:10px;">')}}></div>
                </td>
            </tr>
            </table>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
            </div> */}
        </div>
        )}
          

          
        </div>
      </div>
      <SubscribeComponent/>
    </Layout>
  );
};

export default Article;


