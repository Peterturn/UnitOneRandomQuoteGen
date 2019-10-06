/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
quotes selected at random from different affiliations, political parties, celeberities,
religouse leaders, and television series. Quotes are picked in regard to positive wording and not
according to any political or religious views they might hold.
*/

//Vars for the random color function named: 'Function prettyColors()' near end of JS document.
var red;
var blue;
var green;
var randomColor;

//Part one of coding project
//Object array to hold quotes for random quote generator.
var quotes =[
  {
    //Quote 1
  source: 'Peppa Pig' ,
    quote:'Everyone loves jumping up and down in muddy puddles!',
    citation: 'The Peppa Pig Series',
    tag:'television'
  },
  {
    //Quote 2
  source: 'King David Benjessi, ' ,
    quote:'God is our refuge and strength, an ever-present help in trouble.',
    citation: 'NKJV Bible, Psalm 46:1-3',
    tag:'religious'


  },
  {
    //Quote 3
    source: 'Steve Jobs' ,
      quote:'Design is not just what it looks like and feels like. Design is how it works. Innovation distinguishes between a leader and a follower. I want to put a ding in the universe.',
      tag:'business'
  },
  {
    //Quote 4
    source: 'Bill Gates' ,
      quote:'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
      tag:'business'
  },
  {
    //Quote 5
    source: 'Mother Teresa' ,
      quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier. Kind words can be short and easy to speak, but their echoes are truly endless.',
      tag:'religious'
  },
  {
    //Quote 6
    source: 'Ben Parker' ,
      quote:'With great power, comes great responsibility.',
      citation: 'Marvel Comics: The Amazing Spider-Man' ,
      tag:'comics'
  },
  {
    //Quote 7
    source: 'Jesus Christ' ,
      quote:'For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?',
      tag:'religious'
  },
  {
    //Quote 8
    source: 'David Hasselhoff' ,
      quote:'I am a cheesy over-the-top megalomaniac with a deep voice and the most amazing pecs.',
      tag:'celeberities'
  },
  {
    //Quote 9
    source: 'George W. Bush' ,
      quote:'Some folks look at me and see a certain swagger, which in Texas is called "walking."',
      tag:'politics'
  },
  {
    //Quote 10
    source: 'Donald Trump' ,
      quote:'No dream is too big. No challenge is too great. Nothing we want for our future is beyond our reach.',
      year: 'Nov 9, 2016',
      tag:'politics'

  },
  {
    //Quote 11
    source: 'Britney Spears' ,
      quote:'The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff.',
      tag:'celeberities'
  },
  {
    //Quote 12
    source: 'Barack Obama' ,
      quote: 'If you are walking down the right path and you are willing to keep walking, eventually you will make progress.',
      tag:'politics'
  }
];
//Log array to console to test 1st stage of code and check for errors.
//console.log(quotes);
//End of Part 1 coding project: console test positive


//Coding project part 2
//Function random quote uses a random number to select a quote form the object array.
function getRandomQuote(){
  //random number generator from zero to length of array
    var randomNum = Math.floor(Math.random() * quotes.length );
//var grabQuote returns one of the quotes from the array by concatenating array + randomNum
    var grabQuote = quotes[randomNum] ;
  return grabQuote;}

//Tests random quote generator in console
//console.log(getRandomQuote());
//End of part 2 coding project: console test positive


//coding project part 3
//Function grabs random quote by calling the quote function and then printing it with an HTML string.
function printQuote(){
  var randomQuote = getRandomQuote();
//Change background color with each new quote.
  prettyColors();

  //empty var for the html message
  var html= '';
  //using 'class' and 'id' to use the needed CSS styles and placement.
  html+='<p class="quote">'+ randomQuote.quote +' </p><br>';
  html+='<p class="source" >'+ randomQuote.source + '  <br>';

//'if' conditional statments for year, cittion, and tag when needed
  if(randomQuote.year)
  {html+='<span class="year"> date: ' + randomQuote.year + ' </span><br>';}
  if(randomQuote.citation){
    html+='<span class="citation"> ' + randomQuote.citation + ' </span><br>';}
  if(randomQuote.tag){
    html+='<span class="tag">' + randomQuote.tag + ' </span>';}
    html+= '</p>';

  var div = document.getElementById('quote-box');
    div.innerHTML = html;

}


/// Dont Touch This Code!
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(printQuote, 20000);
//color change function  'common code from TreeHouse workshop, MDN, and other code sources'
function prettyColors(){
  red = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  randomColor =  'rgb('+ red+ ',' + blue+ ',' + green +')';
//Changes the CSS background color each time the button is clicked
  document.body.style.backgroundColor = randomColor;
}
