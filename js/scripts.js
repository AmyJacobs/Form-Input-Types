$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // debugger;
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var favoriteColor = $("#color").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $(".person2").text(person2Input);
    $("#quote").text("\"" + animalInput+ "\"");
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);


    $("#story").show();

    $("#colorbox").css("background-color", favoriteColor);

    if (flavor === "rhino") {
      var picture = "<img src=\"http://pngimg.com/uploads/rhino/rhino_PNG34.png?i=1\">";
    }

    if (flavor === "lizard") {
      var picture = "<img src=\"http://www.pngmart.com/files/3/Lizard-PNG-Photos.png\">";
    }

    if (flavor === "snake") {
      var picture = "<img src=\"http://data.whicdn.com/images/50162233/original.png\">";
    }

    $("#colorbox").html(picture);

    event.preventDefault();
  });
});
