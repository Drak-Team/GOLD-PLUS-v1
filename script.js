const SUPABASE_URL = "YOUR_URL";
const SUPABASE_KEY = "YOUR_KEY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
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
function showAdminLogin() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("adminLogin").style.display = "flex";
}

function adminLogin() {
  let email = document.getElementById("adminEmail").value;
  let pass = document.getElementById("adminPass").value;

  // ⚠️ اپنا gmail یہاں ڈالنا
  if(email === "yourgmail@gmail.com" && pass === "1234"){
    document.getElementById("adminLogin").style.display = "none";

    showAdminPanel();
  } else {
    alert("Wrong Admin Details!");
  }
}

function showAdminPanel() {
  document.body.innerHTML = `
    <h2 style="text-align:center;">👑 Admin Panel</h2>

    <div style="padding:20px;">
      <h3>Deposit Requests</h3>

      <img src="${localStorage.getItem("depositProof")}" width="200"/>

      <br><br>

      <button onclick="approve()">Approve</button>
      <button onclick="reject()">Reject</button>
    </div>
  `;
}

function approve(){
  alert("Deposit Approved!");
}

function reject(){
  alert("Rejected!");
}
