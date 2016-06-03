$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var trip = $("#trip").val();
    var lan = $("#lan").val();
    var city = $("#city").val();
    var budget = $("#budget").val();
    var ass = $("#ass").val();

    $('#horse').hide();

    if (trip === "nature" && lan === "dontcare" || lan === "care" || lan === "good" && city === "small" && ass === "no") {
      $('#final').show();
      $('#cinque').show();

    }
      else if (trip === "nature" && lan === "dontcare" || lan === "care" || lan === "good" && city === "small" && ass === "yes") {
        $('#final').show();
        $('#bologna').show();

      else if (age <= 40 && gender === "male") {
        $('#final').show();
        $('#tom').show();
      }

      else if (age <= 40 && gender === "female") {
        $('#final').show();
        $('#emma').show();
      }
      else if (age > 40 && gender === "female") {
        $('#final').show();
        $('#helen').show();
      }

      else if (movie === "horror") {
        $('#final').show();
        $('#helen').show();
      }

      else {
        $('#final').show();
        $('#bologna').show();
      }


  });
});
