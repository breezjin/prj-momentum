const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();
    const typedUsername = loginInput.value;
    localStorage.setItem("username", typedUsername);
    greeting.innerText = `어서오세요~ ${typedUsername}님. 모멘텀에 오신것을 환영합니다.`;
    handleLoginForm();
    console.log(typedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);

function handleLoginForm() {
    loginForm.classList.add("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    //defalt
    loginForm.classList.remove("hidden");
    greeting.isDefaultNamespace();
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.innerText = `어서오세요~ ${savedUsername}님. 모멘텀에 오신것을 환영합니다.`;
    handleLoginForm();
}