//This function sets the height of the class "push" from the height of the top navigation bar
//This is necessary to push the page content below the navigation bar

function setSize(){

$(document).ready(function(){
    
    var height = $("#top-nav").height();

    $(".push").css("height", height);

    
  });

}

setInterval("setSize()", 10);

