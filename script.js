let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    const quoteElement = document.querySelector("#quote-of-the-day").textContent = `"${
      quoteElement.textContent = '"${quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener
  //Accessing DOM Elements (Querying)
  // Part 1
  const mainTitle = document.querySelector("#mainTitle");
  mainTitle.textContent = "DOM TORETTO";

  // Part 2
  //Select the bodyand change the background-color to a new color of your choice.

  const bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = "purple";

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item
  document.addEventListener("DOMContentLoaded", function(){
    const favoriteThingsList = document.querySelector('favorite-thing-list');
  })
    //remove lastItem
  favoriteThingsList.removeChild(favoriteThingsList.lastElementChild)("li:last-child");
});

  // Part 4
  //Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
  const specialtitle = document.querySelectorAll(".special-title");
  specialTitleElements.forEach((element) => {
    element.style.fontSize = "2 rem";
  });

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  
const pastRacesList = document.QuerySelector('past-races');
const chicagoListItem = pastRacesList.querySelector('li:contains("Chicago")');
if(chicagoListItem){
  chicagoListItem.remove();
}
  //Creating New DOM Elements
  ////Part 6
  //Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
  const cityNeme = 'Princeton';

  const newCityListItem = docucument.createElement("li");
  newCityListItem.textContent = cityNeme;
  document.querySelector("#past-races").appentChild(newCityListItem);

  // Part 7
  // const blogdiv = document.createElement("div");
const mainDiv = document.querySelector('.main');
  
const divBlogPost = document.createElement('div');
divBlogPost.classList.add('blog-post', 'purple');
//newBlogPost.classList.add('blogPost');

//create a new h2
const h2heading = document.createElement('h2');
h2heading.textContent = "Princeton";
h2heading.style.color = "white";

//creaate a new <p></p>with some text content
const newPara = document.createElement('p');
newPara.textContent = "I ENJOYED TRAVELLING THE GREEK ILES.";

//newPara = document.createElement

divBlogPost.appendChild(h2heading);
divBlogPost.appendChild(newPara);
mainDiv.appendChild(divBlogPost);

  //Event Handlers
  // Part 8
  //When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function:
function randomQuote() {
  const quotes = ["Quote 1", "Quote 2", "Quote 3" ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
}

window.addEventListener('laod', () => {
  randomQuote();
})

  // Part 9
// Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach((item) => {
    item.addEventListener("mouseout", () => {
      item.classList.toggle("purple");
    });
    item.addEventListener("mouseenter", ()=> {
      item.classList.toggle("red");
    });
  });

// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red
// Test it out!

//Hint:

// Remember the document node property .classListand the document node method .toggle().
