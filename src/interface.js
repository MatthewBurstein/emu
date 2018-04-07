$( document ).ready(function() {

  $('.write_code').submit(function(e) {
    e.preventDefault();
    let value = $( ".write_code_form" ).val();
    let tokens = tokenize(value)
    showTokens(tokens)
    let parsed = parse(tokens)
    showTree(parsed)
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

  showTree = function(tree, margin = 0) {
    $('.nodes').append('<div class="' + tree[0].type + '" style="margin-left: ' + margin + 'em">' + tree[0].type + " : " + tree[0].name + '</div>')
    margin += 2
    $('.nodes').append('<div style="margin-left: ' + margin + 'em"> arguments: </div>')
    tree[0].args.forEach ( argument => {
      if (argument.type === 'function') {
        showTree([argument], margin)
      } else {
        $('.nodes').append('<div class="' + argument.type + '" style="margin-left: ' + margin + 'em">' + argument.type  +  " : " + argument.value + '</div>')
      }
    })
  }

})
