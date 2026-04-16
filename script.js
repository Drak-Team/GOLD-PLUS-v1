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
function submitDeposit() {
  let file = document.getElementById("screenshot").files[0];

  if(file){
    let reader = new FileReader();

    reader.onload = function(){
      let data = reader.result;

      // save in localStorage (temporary)
      localStorage.setItem("depositProof", data);

      document.getElementById("msg").innerText = "Deposit Submitted!";
    }

    reader.readAsDataURL(file);

  } else {
    alert("Upload screenshot first!");
  }
}
