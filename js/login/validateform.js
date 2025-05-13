const loginFormInputElements = {
  login: login_form.login,
  password: login_form.password,
};

const showLoginFeedbackSpan = () => {
  const loginFeedbackSpan = document.querySelector(".invalid-feedback.login");

  loginFormInputElements.login.classList.add("border-red-error");
  loginFeedbackSpan.classList.remove("d-none");
  loginFeedbackSpan.classList.add("d-block");

  loginFormInputElements.login.focus();
};

const hiddenLoginFeedbackSpan = () => {
  const loginFeedbackSpan = document.querySelector(".invalid-feedback.login");

  loginFormInputElements.login.classList.remove("border-red-error");
  loginFeedbackSpan.classList.remove("d-block");
  loginFeedbackSpan.classList.add("d-none");
};

const showPasswordFeedbackSpan = () => {
  const passwordFeedbackSpan = document.querySelector(
    ".invalid-feedback.password"
  );

  loginFormInputElements.password.classList.add("border-red-error");
  passwordFeedbackSpan.classList.remove("d-none");
  passwordFeedbackSpan.classList.add("d-block");

  loginFormInputElements.password.focus();
};

const hiddenPasswordFeedbackSpan = () => {
  const passwordFeedbackSpan = document.querySelector(
    ".invalid-feedback.password"
  );

  loginFormInputElements.password.classList.remove("border-red-error");
  passwordFeedbackSpan.classList.remove("d-block");
  passwordFeedbackSpan.classList.add("d-none");
};

function validateLoginForm(event) {
  event.preventDefault();

  if (login.value === "") {
    showLoginFeedbackSpan();
    return false;
  } else {
    hiddenLoginFeedbackSpan();
  }

  if (password.value === "") {
    showPasswordFeedbackSpan();
    return false;
  } else {
    hiddenPasswordFeedbackSpan();
  }
}

function showPassword() {
  let passwordIcon = document.getElementById("password-icon");

  if (loginFormInputElements.password.type === "password") {
    loginFormInputElements.password.type = "text";
    passwordIcon.attributes.getNamedItem("src").value =
      "assets/img/login/showing_password.png";
    return;
  }

  loginFormInputElements.password.type = "password";
}
