$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var value = parseInt($("#number").val());
    $("li").remove();

    for (var i = 1; i <= value; i++) {
      if(value % 3 == 0)
      {
        $("#result_list").append("<li>ping</li>");
      }
      else if (value % 5 == 0) {
        $("#result_list").append("<li>pong</li>");
      }
        else if (value % 15 == 0) {
          $("#result_list").append("<li>pingpong</li>");
        }
          else {
            $("#result_list").append("<li>" + i + "</li>");
        }
      }
    event.preventDefault();
  });
});
