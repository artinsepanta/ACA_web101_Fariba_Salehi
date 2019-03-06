$(function() {
  let text=$("#myList").val();
  let button = $("input[type=button]");
  let list =$("ul");
  button.on('click', function() {
  list.append(`<li>${text}</li>`);
  })
})


// //Geolocation

// $(document).ready(function($) {

//   var $findMeBtn = $('.find-me');

//   if (!navigator.geolocation) {

//     $findMeBtn.addClass('disabled');

//     $('.no-geolocation-support').addClass('visible');

  
//   } else if (location.protocol !== 'https:') {

    
//     if (window.top === window.self) {

     
//       location.href = 'https:' + window.location.href.substring(window.location.protocol.length);

//     } else {

//       $findMeBtn.addClass('disabled');
//       $('.not-on-https').addClass('visible');

//     };

//   } else {

//     $findMeBtn.on('click', function(e) {

//       e.preventDefault();

//       navigator.geolocation.getCurrentPosition(function(position) { 

//         var lat = position.coords.latitude;
//         var lng = position.coords.longitude;

//         $('.latitude').text(lat.toFixed(6) + '°');
//         $('.longitude').text(lng.toFixed(6) + '°');
//         $('.coordinates').addClass('visible');

//         // https://developers.google.com/maps/documentation/javascript/reference
        
//         var mapLatLng = new google.maps.LatLng(lat, lng);

//         var mapOptions = {
//           zoom: 15,
//           mapTypeControl: false,
//           center: mapLatLng,
//         };

//         var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
   
//         var mapMarker = new google.maps.Marker({
//           position: mapLatLng,
//           map: map,
//           title: 'Your browser/device places you here',
//         });
       
//         $(window).resize(function() {
//           google.maps.event.trigger(map, 'resize');
//           map.panTo(mapLatLng);
//         });

//       });

//     });

//   };

// });
