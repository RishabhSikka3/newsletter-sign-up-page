const signupForm = document.getElementById("sign-up-form");
const emailInput = document.querySelector("[name=email]");
const successSection = document.querySelector(".thank-you-section");
const dismissBtn = document.querySelector(".dismiss-btn");
const cardElement = document.querySelector(".card");
const userEmail = document.querySelector(".user-email");

const validateEmail = (email) => {
  if (!email) {
    return "Email is required.";
  }

  const isValidEmail = /^\S+@\S+$/g;

  if (!isValidEmail.test(email)) {
    return "Valid email required.";
  }
};

const handleSignUpFormSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(signupForm).entries();
  const { email } = Object.fromEntries(formData);

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    const emailErrorMsgElement = document.querySelector(".email-error-msg");
    emailErrorMsgElement.innerText = emailErrorMessage;
    emailInput.classList.add("error");
    return;
  }

  cardElement.classList.add("hidden");
  successSection.classList.remove("hidden");
  userEmail.innerText = email;
};

dismissBtn.addEventListener("click", () => {
  cardElement.classList.remove("hidden");
  successSection.classList.add("hidden");
  emailInput.value = "";
  emailInput.classList.remove("error");
});

signupForm.addEventListener("submit", handleSignUpFormSubmit);
