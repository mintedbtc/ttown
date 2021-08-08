import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Markdown from "react-markdown";

const Card = ({ article }) => {
  let dt = new Date(article.node.date)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        {/* <div className="uk-card-media-top" style={{maxWidth: "100px", maxHeight: "100px"}}>
          
          <GatsbyImage image={article.node.image.childImageSharp.gatsbyImageData} imgStyle={{ position: "static",  maxWidth: "100px", maxHeight: "100px" }} />
        </div> */}
        <div className="uk-card-body">
          {/* <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p> */}
          <p id="title" className="uk-text-large uk-text-center">
          {monthNames[dt.getMonth()] + ' '+ dt.getDate() + ', '+ dt.getFullYear() + ' - ' + article.node.headline} 
          </p>
          {article.node.posts.map(post => {
            
            return (
                    <div hidden>
                        <h5 hidden>{post.topic}</h5>
                        <h3 hidden>{post.title}</h3>
                    <Markdown hidden source={post.content} escapeHtml={false} />
                    </div>
            )
        })}
          <div>
            <hr className="uk-divider-small" />
            {/* <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div style={{maxWidth: "100px", maxHeight: "100px"}}>
                {article.node.author.picture && (
                  
                  <GatsbyImage image={article.node.author.picture.childImageSharp.gatsbyImageData} imgStyle={{ position: "static", borderRadius: "50%", maxWidth: "25px", maxHeight: "25px" }} />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {article.node.author.name}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;