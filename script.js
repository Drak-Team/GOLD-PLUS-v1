// 🔥 اپنی Supabase details یہاں ڈالنی ہیں
const SUPABASE_URL = "PASTE_YOUR_URL_HERE";
const SUPABASE_KEY = "PASTE_YOUR_KEY_HERE";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// LOGIN
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


// SIGNUP (یہ Supabase میں save کرے گا)
async function signup() {
  let email = document.getElementById("email").value;

  if(!email){
    alert("Enter Email First!");
    return;
  }

  let { error } = await supabase.from("users").insert([
    { email: email, balance: 0 }
  ]);

  if(error){
    alert("Error: " + error.message);
  } else {
    alert("Account Created!");
  }
}
