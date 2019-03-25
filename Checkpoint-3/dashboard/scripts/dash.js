$( document ).ready(function() {
  let button = $("input[type=submit]");
  let list =$("ul");
  let form=$("#todo-form");
  form.on('submit', function(event){
    event.preventDefault();
    console.log("event:", event)
    let text=$("input[type=text]").val();
    list.append(`<li>${text}</li>`)
  })
    


// //Geolocation
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
})
}
});
function myLocation(){
  var loc=document.getElementById('myloc');
 if (navigator.geolocation) {
   console.log("navigator.geolocation:",navigator.geolocation)
   navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    loc.innerHTML="location Tracking not Posible.";
  }
}
function showPosition(position){
 loc.innerHTML="longitude: " + position.coords.longitude + "<br>latitude:" + position.coords.latitude + "<br>";
}


