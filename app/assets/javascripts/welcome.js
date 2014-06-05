// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


var prompts = [
    'Type your name',
    'Type an adjective',
    'Type a noun'
    ];

// holds the answers
var answers = [];

//keep track of current prompt we're on
var currentPrompt = 0;

//A function that will call the nextPrompt
var nextPrompt = function(){
  if (currentPrompt != 0) {
    answers.push($('input').val());
  }

  if (currentPrompt < prompts.length){
  // put first prompt in all html elements with class prompt
  $('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');
  currentPrompt++;
  } else {
    //run showFinal
    showFinal();
  }
}

//puts users input into html
var showFinal =  function() {
$('.prompt').html('This is the story of <span class="fill">'+answers[0]+'</span> and the <span class="fill">'+answers[1]+'</span> <span class="fill">'+answers[2]+'</span>.');
   //hides button when over
  $('button').hide();
}

//run nextPrompt function when button is clicked
$('button').click(function() {
  nextPrompt();
});

//Show the first prompt as soon as js loads
nextPrompt();
