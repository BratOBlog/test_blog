import React from "react";
import { graphql } from "gatsby";

const MyQuote = ({ data }) => {
  const quotes = data.customApi.quotes;

  return (
    <div>
      {quotes.map(({ quote, author }, index) => (
        <div key={index}>
          <p>{quote}</p>
          <p>- {author}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    customApi {
      quotes {
        quote
        author
      }
    }
  }
`;

export default MyQuote;
