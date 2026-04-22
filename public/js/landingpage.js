const getStartedBtn = document.querySelector("#getStartedButton");

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
  openModal() {
    body.classList.add("overflow-hidden");
    html.classList.add("overflow-hidden");
    authModal.classList.remove("hidden");
  },

  closeAuthModal() {
    body.classList.remove("overflow-hidden");
    html.classList.remove("overflow-hidden");
    authModal.classList.add("hidden");
    registerForm.classList.add("hidden");
    loginForm.classList.add("hidden");
  },

  loginModalOpen() {
    this.openModal();
    loginForm.classList.remove("hidden");
  },

  registerModalOpen() {
    this.openModal();
    registerForm.classList.remove("hidden");
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

// for handling the show password text
const showPasswordText = (button, input) => {
  const showButton = document.querySelector(button);
  const showInput = document.querySelector(input);

  showButton.addEventListener("click", () => {
    showInput.type = showInput.type === "password" ? "text" : "password";
    showButton.textContent = showInput.type === "password" ? "Show" : "Hide";
  });
};

showPasswordText("#showPasswordButtonLogin", "#passwordInputLogin");
showPasswordText("#showPasswordButtonRegister", "#passwordInputRegister");

// switch form buttons
switchToSigninButton.addEventListener("click", () =>
  authModalFunction.switchSignIn(),
);
switchToSignupButton.addEventListener("click", () =>
  authModalFunction.switchSignup(),
);

// modal buttons
getStartedBtn.addEventListener("click", () =>
  authModalFunction.registerModalOpen(),
);

signinBtn.addEventListener("click", () => authModalFunction.loginModalOpen());
signupBtn.addEventListener("click", () =>
  authModalFunction.registerModalOpen(),
);
closeAuthBtn.addEventListener("click", () =>
  authModalFunction.closeAuthModal(),
);

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

// This part handles the login and registration
const registerButton = document.querySelector("#registerButton");
const loginButton = document.querySelector("#loginButton");

const authentications = {
  login: () => {
    const email = document.querySelector("#emailInputLogin").value.trim();
    const password = document.querySelector("#passwordInputLogin").value.trim();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          authModalFunction.closeAuthModal();
          document.querySelector("#emailInputLogin").value = "";
          document.querySelector("#passwordInputLogin").value = "";

          window.alert(data.message);
        } else {
          window.alert(data.message);
        }
      })
      .catch((error) => console.error(error));
  },

  register: () => {
    const firstname = document.querySelector("#firstNameInput").value.trim();
    const lastname = document.querySelector("#lastNameInput").value.trim();
    const email = document.querySelector("#emailInputRegister").value.trim();
    const password = document
      .querySelector("#passwordInputRegister")
      .value.trim();
    const usertype = document.querySelector("#userTypeInput").value.trim();

    if (firstname && lastname && email && password && usertype) {
      fetch("/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          usertype,
        }),
      })
        .then((message) => message.json())
        .then((message) => console.log(message))
        .catch((error) => console.error(error));
    } else {
      window.alert("All input fields must be filled.");
    }
  },
};

loginButton.addEventListener("click", authentications.login);
registerButton.addEventListener("click", authentications.register);
