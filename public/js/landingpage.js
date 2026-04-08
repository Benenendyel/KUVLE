/* commenting this out to stop it from occuring whenever i open index.html while the server is running
fetch("/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "testuser123",
    password: "venangel",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

const signinBtn = document.querySelector("#signInButton");
const signupBtn = document.querySelector("#signUpButton");
const closeAuthBtn = document.querySelector("#closeAuthButton");

const switchToSignupButton = document.querySelector("#switchToSignup");
const switchToSigninButton = document.querySelector("#switchToSignin");

const authModal = document.querySelector("#authModal");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");

const body = document.querySelector("body");
const html = document.querySelector("html");

const authModalFunction = {
  loginModalOpen() {
    body.classList.add("overflow-hidden");
    html.classList.add("overflow-hidden");
    authModal.classList.remove("hidden");
    loginForm.classList.remove("hidden");
  },

  registerModalOpen() {
    body.classList.add("overflow-hidden");
    html.classList.add("overflow-hidden");
    authModal.classList.remove("hidden");
    registerForm.classList.remove("hidden");
  },

  closeAuthModal() {
    body.classList.remove("overflow-hidden");
    html.classList.remove("overflow-hidden");
    authModal.classList.add("hidden");
    registerForm.classList.add("hidden");
    loginForm.classList.add("hidden");
  },

  switchSignIn() {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  },

  switchSignup() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  },
};

// switch form buttons
switchToSigninButton.addEventListener("click", authModalFunction.switchSignIn);
switchToSignupButton.addEventListener("click", authModalFunction.switchSignup);

// modal buttons
signinBtn.addEventListener("click", authModalFunction.loginModalOpen);
signupBtn.addEventListener("click", authModalFunction.registerModalOpen);
closeAuthBtn.addEventListener("click", authModalFunction.closeAuthModal);

// this section is just for the handling of the dropdown list
const dropdownButton = document.querySelector("#dropdownButton");

dropdownButton.addEventListener("click", () => {
  const dropdownList = document.querySelector("#dropdownList");
  dropdownList.classList.toggle("hidden");

  const buttonRect = dropdownButton.getBoundingClientRect();
  const spaceBelow = window.innerHeight - buttonRect.bottom;
  const spaceNeeded = dropdownList.offsetHeight;

  if (spaceBelow >= spaceNeeded) {
    // enough space below — show dropdown below
    dropdownList.classList.remove("bottom-full", "mb-1");
    dropdownList.classList.add("top-full", "mt-1");
  } else {
    // not enough space — show dropdown above
    dropdownList.classList.remove("top-full", "mt-1");
    dropdownList.classList.add("bottom-full", "mb-1");
  }
});

function userType(text) {
  const userTypeInput = document.querySelector("#userTypeInput");

  userTypeInput.value = text;
}
