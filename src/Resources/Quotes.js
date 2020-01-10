const Quotes = [
    {
        quote: "Life is only as meaningfull as we fool ourselves into thinking it is.",
        by: "Unknown"
    }
];

const getRandomInt =  (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

const RandomQuote = () => {
    const len = Quotes.length;
    const index = getRandomInt(len - 1);
    return Quotes[index];
}

export const Quotes;