$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    $('.carousel').myCarousel({
      interval: 2000
    })
    var trip = $("#trip").val();
    var lan = $("#lan").val();
    var city = $("#city").val();
    var budget = $("#budget").val();
    var ass = $("#ass").val();

    if (trip === "food" && lan === "dontcare" || lan === "care" || lan === "good" && city === "small" || city === "medium") {
      $('#final').show();
      $('#bologna').show();

      $('#rome').hide();
      $('#cinque').hide();
    }

      else if (trip === "nature" && lan === "dontcare" || lan === "care" || lan === "good" && city === "small" && ass === "no") {
        $('#final').show();
        $('#cinque').show();

        $('#bologna').hide();
        $('#rome').hide();
      }

      else if (trip === "nature" && lan === "dontcare" || lan === "care" || lan === "good" && city === "small" && ass === "yes") {
        $('#final').show();
        $('#bologna').show();

        $('#rome').hide();
        $('#cinque').hide();
      }

      else if (trip === "food" && lan === "care" || lan === "good" && city === "small" || city === "medium") {
        $('#final').show();
        $('#bologna').show();

        $('#rome').hide();
        $('#cinque').hide();
      }

      else if (trip === "history" && lan === "care" || lan === "good" || lan === "dontcare" && city === "big") {
        $('#final').show();
        $('#rome').show();

        $('#bologna').hide();
        $('#cinque').hide();
      }

      else if (trip === "history" && lan === "care" || lan === "good" || lan === "dontcare" && city === "medium" || city === "small") {
        $('#final').show();
        $('#bologna').show();

        $('#rome').hide();
        $('#cinque').hide();
      }

      else {
        $('#final').show();
        $('#bologna').show();

        $('#rome').hide();
        $('#cinque').hide();
      }

  });
});
