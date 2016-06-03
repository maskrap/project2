$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var age = $("#age").val();
    var gender = $("#gender").val();
    var movie = $("#movie").val();

    $('#horse').hide();

    if (age < 18) {
      $('#final').show();
      $('#underage').show();

    } else if (age > 40 && gender === "male") {
        $('#final').show();
        $('#jeff').show();
        }

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
        $('#horse').show();
      }


  });
});
