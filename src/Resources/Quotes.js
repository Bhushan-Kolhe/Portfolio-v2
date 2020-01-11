const Quotes = [
    {
        quote: "Life is only as meaningful as we fool ourselves into believing it is.",
        by: "Unknown"
    },
    {
        quote: "The storms come and go, the big fish eat the little fish and I keep on paddling.",
        by: "Lord Varys "
    },
    {
        quote: "I need you to become the man you were always meant to be. Not next year, not tomorrow, now.",
        by: "Tywin Lannister"
    },
    {
        quote: "A mind needs books like a sword needs a whetstone.",
        by: "Tyrion Lannister"
    },
    {
        quote: "The world is overflowing with horrible things, but they’re all a tray of cakes next to death.",
        by: "Olenna Tyrell"
    },
    {
        quote: "I was nothing at all. And when you’re nothing at all, there’s no reason to be afraid.",
        by: "Samwell Tarly"
    },
    {
        quote: "Some people are fortunate enough to be born into the right family. Others have to find their own way.",
        by: "Petyr Baelish"
    },
    {
        quote: "When you play the game of thrones, you win or you die. There is no middle ground.",
        by: "Cersei Lannister"
    },
    {
        quote: "Only by admitting what we are can we get what we want.",
        by: "Petyr Baelish"
    },
    {
        quote: "Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding.",
        by: "Jaime Lannister"
    },
    {
        quote: "A man without friends is a man without power.",
        by: "Renly Baratheon"
    },
    {
        quote: "A lion doesn’t concern himself with the opinions of the sheep.",
        by: "Tywin Lannister"
    },
    {
        quote: "So many men, they risk so little. They spend their lives avoiding danger. And then they die.",
        by: "Petyr Baelish"
    },
    {
        quote: "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
        by: "Tyrion Lannister"
    },
    {
        quote: "The past is the past, the future is all that is worth discussing.",
        by: "Petyr Baelish"
    },
    {
        quote: "A king who runs will not be king for long.",
        by: "Tywin Lannister"
    },
    {
        quote: "A lot can happen between now and never.",
        by: "Petyr Baelish"
    },
    {
        quote: "Knowledge is power.",
        by: "Petyr Baelish"
    },
    {
        quote: "People die at their dinner tables, die in their beds. They die squatting over their chamberpots. Everybody dies, sooner or later. Don’t worry about your death. Worry about your life. Take charge of your life, for as long as it lasts.",
        by: "Petyr Baelish"
    },
    {
        quote: "The breaking of a wave cannot explain the whole sea.",
        by: "Vladimir Nabokov"
    },
    {
        quote: "Don’t be pushed by your problems. Be led by your dreams.",
        by: "Ralph Waldo Emerson"
    },
    {
        quote: "True self-care is not salt baths and chocolate cake, it is making the choice to build a life you don’t need to regularly escape from.",
        by: "Brianna Wiest"
    },
    {
        quote: "You have to become the kind of person who deserves the life you want.",
        by: "Brianna Wiest"
    },
    {
        quote: "Open your heart to the sky. Live.",
        by: "Adam Gnade"
    },
    {
        quote: "Most people never pick up the phone, most people never ask. And that’s what separates the people that do things from the people that just dream about them. You gotta act. And you gotta be willing to fail.",
        by: "Steve Jobs"
    },
    {
        quote: "Everyone has doubts. Everyone freaks out about where they are in life. But that’s a good thing. You’re open to change and growth.",
        by: "Ari Eastman"
    },
    {
        quote: "If you’re going to have a story, have a big story.",
        by: "Joseph Campbell"
    },
    {
        quote: "Life is not a series of problems to be solved, it’s a journey that you should be fascinated by.",
        by: "Brianna Wiest"
    },
    {
        quote: "You can, you should, and if you’re brave enough to start, you will.",
        by: "Stephen King"
    },
    {
        quote: "You can only try your best. And if they can’t appreciate that, it’s their fault, not yours.",
        by: "Unknown"
    },
    {
        quote: "Normality is a paved road: It’s comfortable to walk,﻿ but no flowers grow on it.",
        by: "Vincent Van Gogh"
    },
    {
        quote: "The ship is safest when it is in port, but that’s not what ships were built for.",
        by: "Paulo Coelho"
    },
    {
        quote: "You have the power and control to be whatever you want to be, no matter where you start in life.",
        by: "Joey Graceffa"
    },
    {
        quote: "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn’t trying.",
        by: "Tony Robbins"
    },
    {
        quote: "Within you is a light that is brighter than the belittling words of those who are afraid of your potential. Within you is an entire universe, just waiting to be built.",
        by: "Shahida Arabi"
    },
    {
        quote: "Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.",
        by: "Michael Jordan"
    },
    {
        quote: "Forget all the reasons it won’t work and believe the one reason that it will.",
        by: "Anonymous"
    },
    {
        quote: "The minute you choose to do what you really want to do, it's a different kind of life.",
        by: "Buckminster Fuller"
    },
    {
        quote: "Don't be pushed by your problems; be led by your dreams.",
        by: "Joe Tichio"
    },
    {
        quote: "The ship is safest when it is in port, but that’s not what ships were built for.",
        by: "Paulo Coelho"
    },

];

const getRandomInt =  (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

const RandomQuote = () => {
    const len = Quotes.length;
    const index = getRandomInt(len - 1);
    return Quotes[index];
}

export default RandomQuote;