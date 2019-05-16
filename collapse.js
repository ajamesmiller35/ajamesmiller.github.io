
var width = $("body").width();

$(document).on('click', '.collapse-me', function (event) {
  var width = $("body").width();
  if(width <= 1050){
    event.preventDefault();
    document.getElementById('toggle-button').click();
    console.log(width);
    console.log('click');
  }
  });
