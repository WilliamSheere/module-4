// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement= document.querySelector("main")
const backButton= document.querySelector("#back")
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement (){}
// TODO: Create a function that handles the case where there are no blog posts to display
function handleEmpty() {}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {}
// TODO: Call the `renderBlogList` function
renderBlogList()
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function(){
  redirectPage("index.html")
});