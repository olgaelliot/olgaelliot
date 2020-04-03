// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("info").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myInfo").classList.toggle("show");
}

$(document).ready(function(){
  $('body').mousemove(function(e){
     var x = e.pageX - this.offsetLeft;

    if (x <= 8) {
         $('div.ball1').css({'left': x});
      }
  });
});
$(document).ready(function(){
  $('body').mousemove(function(e){
     var x = e.pageX - this.offsetLeft;

    if (x <= 8) {
         $('div.ball2').css({'left': x});
      }
  });
});
