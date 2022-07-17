// login screen
const loginBox = document.querySelector(".logins");
const loginForm = document.querySelector(".loginForm");
const input = document.querySelector(".loginForm__input");

// main screen
const contentRight = document.querySelector(".main-box .content-right");
const greeting = document.querySelector(".greeting");
const h1 = document.querySelector(".greeting h1");
const logoutForm = document.querySelector(".logout-form");

//hidden classname variable
const HIDDEN_CLASS = "hidden";

//name
const localName = localStorage.getItem("name");

if (localStorage.getItem("name") === null) {
  loginBox.classList.remove(HIDDEN_CLASS);
} else {
  h1.innerHTML = `Hi, ${localName}`;
}

const handleAccess = {
  login: function (event) {
    event.preventDefault();

    const name = input.value;
    h1.innerHTML = "Hi, " + name;
    greeting.prepend(h1);
    localStorage.setItem("name", name);
    input.value = "";

    greeting.classList.remove(HIDDEN_CLASS);
    loginBox.classList.add(HIDDEN_CLASS);
  },
  logout: function (event) {
    event.preventDefault();
    const h1 = document.querySelector(".greeting h1");
    h1.innerHTML = "";
    localStorage.removeItem("name");
    greeting.classList.add(HIDDEN_CLASS);

    loginBox.classList.remove(HIDDEN_CLASS);
  },
};

loginForm.addEventListener("submit", handleAccess.login);
logoutForm.addEventListener("click", handleAccess.logout);
