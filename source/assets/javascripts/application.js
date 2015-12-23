//= require jquery
//= require guess

function link(href) {
  $.get(href).then(function(response) {
    $('.main-background').html(response);
    history.pushState({} , '', href );
  });
}
