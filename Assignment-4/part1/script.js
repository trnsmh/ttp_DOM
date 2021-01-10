let first = document.getElementById("me");
document.getElementById("leftbtn").addEventListener("click", argue1);
document.getElementById("rightbtn").addEventListener("click", argue2);

function argue1(){
    first.innerText= "I'm right";  
}
function argue2(){
    first.innerText = "No, I'm right!";
}