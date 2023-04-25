$(document).ready(function () {
    $('#predict2').append($('#predict1').html());
    $('#predict3').append($('#predict1').html());
    $('#predict4').append($('#predict1').html());
    $('#predict5').append($('#predict1').html());
    $(document).ajaxSend(function () {
      $("#overlay").fadeIn(200);
    });
    //selecting all drop down values
    $("#predictionId").click(function () {
      var predict1 = $('#predict1 :selected').text();
      var predict2 = $('#predict2 :selected').text();
      var predict3 = $('#predict3 :selected').text();
      var predict4 = $('#predict4 :selected').text();
      var predict5 = $('#predict5 :selected').text();
      $.ajax({
        url: 'http://localhost:8080/pythonfromjava?symptom1=' + predict1 + "&symptom2=" + predict2
          + "&symptom3=" + predict3 + "&symptom4=" + predict4 + "&symptom5=" + predict5,
        success: function (result) {
          setTimeout(function () {
            $("#overlay").fadeOut(200);
          }, 300);
          $("#dieases").val(result.disease);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          $("#errorMessage").show();
          setTimeout(function () {
            $("#overlay").fadeOut(200);
          }, 300);
        }
      })
    });
  });