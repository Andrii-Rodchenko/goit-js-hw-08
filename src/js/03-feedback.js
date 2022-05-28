
import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form")
const inputEl = document.querySelector(".feedback-form input")
const textareaEl = document.querySelector(".feedback-form textarea")


formEl.addEventListener("input", throttle(handleFormInput, 500))
document.addEventListener("DOMContentLoaded", handleLoadingPage);
formEl.addEventListener("submit", handleFormSubmission)
const STORAGEKEY = "feedback-form-state";
const formData = {
    email: "",
    message: ""};

function handleLoadingPage() {
    const localStorageData = localStorage.getItem(STORAGEKEY )
    if (localStorageData !== "") {
        try { const result = JSON.parse(localStorage.getItem(STORAGEKEY ))
            inputEl.value = result.email;
            textareaEl.value = result.message;}
        catch { return null };
        }
    else {
        inputEl.value = "";
        textareaEl.value = ""; 
    }
}

function handleFormInput({target}) { 
    formData[target.name] = target.value;
    localStorage.setItem(STORAGEKEY, JSON.stringify(formData));

}

function handleFormSubmission(event) {
    event.preventDefault() 
    console.log(formData)
    localStorage.clear();
    inputEl.value = "";
    textareaEl.value = "";
}


