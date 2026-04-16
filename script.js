function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email && password){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainSite").style.display = "block";
  } else {
    alert("Enter details");
  }
}

function signup() {
  alert("Account Created!");
}
