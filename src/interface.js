$( document ).ready(function() {

  $('.write_code').submit(function(e) {
    e.preventDefault();
    var value = $( ".write_code_form" ).val();
    var tokens = tokenize(value)
    var parsed = parse(tokens)
    var interpreted = interpret(parsed)
    console.log(interpreted)

    $('.output').text(interpreted);
  })

})
