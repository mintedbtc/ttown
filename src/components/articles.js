import React from "react";
import Card from "./card";
import { Link } from "gatsby";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
   
      
      
        <ul class="uk-list uk-center uk-width-2-2">
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
                <a id="article-link"
                  href={'/article/'+article.node.slug}
                  
                >
                  {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ' - ' + article.node.headline} 
                  </a>
              </li>
            );
          })}
          </ul>
          
     
     
    </div>
  );
};

export default Articles;