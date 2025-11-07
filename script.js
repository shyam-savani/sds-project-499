const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
    
  let passValue = password.value;
  let strength = 0;

  if (passValue.length >= 6) strength++;
  if (/[A-Z]/.test(passValue)) strength++;
  if (/[0-9]/.test(passValue)) strength++;
  if (/[^A-Za-z0-9]/.test(passValue)) strength++;

  // Update bar color
  if (strength === 0) {
    strengthBar.style.width = "0%";
    strengthText.innerHTML = "";
  } 
  else if (strength === 1) {
    strengthBar.style.width = "25%";
    strengthBar.style.background = "red";
    strengthText.innerHTML = "Weak Password";
    strengthText.style.color = "red";
  } 
  else if (strength === 2) {
    strengthBar.style.width = "50%";
    strengthBar.style.background = "orange";
    strengthText.innerHTML = "Medium Strength";
    strengthText.style.color = "orange";
  } 
  else if (strength === 3) {
    strengthBar.style.width = "75%";
    strengthBar.style.background = "yellow";
    strengthText.innerHTML = "Good Password";
    strengthText.style.color = "yellow";
  } 
  else if (strength === 4) {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "lime";
    strengthText.innerHTML = "Strong Password!";
    strengthText.style.color = "lime";
  }
});
