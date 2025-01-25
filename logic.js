// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const modeButton = document.querySelector("#toggle");
function handleModeToggle() {}
modeButton.addEventListener("click", handleModeToggle);
// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
	const storeLocalStorageBlogs = localStorage.getItem("blogs");
	if (!storeLocalStorageBlogs) {
		return [];
	} else {
		return JSON.parse(storeLocalStorageBlogs);
	}
}
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(data) {
	const blogs = readLocalStorage();
	blogs.push(data);
	localStorage.setItem("blogs", JSON.stringify(blogs));
}
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
	redirectURL = url;
	location.assign(url);
};
