/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//1 done
const pNodes = document.querySelectorAll("p");
console.log(pNodes);

//2 done
const firstDiv = document.querySelector("div");
console.log(firstDiv);

//3
const jumbotronTextElement = document.querySelector("#jumbotronText");
console.log(jumbotronTextElement);

//4
const primaryContentP = document.querySelectorAll(".primary-content p");
console.log(primaryContentP);
/*CLASS PRACTICE
const bikesForRefugeesElement = document.querySelector(".display-3");
console.log(bikesForRefugeesElement);

const h1Elements = document.querySelectorAll("h1");
console.log(h1Elements);*/
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const changeColourButton = document.querySelector("#bgrChangeBtn");
changeColourButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const pageLinksIncrease = document.querySelector("#largerLinksBtn");
pageLinksIncrease.addEventListener("click", () => {
  const allLinks = document.querySelectorAll("a");
  for (let link of allLinks) {
    link.style.fontSize = "50px";
  }
});

/*const func = () => {
  const allLinks = document.querySelectorAll("a");
  for (let link of allLinks) {
    link.style.fontSize = "50px";
  }
};
*/
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
/*const addSomeTextButton = document.querySelector("#addArticleBtn");
addSomeTextButton.addEventListener("click", () => {});

const newParagraphElement = document.createElement("p");
newParagraphElement.innerText = "some inner text";
newParagraphElement.className = "row";

const footerElement = document.querySelector(".site-footer");
footerElement.appendChild(newParagraphElement);*/

const addSomeTextButton = document.querySelector("#addArticleBtn"); //good
addSomeTextButton.addEventListener("click", () => {
  const paragraph = document.createElement("p"); //good

  let inputText = document.querySelector("#addArticleInput");
  const inputValue = inputText.value;

  paragraph.innerText = inputValue;

  const parent = document.querySelector("#addArticle");
  parent.appendChild(paragraph);
});
