/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

/*
quotes selected at random from different affiliations, political parties, celeberities,
religouse leaders, and television series. Quotes are picked in regard to positive wording and not
according to any political or religious views they might hold.

*/

var quotes =[
  {
    //Quote 1
  author: 'Peppa Pig' ,
    quote:'Everyone loves jumping up and down in muddy puddles!',
    citation: 'The Peppa Pig Series',
    number:1
  },
  {
    //Quote 2
  author: 'King David Benjessi, ' ,
    quote:'God is our refuge and strength, an ever-present help in trouble.',
    citation: 'NKJV Bible, Psalm 46:1-3',
    number:2


  },
  {
    //Quote 3
    author: 'Steve Jobs' ,
      quote:'Design is not just what it looks like and feels like. Design is how it works. Innovation distinguishes between a leader and a follower. I want to put a ding in the universe.',
      number:3
  },
  {
    //Quote 4
    author: 'Bill Gates' ,
      quote:'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
      number:4
  },
  {
    //Quote 5
    author: 'Mother Teresa' ,
      quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier. Kind words can be short and easy to speak, but their echoes are truly endless.',
      number:5
  },
  {
    //Quote 6
    author: 'Bob Marley' ,
      quote:'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.',
      number:6
  },
  {
    //Quote 7
    author: 'Jesus Christ' ,
      quote:'For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?',
      number:7
  },
  {
    //Quote 8
    author: 'David Hasselhoff' ,
      quote:'I am a cheesy over-the-top megalomaniac with a deep voice and the most amazing pecs.',
      number:8
  },
  {
    //Quote 9
    author: 'George W. Bush' ,
      quote:'Some folks look at me and see a certain swagger, which in Texas is called "walking."',
      number:9
  },
  {
    //Quote 10
    author: 'Donald Trump' ,
      quote:'No dream is too big. No challenge is too great. Nothing we want for our future is beyond our reach.',
      year: 'Nov 9, 2016',
      number:10

  },
  {
    //Quote 11
    author: 'Britney Spears' ,
      quote:'The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff.',
      number:11
  },
  {
    //Quote 12
    author: 'Barack Obama' ,
      quote: 'If you are walking down the right path and you are willing to keep walking, eventually you will make progress.',
      number:12
  }
];

console.log(quotes);

var message;
var citation;

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  //random number generator from zero to length of array
    var randomNum = Math.floor(Math.random() * quotes.length );
//Array loop
for ( var i=0; i<quotes.length; i++ ){
//var grabQuote should return one of the quotes from the array by concatenating array + randomNum
    var grabQuote = quotes[randomNum] ;
  return grabQuote;}
}

console.log(getRandomQuote());

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var html= '';
  html+='<h2>'+ quotes[i].quote + ' -'+ quotes[i].author +'<br>' + quotes[i].citation + ' ' + quotes[i].year + '</h2>';
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
