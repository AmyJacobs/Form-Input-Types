$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    person1Input = person1Input.toUpperCase();

    $(".person1").text(person1Input);

    $("#story").show();

    event.preventDefault();
  });
});
