document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let valid = true;
    let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();
 let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let msgError = document.getElementById("msgError");
    let successMsg = document.getElementById("successMsg");

    nameError.style.display = "none";
    emailError.style.display = "none";
    msgError.style.display = "none";
    successMsg.style.display = "none";

     if (name === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        valid = false;}
    
 let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        emailError.style.display = "block";
        valid = false;
    }
if (msg === "") {
        msgError.textContent = "Message cannot be empty";
        msgError.style.display = "block";
        valid = false;
    }

    
    if (valid) {
        successMsg.style.display = "block";
        document.getElementById("contactForm").reset();
    }







});
