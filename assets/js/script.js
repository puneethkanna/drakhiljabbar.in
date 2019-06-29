document.getElementById("about-link").addEventListener("click", function(eventobj){
  eventobj.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

var modalJ = document.getElementById("journals");
var btnJ = document.getElementById("journals-link");
var modalM = document.getElementById("memberships");
var btnM = document.getElementById("memberships-link");
var spanJ = document.getElementsByClassName("close")[0];
var spanM = document.getElementsByClassName("close")[1];
btnJ.onclick = function() {
    modalJ.style.display = "block";
}
btnM.onclick = function() {
    modalM.style.display = "block";
}
spanJ.onclick = function() {
    modalJ.style.display = "none";
}
spanM.onclick = function() {
    modalM.style.display = "none";
}
window.onclick = function(event) {
    if(event.target == modalJ){
      modalJ.style.display = "none";
    }
    else if(event.target == modalM){
      modalM.style.display = "none";
    }
}
