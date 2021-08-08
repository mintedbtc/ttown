import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import "../assets/css/main.css";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Jobs = ({ jobs }) => {
  const breakpoints = useBreakpoint()
  console.log(jobs)

  return (
    
    <div>
   
   {breakpoints.sm ? 
    (
      
      <ul className="uk-list uk-list-divider uk-width-8-8">
           {jobs.map((job, i) => {
            let dt = new Date(job.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          if (job.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="mobile-job" style={{backgroundColor:"#FFFFE0"}} key={`job__left__${job.node.slug}`}>
                
                
                   <a
                      className="job-mobile"
                      href={'/jobs/'+job.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company-mobile">{job.node.organization}</span>
                        <br></br>
                        <div className="job-middle-section">
                        <img width="35" height="35" src={job.node.logo.publicURL}/>
                        <span className="title-mobile">{job.node.title}</span>
                        <span className="date-mobile">Featured</span>
                        </div>
                        <br></br>
                        <span className="location-company-mobile">{job.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          }
          })
          
        }

        {jobs.map((job, i) => {
            let dt = new Date(job.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        if (job.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="mobile-job" key={`job__left__${job.node.slug}`}>
                
                
                   <a
                      className="job-mobile"
                      href={'/jobs/'+job.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company-mobile">{job.node.organization}</span>
                        <br></br>
                        <div className="job-middle-section">
                        <img width="35" height="35" src={job.node.logo.publicURL}/>
                        <span className="title-mobile">{job.node.title}</span>
                        <span className="date-mobile">{"Posted " + monthNames[dt.getMonth()] + ' '+ dt.getDate()}</span>
                        </div>
                        <br></br>
                        <span className="location-company-mobile">{job.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          
        }
      })
          
    }
      
      </ul>
    )
    :
    (
      
        <ul className="uk-list uk-list-divider uk-width-8-8">
          {jobs.map((job, i) => {
            let dt = new Date(job.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          if (job.node.type === 'Featured') {
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="job" style={{backgroundColor:"#FFFFE0"}} key={`job__left__${job.node.slug}`}>
                
                
                   <a
                      className="job"
                      href={'/jobs/'+job.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company">{job.node.organization}</span>
                        <br></br>
                        <div className="job-middle-section">
                        <img width="35" height="35" src={job.node.logo.publicURL}/>
                        <span className="title">{job.node.title}</span>
                        <span className="date">Featured</span>
                        </div>
                        <br></br>
                        <span className="location company">{job.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          }
          })
          
        }

        {jobs.map((job, i) => {
            let dt = new Date(job.node.published_at)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
        if (job.node.type !== 'Featured') {
            
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li className="job" key={`job__left__${job.node.slug}`}>
                
                
                   <a
                      className="job"
                      href={'/jobs/'+job.node.slug}
                      // state={{ postId: post.id }}
                      >
                       
                        
                        <span className="company">{job.node.organization}</span>
                        <br></br>
                        <div className="job-middle-section">
                        <img width="35" height="35" src={job.node.logo.publicURL}/>
                        <span className="title">{job.node.title}</span>
                        <span className="date">{"Posted " + monthNames[dt.getMonth()] + ' '+ dt.getDate()}</span>
                        </div>
                        <br></br>
                        <span className="location company">{job.node.location}</span>
                        
                        
                        </a>
                      
                  
                  
              </li>
            );
          
        }
      })
          
    }
        
          </ul>
    )}
     
     
    </div>
  );
};

export default Jobs;