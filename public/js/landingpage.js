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

const signupBtn = document.querySelector("#signUpButton");
const closeAuthBtn = document.querySelector("#closeAuthButton");

const authModalFunction = {
  registerModalOpen() {
    const authModal = document.querySelector("#authModal");
    const registerForm = document.querySelector("#registerForm");
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    body.classList.add("overflow-hidden");
    html.classList.add("overflow-hidden");
    authModal.classList.remove("hidden");
    registerForm.classList.remove("hidden");
  },

  closeAuthModal() {
    const authModal = document.querySelector("#authModal");
    const registerForm = document.querySelector("#registerForm");
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    body.classList.remove("overflow-hidden");
    html.classList.remove("overflow-hidden");
    authModal.classList.add("hidden");
    registerForm.classList.add("hidden");
  },
};

signupBtn.addEventListener("click", authModalFunction.registerModalOpen);
closeAuthBtn.addEventListener("click", authModalFunction.closeAuthModal);
