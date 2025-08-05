var USERNAME = "admin";
var PASSWORD = "123";

var usernameSelector = document.querySelector('input[name="username"]');
var passwordSelector = document.querySelector('input[name="password"]');
var submitBtn = document.querySelector('input[type="submit"]');
var pTag = document.getElementsByTagName("p")[0];
var pTagDefaultValue = "Not registered?<span>Create an account</span>";

submitBtn.addEventListener("click", function (e) {
  var username = usernameSelector.value;
  var password = passwordSelector.value;
  e.preventDefault(); // prevent page from refresh after form submit

  if (username === USERNAME && password === PASSWORD) {
    pTag.textContent = "Welcome";
    pTag.style = "color: green";
  } else {
    pTag.innerHTML = pTagDefaultValue;
    pTag.style = "color: grey";
  }
});
