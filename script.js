// Get the button, and when the user clicks on it, executes myFunction
document.getElementById("info").onclick = function() {infoShow()};
document.getElementById("index").onclick = function() {indexShow()};
document.getElementsByClassName("index-project").onclick = function() {indexClose()};

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



$(document).ready(function(){
  $('body').mousemove(function(e){
     var x = e.pageX - this.offsetLeft;

    if (x <= 12) {
         $('div.ball1').css({'left': x});
      }
  });
});
$(document).ready(function(){
  $('body').mousemove(function(e){
     var x = e.pageX - this.offsetLeft;

    if (x <= 12) {
         $('div.ball2').css({'left': x});
      }
  });
});
