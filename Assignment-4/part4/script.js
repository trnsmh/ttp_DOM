
function checkPassword(pword){
    let text = document.getElementById("h1text");
    if(pword.value.match('12345678')){
        text.innerHTML = "Password Correct!";
    }
    else{
        alert("Wrong Password!");
    }
}