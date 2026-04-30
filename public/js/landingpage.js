const getStartedBtn = document.querySelector("#getStartedButton");
const startLearningBtn = document.querySelector("#startLearningButton");

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
  clearInputs: () => {
    document.querySelector("#emailInputLogin").value = "";
    document.querySelector("#passwordInputLogin").value = "";
    document.querySelector("#rememberMeCheckbox").checked = false;
    document.querySelector("#firstNameInput").value = "";
    document.querySelector("#lastNameInput").value = "";
    document.querySelector("#emailInputRegister").value = "";
    document.querySelector("#passwordInputRegister").value = "";
    document.querySelector("#userTypeInput").value = "";

    document.querySelector("#passwordInputRegister").type = "password";
    document.querySelector("#showPasswordButtonRegister").textContent = "Show";
    document.querySelector("#passwordInputLogin").type = "password";
    document.querySelector("#showPasswordButtonLogin").textContent = "Show";

    document.querySelector("#acceptPolicyCheckbox").checked = false;
    document.querySelector("#rememberMeCheckbox").checked = false;

    loginButtonValidate();
    registerButtonValidate();
  },

  openModal() {
    body.classList.add("overflow-hidden");
    html.classList.add("overflow-hidden");
    authModal.classList.remove("hidden");
  },

  closeAuthModal() {
    this.clearInputs();

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
    this.clearInputs();

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  },

  switchSignup() {
    this.clearInputs();

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  },
};

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
startLearningBtn.addEventListener("click", () =>
  authModalFunction.registerModalOpen(),
);
signinBtn.addEventListener("click", () => authModalFunction.loginModalOpen());
signupBtn.addEventListener("click", () =>
  authModalFunction.registerModalOpen(),
);
closeAuthBtn.addEventListener("click", () =>
  authModalFunction.closeAuthModal(),
);

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
        .then((data) => data.json())
        .then((data) => {
          if (data.success) {
            console.log(data.message);
            authModalFunction.closeAuthModal();
          } else {
            console.log(data.message);
          }
        })
        .catch((error) => console.error(error));
    } else {
      window.alert("All input fields must be filled.");
    }
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

  registerButtonValidate();
}

loginButton.addEventListener("click", () => {
  const email = document.querySelector("#emailInputLogin").value.trim();
  const password = document.querySelector("#passwordInputLogin").value.trim();
  if (email && password) authentications.login();
});

const loginButtonValidate = () => {
  const email = document.querySelector("#emailInputLogin").value.trim();
  const password = document.querySelector("#passwordInputLogin").value.trim();

  if (email && password) {
    loginButton.classList.remove(
      "select-none",
      "bg-[#E1E3E4]",
      "text-[#5C5F60]",
    );
    loginButton.classList.add(
      "bg-[#0D47A1]",
      "text-[#FFFFFF]",
      "cursor-pointer",
    );
  } else {
    loginButton.classList.remove(
      "bg-[#0D47A1]",
      "text-[#FFFFFF]",
      "cursor-pointer",
    );
    loginButton.classList.add("select-none", "bg-[#E1E3E4]", "text-[#5C5F60]");
  }
};

document
  .querySelector("#emailInputLogin")
  .addEventListener("input", loginButtonValidate);
document
  .querySelector("#passwordInputLogin")
  .addEventListener("input", loginButtonValidate);

loginButtonValidate();

registerButton.addEventListener("click", () => {
  const firstname = document.querySelector("#firstNameInput").value.trim();
  const lastname = document.querySelector("#lastNameInput").value.trim();
  const email = document.querySelector("#emailInputRegister").value.trim();
  const password = document
    .querySelector("#passwordInputRegister")
    .value.trim();
  const usertype = document.querySelector("#userTypeInput").value.trim();
  const acceptPolicyCheckbox = document.querySelector(
    "#acceptPolicyCheckbox",
  ).checked;

  if (
    firstname &&
    lastname &&
    email &&
    password &&
    usertype &&
    acceptPolicyCheckbox
  ) {
    authentications.register();
  }
});

const registerButtonValidate = () => {
  const firstname = document.querySelector("#firstNameInput").value.trim();
  const lastname = document.querySelector("#lastNameInput").value.trim();
  const email = document.querySelector("#emailInputRegister").value.trim();
  const password = document
    .querySelector("#passwordInputRegister")
    .value.trim();
  const usertype = document.querySelector("#userTypeInput").value.trim();
  const acceptPolicyCheckbox = document.querySelector(
    "#acceptPolicyCheckbox",
  ).checked;

  if (
    firstname &&
    lastname &&
    email &&
    password &&
    usertype &&
    acceptPolicyCheckbox
  ) {
    registerButton.classList.remove(
      "select-none",
      "bg-[#E1E3E4]",
      "text-[#5C5F60]",
    );
    registerButton.classList.add(
      "bg-[#0D47A1]",
      "text-[#FFFFFF]",
      "cursor-pointer",
    );
  } else {
    registerButton.classList.remove(
      "bg-[#0D47A1]",
      "text-[#FFFFFF]",
      "cursor-pointer",
    );
    registerButton.classList.add(
      "select-none",
      "bg-[#E1E3E4]",
      "text-[#5C5F60]",
    );
  }
};

document
  .querySelector("#emailInputRegister")
  .addEventListener("input", registerButtonValidate);
document
  .querySelector("#passwordInputRegister")
  .addEventListener("input", registerButtonValidate);
document
  .querySelector("#firstNameInput")
  .addEventListener("input", registerButtonValidate);
document
  .querySelector("#lastNameInput")
  .addEventListener("input", registerButtonValidate);
document
  .querySelector("#acceptPolicyCheckbox")
  .addEventListener("change", registerButtonValidate);

registerButtonValidate();
