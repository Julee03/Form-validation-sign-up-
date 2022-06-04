let username  = document.getElementById("username"),
    email  = document.getElementById("email"),
    password  = document.getElementById("password"),
    confirm_password  = document.getElementById("confirm_password"),
    form = document.getElementById("form"),
    errorMSG = document.getElementsByClassName("error"),
    correctIcon = document.getElementsByClassName("correct-icon"),
    wrongIcon = document.getElementsByClassName("wrong-icon");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checking(username, 0, "Username cannot be blank");
    checking(email, 1, "Email cannot be blank");
    checking(password, 2, "Password cannot be blank");

    

    if(confirm_password.value.trim() !== password.value.trim()){
        errorMSG[3].innerHTML = "Password does not match";
        wrongIcon[3].style.opacity = "1";
        correctIcon[3].style.opacity = "0";
    }
    else if(confirm_password.value.trim() === '' || password.value.trim() === ''){
        errorMSG[3].innerHTML = "Fill the password please!";
        wrongIcon[3].style.opacity = "1";
        correctIcon[3].style.opacity = "0";
    }
    else{
        errorMSG[3].innerHTML = "";
        wrongIcon[3].style.opacity = "0";
        correctIcon[3].style.opacity = "1";
    }
})

let checking = (id, index, message) =>{
    if(id.value.trim() === ''){
        errorMSG[index].innerHTML = message;
        wrongIcon[index].style.opacity = "1";
        correctIcon[index].style.opacity = "0";
    }
    else{
        errorMSG[index].innerHTML = "";
        wrongIcon[index].style.opacity = "0";
        correctIcon[index].style.opacity = "1";
    }
}