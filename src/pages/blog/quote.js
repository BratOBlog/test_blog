import React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

const MyQuote = () => {
  const data = useStaticQuery(graphql`
    query {
      customApi {
        quotes {
          quote
          author
        }
      }
    }
  `);

  const quotes = data.customApi.quotes;

  const [randomQuote, setRandomQuote] = useState(null);

  const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  setRandomQuote(quote);
  };

  useState(() => {
    generateRandomQuote();
  }, []);

  return (
    <div>
      {randomQuote && (
      <div key={randomQuote.quote}>
        <p className="italic">{randomQuote.quote}</p>
        <p>- {randomQuote.author}</p>
      </div>
      )}
    </div>
  );
};

export default MyQuote;