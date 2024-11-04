// function data()
let btn = document.querySelector("button");
btn.addEventListener("click",function()
{
    //Retrieve input values from the form
   var a = document.getElementById("name").value;
   var b = document.getElementById("email").value;
   var c = document.getElementById("phone").value;
   var d = document.getElementById("password").value;
   var e = document.getElementById("confirmPassword").value;

// Check if any fields are empty
if(a == ""|| b == "" || c == "" || d == "" || e =="" ){
    alert("Please fill up the form");
    return false;
}
//validation length must be greater than 5
else if(a.length < 5){
    alert("Name must be 5 characters !")
    return false;
}
// phone number must be 10 digit number
else if(c.length < 10 || c.length > 10 ){
    alert("Number must be 10 digits !")
    return false;
}
//check phone number is number or not
else if(isNaN(c)){
    alert("Only numbers are allowed ! Please enter a valid number !")
    return false;
}
//validate matching passwords
else if (d !== e) {
    alert("Please enter the same password");
    return false;
}
else if(d === a){
    alert("Password cannot be name of the user");
    return false;
}
//check password strength
else if(d.length < 4 ){
    alert("Password is weak !")
    return false;
}
else if(d.length >= 4 && d.length < 8 ){
    alert("Password is medium !")
    return false;
}
else {
    //if all validation pass, allow from submision
    true;
    alert("Successfully Submitted!");
}
});