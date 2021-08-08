import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Stories = ({ stories }) => {
  const breakpoints = useBreakpoint()
  console.log(stories)

  return (
    
    <div>
   
   {breakpoints.sm ? 
    (
      
      <ul class="uk-list uk-list-divider uk-text-center uk-width-8-8">
      {stories.map((story, i) => {
        let dt = new Date(story.node.publishedAt)
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
        return (
          // <Card
          //   article={article}
          //   key={`article__left__${article.node.slug}`}
          // />
          <li key={`story__left__${story.node.slug}`}>
            
            
               <a id="story-link"
                  href={'/story/'+story.node.slug}
                  // state={{ postId: post.id }}
                  style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"20px",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}} >
                    <strong>{story.node.title}</strong></a>
                  <p style={{color:"black"}}>{"Published " + monthNames[dt.getMonth()] + ' '+ dt.getDate() } | {"Written by "+story.node.author.name}</p>
                  <br></br>
              
              
          </li>
        );
      })}
      </ul>
    )
    :
    (
      
        <ul class="uk-list uk-list-divider uk-text-center uk-width-2-3">
          {stories.map((story, i) => {
            let dt = new Date(story.node.publishedAt)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li key={`story__left__${story.node.slug}`}>
                
                
                   <a id="story-link"
                      href={'/story/'+story.node.slug}
                      // state={{ postId: post.id }}
                      style={{fontFamily:"Helvetica,Arial,sans-serif",fontSize:"20px",fontWeight:"700",marginBottom:"0",lineHeight:"26px",marginTop:"8px"}} >
                        <strong>{story.node.title}</strong></a>
                      <p style={{color:"black"}}>{"Published " + monthNames[dt.getMonth()] + ' '+ dt.getDate() } | {"Written by "+story.node.author.name}</p>
                      <br></br>
                  
                  
              </li>
            );
          })}
          </ul>
    )}
     
     
    </div>
  );
};

export default Stories;