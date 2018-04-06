$( document ).ready(function() {

  $('.write_code').submit(function(e) {
    e.preventDefault();
    let value = $( ".write_code_form" ).val();
    let tokens = tokenize(value)
    showTokens(tokens)
    let parsed = parse(tokens)
    let interpreted = interpret(parsed)
    $('.output').text(interpreted);
  })

  showTokens = function(tokens) {
    $('.tokens_list').empty();
    tokens.forEach( token => {
      tokenString = "type: " + token.type + ", value: " + token.value + " ;"
      $('.tokens_list').append('<div>' + tokenString + '</div>')
    })
  }

})
