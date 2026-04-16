function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email && password){
    alert("Login Successful!");
    document.querySelector(".login-container").style.display = "none";
    showPlans();
  } else {
    alert("Enter details");
  }
}

function signup() {
  alert("Account Created!");
}

function showPlans() {
  document.body.innerHTML += `
    <div class="plan-card">
      <div class="plan-title">Starter</div>
      <div class="plan-price">Rs 600</div>
      <div>Daily Rs 50</div>
      <div class="plan-btn">Activate Plan</div>
    </div>

    <div class="plan-card">
      <div class="plan-title">Growth</div>
      <div class="plan-price">Rs 1000</div>
      <div>Daily Rs 100</div>
      <div class="plan-btn">Activate Plan</div>
    </div>
  `;
}
