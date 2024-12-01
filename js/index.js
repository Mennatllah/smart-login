var signNameInput = document.getElementById("inputText");
var emailInput = document.getElementById("inputEmail");
var passwordInput = document.getElementById("inputPassword");
var signEmailInput = document.getElementById("signEmail");
var signPasswordInput = document.getElementById("signPassword");

var dataList = JSON.parse(localStorage.getItem("Data")) || [];
function addData() {
  if (check() == true) {
    if (exists()) {
      var Data = {
        name: signNameInput.value,
        email: signEmailInput.value,
        pass: signPasswordInput.value,
      };
      dataList.push(Data);
      localStorage.setItem("Data", JSON.stringify(dataList));
      displaySuccess();
      // clear();
    } else {
      displayExists();
    }
  } else {
    displayCheck();
  }
}
function check() {
  if (
    signNameInput.value != "" &&
    signEmailInput.value != "" &&
    signPasswordInput.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}
function exists() {
  for (var i = 0; i < dataList.length; i++) {
    if (dataList[i].email === signEmailInput.value) {
      return false;
    }
  }
  return true;
}
function displayCheck() {
  document.getElementById(
    "required"
  ).innerHTML = `<p class="text-danger m-2">All inputs is required</p>`;
}
function displayExists() {
  document.getElementById(
    "required"
  ).innerHTML = `<p class="text-danger m-2">email already exists</p>`;
}
function displaySuccess() {
  document.getElementById(
    "required"
  ).innerHTML = `<p class="text-warning m-2">Success</p>`;
}
function Login() {
  for (var i = 0; i < dataList.length; i++) {
    if (checkData() == true) {
      if (
        dataList[i].email === emailInput.value &&
        dataList[i].pass === passwordInput.value
      ) {
        var Data = {
          email: emailInput.value,
          pass: passwordInput.value,
        };
        localStorage.setItem("sessionUsername", dataList[i].name);
        window.location.href = "home.html";
      } else {
        displayCheckData();
      }
    } else {
      displayCheck();
    }
  }
}
window.onload = function () {
  document.getElementById(
    "welcome"
  ).innerHTML = `Welcome ${localStorage.getItem("sessionUsername")}`;
};
function logout() {
  localStorage.removeItem("sessionUsername");
  window.location.href = "index.html";
}
function checkData() {
  if (emailInput.value != "" && passwordInput.value != "") {
    return true;
  } else {
    return false;
  }
}
function displayCheckData() {
  document.getElementById(
    "required"
  ).innerHTML = `<p class="text-danger m-2">incorrect email or password</p>`;
}
// function clear() {
//   signNameInput.value = null;
//   signEmailInput.value = null;
//   signPasswordInput.value = null;
// }
