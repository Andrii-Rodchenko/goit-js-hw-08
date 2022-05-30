
import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form")
const inputEl = document.querySelector(".feedback-form input")
const textareaEl = document.querySelector(".feedback-form textarea")

formEl.addEventListener("input", throttle(handleFormInput, 500))

formEl.addEventListener("submit", handleFormSubmission)

const STORAGE_KEY = "feedback-form-state";
const localStorageData = localStorage.getItem(STORAGE_KEY);
const objectWithLocalStorage = JSON.parse(localStorageData) || "";

const formData = { };


function handleFormInput({ target }) { 
    if (target.name !== "email")
    {
        formData.email = inputEl.value;
    }
    else if (target.name !== "message") {
         formData.message = textareaEl.value;
}
    formData[target.name] = target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

handleLoadingPage()

function handleLoadingPage() {
        try { inputEl.value = objectWithLocalStorage.email || "" ;
            textareaEl.value = objectWithLocalStorage.message || "";
    } 
        catch { return console.log(null)  };
        }

function handleFormSubmission(event) {
    event.preventDefault() 
    console.log(formData)
    localStorage.clear();
    formEl.reset()
}


