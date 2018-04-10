$( document ).ready(function() {

  $('.show_hide_button').click( event => {
    $( ".drawer" ).toggleClass('open');
  })

  $(".about").hover(function(){
      $('.emu').removeClass('hidden');
  },function(){
      $('.emu').addClass('hidden');
  });

  $('.write_code').submit(function(e) {
    e.preventDefault();
    emptyFields()
    let value = $( ".write_code_form" ).val();
    cleanOutputWindow(value)
    let tokens = tokenize(value)
    showTokens(tokens)
    let parsed = parse(tokens)
    showTree(parsed)
    let interpreted = interpret(parsed)
    showVariables(value)
    showOutput(interpreted)
  })

  cleanOutputWindow = function(value) {
    if (value === 'clean') {
      $('.output_lines').empty();
    }
  }

  showVariables = function(value) {
    let substring = value.substring(0, 14)
    if (substring === 'assignVariable') {
      let variables = []
      variableDictionary.forEach(variable => {
        variables.push(variable)
      })
      console.log(variables)
      variables.forEach(variable => {
        $('.variable').empty();
        $('.var_info').text('');
        $('.variable').append('<div class="variable">'  + variable.variableName + '</div>');
      })
    }
  }

  showTokens = function(tokens) {
    tokens.forEach( token => {
      if (token.type === 'variable') {
        tokenString = "type: " + token.type + ", variable name: " + token.variableName + ";"
      } else {
        tokenString = "type: " + token.type + ", value: " + token.value + ";"
      }
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
        if (argument.type === 'variable') {
          $('.nodes').append('<div class="' + argument.type + '" style="margin-left: ' + margin + 'em">' + argument.type  +  " : " + argument.variableName + '</div>')
        } else {
          $('.nodes').append('<div class="' + argument.type + '" style="margin-left: ' + margin + 'em">' + argument.type  +  " : " + argument.value + '</div>')
        }
      }
    })
  }

  showOutput = function(interpreted) {
    if (interpreted[0] !== undefined) {
      if (typeof interpreted[0] === 'string' || typeof interpreted[0] === 'number') {
        $('.output_lines').append('<div class="result"> => '  + interpreted + '</div>');
      } else {
        interpreted[0].forEach(singleOutput => {
          $('.output_lines').append('<div class="result"> => '  + singleOutput + '</div>');
        })
      }
    }
  }

  emptyFields = function() {
    $('.nodes').empty();
    $('.tokens_list').empty();
  }

})
