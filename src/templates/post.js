import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import SubscribeComponent from "../components/subscribe";
import "../assets/css/main.css";

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const query = graphql`
  query PostQuery($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      strapiId
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
      
    }
  
`;

const Post = ({ data }) => {
  const breakpoints = useBreakpoint();
  const post = data.strapiPost;
  const seo = {
    metaTitle: post.title,
    metaDescription: post.title,
    shareImage: post.coverImage,
    post: true,
  };
  console.log(seo)
  const header = post.title;
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dt = new Date(post.date)

let givenDate = new Date('2021-01-05')
let currentDate = new Date(post.date)

post.content = post.content.split('class="ql-align-center"').join('class="ql-align-center" style="text-align:center; margin-left:auto;margin-right:auto;display:block;width:50%"')
post.content = post.content.split('<em>').join('<em style="color:black">')

post.content = post.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=')
post.content = post.content.split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=')
console.log(post.content)
console.log(post.photoCredit)
  return (
    <Layout seo={seo}>
      <div>
        
          <h2 className="uk-text-center" style={{paddingTop:"3%",marginTop:"3%"}}>{post.title}</h2>


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
              
            <td width="100%" style={{paddingBottom:"25px"}}><img style={{width:"100%",height:"288px",maxHeight:"165px"}} src="https://nwa-daily-photos.s3.amazonaws.com/OPG_Qp_Jd_Qqils_B_Eitd_D_Gl_985ded29be"/></td>
            
            </tr>
            </table>
            
            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

          
            
            
            
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
              <a href="/" target="_blank" style={{color:"#000000!important",textDecoration:"none",borderBottom:"none!important"}}>
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
                      <td style={{padding:"15px"}}>
                      <div key={post.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:post.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666">').split('<li>').join('<li style="padding-bottom:10px">')}}></div>
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
              <a href="/" target="_blank" style={{color:"#000000!important",textDecoration:"none",borderBottom:"none!important"}}>
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
                      <td style={{padding:"15px"}}>
                    {/* <Markdown source={post.content} escapeHtml={false} /> */}
                    <div key={post.strapiId} style={{color:"black"}} dangerouslySetInnerHTML={{__html:post.content.split('a title=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" title=').split('a href=').join('a style="border-bottom:2px solid #307765;text-decoration:none;color:#333" href=').split('<em>').join('<em style="color:#666">').split('<li>').join('<li style="padding-bottom:10px">')}}></div>
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
            </div>
        )}
          
        </div>
      </div>
      <SubscribeComponent/>
    </Layout>
  );
};

export default Post;