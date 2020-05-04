// Get the button, and when the user clicks on it, executes myFunction
document.getElementById("info").onclick = function() {infoShow()};
document.getElementById("index").onclick = function() {indexShow()};
document.getElementsByTagName("H1").onclick = function() {indexClose()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function infoShow() {
  document.getElementById("myInfo").classList.toggle("show-info");
}
function indexShow() {
  document.getElementById("myIndex").classList.toggle("show-index");
}
function indexClose() {
  document.getElementById("myIndex").classList.toggle("close-index");
}

var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}
