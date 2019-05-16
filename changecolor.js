
//Functions used to change the color of the top navigation area when the appropriate color is clicked
$( "#red" ).click(function() {
    $("#top-nav").css("background-color", "#e51937");
    localStorage['color'] = "red";
  });
$( "#blue" ).click(function() {
   $("#top-nav").css("background-color", "#0068b3");
   localStorage['color'] = "blue";
 });
 $( "#white" ).click(function() {
    $("#top-nav").css("background-color", "white");
    localStorage['color'] = "white";
});