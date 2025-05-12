function validateLoginForm(event) {
  event.preventDefault();
  let login = login_form.login;
  let password = login_form.password;

  let invalidLoginSpan = document.querySelector(".invalid-feedback.login");
  let invalidPasswordSpan = document.querySelector(
    ".invalid-feedback.password"
  );

  if (login.value === "") {
    login.classList.add("border-red-error");
    invalidLoginSpan.classList.remove("d-none");
    invalidLoginSpan.classList.add("d-block");

    login.focus();
    return false;
  } else {
    login.classList.remove("border-red-error");
    invalidLoginSpan.classList.remove("d-block");
    invalidLoginSpan.classList.add("d-none");
  }

  if (password.value === "") {
    password.classList.add("border-red-error");
    invalidPasswordSpan.classList.remove("d-none");
    invalidPasswordSpan.classList.add("d-block");

    password.focus();
    return false;
  } else {
    password.classList.remove("border-red-error");
    invalidPasswordSpan.classList.remove("d-block");
    invalidPasswordSpan.classList.add("d-none");
  }
}

function showPassword() {
  let passwordIcon = document.querySelector(".password-icon");
  let passwordInput = document.getElementById("password");

  if (password.type === "password") {
    passwordInput.type = "text";
    passwordIcon.attributes.getNamedItem("src").value =
      "assets/img/login/showing_password.png";
    return;
  }
  
  passwordInput.type = "password";
  passwordIcon.attributes.getNamedItem("src").value =
    "assets/img/login/show_password.png";
}
