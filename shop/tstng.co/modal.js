var termsmodal = document.getElementById('termscondmod');
var privmodal = document.getElementById('privmod');
var signupmod = document.getElementById('signupmod');
var termsbtn = document.getElementById("termscondbtn");
var privbtn = document.getElementById("privbtn");
var signupbutton = document.getElementById("signupbutton");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");

termsbtn.onclick = function() {
    termsmodal.style.display = "block";
}
privbtn.onclick = function() {
    privmodal.style.display = "block";
}
signupbutton.onclick = function() {
    signupmod.style.display = "block";
}
close1.onclick = function() {
    termsmodal.style.display = "none";
}
close2.onclick = function() {
    privmodal.style.display = "none";
}
close3.onclick = function() {
    signupmod.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == termsmodal) {
        termsmodal.style.display = "none";
    } else if (event.target == privmodal) {
        privmodal.style.display = "none";
    } else if (event.target == signupmod) {
        signupmod.style.display = "none";
    }
}