// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton = document.querySelector("#back");
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(type, text, parent) {
	const element = document.createElement(type);
	element.textContent = text;
	parent.appendChild(element);
	return element;
}
// TODO: Create a function that handles the case where there are no blog posts to display
function handleEmpty() {
	buildElement("h2", "No Blog posts yet...", mainElement);
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
	const blogs = readLocalStorage();
	if (blogs.length === 0) {
		return handleEmpty();
	}
	for (let i = 0; i < blogs.length; i++) {
		const container = buildElement("div", null, mainElement);
		container.setAttribute("class", "card");
		buildElement("h2", blogs[i].title, container);
		buildElement("p", blogs[i].content, container);
		buildElement("div", blogs[i].username, container);
	}
}
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function () {
	redirectPage("index.html");
});
