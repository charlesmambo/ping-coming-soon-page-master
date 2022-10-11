const formEl = document.getElementById("form");
const inputEl = document.getElementById("email");
const errorMessage = document.getElementById("error-message")

formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    checkInputs()
});

function checkInputs(){
    const inputValue = inputEl.value;
    if (inputValue === ""){
        errorMessage.textContent = "Email cannot be empty" 
    }else if (!isEmail(inputValue)){
        errorMessage.textContent = "Please provide a valid email addres"
        inputEl.style.borderColor = "hsl(354, 100%, 66%)";
    }else{
        inputEl.style.borderColor = "#06FF00";
        errorMessage.textContent = "";
        inputEl.value = "";
    }
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}