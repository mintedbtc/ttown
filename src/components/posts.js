import React from "react";
import Card from "./card";
import { Link } from "gatsby";

const Posts = ({ posts }) => {
  const leftPostsCount = Math.ceil(posts.length / 5);
  const leftPosts = posts.slice(0, leftPostsCount);
  const rightPosts = posts.slice(leftPostsCount, posts.length);

  return (
    <div>
   
      
      
        <ul class="uk-list uk-center uk-width-2-2">
          {posts.map((post, i) => {
            let dt = new Date(post.node.date)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
            return (
              // <Card
              //   post={post}
              //   key={`post__left__${post.node.slug}`}
              // />
              <li key={`post__left__${post.node.slug}`}>
                <a id="post-link"
                  href={'/post/'+post.node.slug}
                  
                >
                  {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + post.node.headline} 
                  </a>
              </li>
            );
          })}
          </ul>
          
     
     
    </div>
  );
};

export default Posts;