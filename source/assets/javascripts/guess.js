(function($) {
  var answers = [];
  var right_answers = ['New Born', 'Hysteria', 'Sunburn', 'Time is running out', 'Plug in Baby'];

  $(document).on('click', 'a', function(event) {
    // stop natural behavior
    event.preventDefault();
    var href = $(this).attr('href');

    // Do your stuff here
    if ($(this).hasClass('js-answer')) {
      var answer = $(this).text();
      answers.push(answer);
    }

    if ($(this).hasClass('last-devinette')) {
      var count = 0;
      for (var i in answers)
        if (right_answers[i] == answers[i])
          count++;
      if (count >= 3)
        href = '/win';
      else
        href = '/fail';
    };
    link(href);
  });
})(jQuery);
