$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var number = parseInt($("input#number").val());
    $("li").remove();

    for (var i = 1; i <= 50; i++) {
      if (i % 3 == 0)
        console.log("ping");
      else if (i % 5 == 0)
        console.log("pong");
      else if (i % 15 == 0)
        console.log("pingpong");
      else console.log(i);
    }
    event.preventDefault();
  });
});
