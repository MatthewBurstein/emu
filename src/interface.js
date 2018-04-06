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
    $('.tokens').append('<div class="headline">Tokens: </div>')
    tokens.forEach( token => {
      tokenString = "type: " + token.type + ", value: " + token.value + " ;"
      $( "<br>" ).appendTo( ".tokens" )
      $('.tokens').append(`${tokenString}`)
    })
  }

})
