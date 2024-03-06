const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var pass = document.getElementById('password')
var msg = document.getElementById('message')
var str  = document.getElementById('strenght')

pass.addEventListener('input', ()  => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  }
  else{
    msg.style.display = "none";
  }
  if (pass.value.length < 4){
    str.innerHTML = "weak";
    pass.style.borderColor = "#E25E56";
    msg.style.color = "#E25E56"
  } 
  else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "easy";
    pass.style.borderColor = "#E3E20C";
    msg.style.color = "#E3E20C"
  }
  else if(pass.value.length >= 8 ){
    str.innerHTML = "strong";
    pass.style.borderColor = "#96DB8B";
    msg.style.color = "#96DB8B";
  }
})