/*document.addEventListener("DOMContentLoaded", function(){
    console.log("hi")

     let password = document.querySelector("#password").value;
     let confirmPassword = document.querySelector("#confirmPassword").value;

     let error = document.querySelector("#error");


     if (password == "" && confirmpassword == ""){
        error.innerHTML = "passwords do not match";
     }
    else if password == confirmPassword{
        error.innerHTML = "";
     }


})*/

document.addEventListener("DOMContentLoaded", function(){
    console.log("hi");

    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");
    let error = document.querySelector("#error");

    // Add an event listener to the form to check on submission
    document.querySelector("form").addEventListener("submit", function(event) {
        if (password.value === "" || confirmPassword.value === "") {
            // Prevent the form from submitting
            event.preventDefault();
            // Show an error message if either password or confirm password is empty
            error.innerHTML = "Both passwords are required";
        } else if (password.value !== confirmPassword.value) {
            // Prevent the form from submitting
            event.preventDefault();
            // Show an error message if passwords do not match
            error.innerHTML = "Passwords do not match";
        } else {
            // Clear the error message if everything is okay
            error.innerHTML = "";
        }
    });
});
