const form=document.querySelector("form")
function handleFormSubmit(event){
    event.preventDefault()
   const usernameInput = document.querySelector("#username");
     const titleInput = document.querySelector ("#title")
     const contentInput = document.querySelector ("#content")
     const errorElement= document.querySelector ("#error")
     if (!usernameInput.value || !titleInput.value || !contentInput.value){
        errorElement.textContent = "Please complete the form."
     }
     const formData = {
        username:usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
     }
     storeLocalStorage (formData)
     redirectPage ("blog.html")
}

form.addEventListener("submit", handleFormSubmit)