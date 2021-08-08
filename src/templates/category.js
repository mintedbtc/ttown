import React from "react";
import { graphql } from "gatsby";
import PostsComponent from "../components/posts";
import Layout from "../components/layout";

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiPost(
      filter: { topic: { eq: $slug } }
    ) {
      edges {
        node {
          slug
          title
          topic
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug}) {
      name
    }
  }
`;

const Category = ({ data }) => {
  console.log(data)
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <Layout seo={seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          {/* <PostsComponent articles={articles} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Category;