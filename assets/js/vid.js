/*

*/

(function($) {

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
img.onclick = function(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
var modalFrm = document.getElementById("modalFrm");
modalFrm.src = "about:blank";  
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
var modalFrm = document.getElementById("modalFrm");
modalFrm.src = "about:blank"; 
    modal.style.display = "none";
  }
}
$(".popup").click(function () {
var modalFrm = document.getElementById("modalFrm");
modalFrm.src = this.alt;
modal.style.display = "block";
});

})(jQuery);