$( document ).ready(function() {

  $('.write_code').submit(function(e) {
    e.preventDefault();
    let value = $( ".write_code_form" ).val();
    let tokens = tokenize(value)
    showTokens(tokens)
    let parsed = parse(tokens)
    showTree(parse(tokens))
    let interpreted = interpret(parsed)
    $('.output').append('<div class="result"> => '  + interpreted + '</div>');
  })

  showTokens = function(tokens) {
    $('.tokens_list').empty();
    tokens.forEach( token => {
      tokenString = "type: " + token.type + ", value: " + token.value + ";"
      $('.tokens_list').append('<div class="' + token.type + '">' + tokenString + '</div>')
    })
  }

  showTree = function(tree) {
    console.log(tree)
    $('.nodes').empty();
    $('.nodes').append('<div class="' + tree[0].type + '">' + tree[0].type + " : " + tree[0].name + '</div>')
    $('.nodes').append('arguments:')
    tree[0].args.forEach ( argument => {
      $('.nodes').append('<div class="' + argument.type + " argument" + '">' + argument.type  +  " : " + argument.value + '</div>')
    })
  }

})
