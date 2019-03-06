$(function() {
  let text=$("#myList").val();
  let button = $("input[type=button]");
  let list =$("ul");
  button.on('click', function() {
  list.append(`<li>${text}</li>`);
  })
})


// //Geolocation

 var loc=document.getElementById('myloc');
 function myLocation(){
   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position);
    }else{
      loc.HTML="location Tracking not posible";
    }
 }
 function showPosition(position){
   loc.innerHTML="longitude: "+position.coords.longitude +"<br>latitude:" + position.coords.latitude + "<br>";
 }
