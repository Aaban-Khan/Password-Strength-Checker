let inputfield = document.querySelector("#Password");
let outputfield = document.querySelector("#output");

inputfield.addEventListener("input", () => {
  let password = inputfield.value;
  console.log(password);
  if (password.length < 8) {
    outputfield.innerText = "password is too short";
    outputfield.style.color = "red";
  } else {
    if (password.search(/[a-z]/) == -1) {
      outputfield.innerText = "Password is missing a Small letter";
      outputfield.style.color = "red";
    } else if (password.search(/[A-Z]/) == -1) {
      outputfield.innerText = "Password is missing a Capital Letter";
      outputfield.style.color = "red";
    } else if (password.search(/[0-9]/) == -1) {
      outputfield.innerText = "Password is missing a Numeric Letter";
      outputfield.style.color = "red";
    } else if (password.search(/[`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\:\/'\"\<\>\,\.]/) == -1) {
        outputfield.innerText = "Password is missing a Numeric Letter";
        outputfield.style.color = "red";
    } else{
        outputfield.innerText = "Password is strong";
        outputfield.style.color = "green";
    }
  }
});
