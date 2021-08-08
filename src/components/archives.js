import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Archives = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
  const breakpoints = useBreakpoint()
  return (
   
   
   <div>
   
   {breakpoints.sm ? 
    (
      
        <ul class="uk-list uk-list-divider uk-center uk-width-7-8">
          {articles.map((article, i) => {
            let dt = new Date(article.node.date)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li key={`article__left__${article.node.slug}`}>
                <a id="archive-link"
                  href={'/article/'+article.node.slug}
                  
                >
                  {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.node.headline} 
                  </a>
              </li>
            );
          })}
          </ul>
    )
    :
    (
      <ul class="uk-list uk-list-divider uk-center uk-width-1-2">
          {articles.map((article, i) => {
            let dt = new Date(article.node.date)
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
            return (
              // <Card
              //   article={article}
              //   key={`article__left__${article.node.slug}`}
              // />
              <li key={`article__left__${article.node.slug}`}>
                <a id="archive-link"
                  href={'/article/'+article.node.slug}
                  
                >
                  {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.node.headline} 
                  </a>
              </li>
            );
          })}
          </ul>
    )}
     
     
    </div>
  );
};

export default Archives;