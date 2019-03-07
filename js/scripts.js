 // user interface logic
 $(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var n = parseInt($("#n").val());
    $("li").remove();

// business logic
    for (var i = 1; i <= n ; i++) {
      if (i % 15 == 0) {
        $("#result").append("<li>pingpong</li>");
      } else if (i % 3 == 0) {
        $("#result").append("<li>ping</li>");
      } else if (i % 5 == 0) {
        $("#result").append("<li>pong</li>");
      } else {
        $("#result").append('<li> ' +  i  + ' </li>');
      }
    }

    event.preventDefault();
  });
});
