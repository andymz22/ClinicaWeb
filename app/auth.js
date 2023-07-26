document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".header__auth-popup").classList.add("active")   
});

document.querySelector(".header__auth-popup .header__auth-close-btn").addEventListener("click", function(){
    document.querySelector(".header__auth-popup").classList.remove("active")
});

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "mirtita" && password === "123") {
      window.location.href = "paciente.html?usuario=" + encodeURIComponent(username);
    } else if (username === "house" && password === "123") {
      window.location.href = "doctor.html?usuario=" + encodeURIComponent(username);
    } else {
      alert("Usuario incorrecto");
    }
}


  
  
  
  
  
  
  