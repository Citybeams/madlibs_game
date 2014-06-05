// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


var prompts = [
    'Type your name',
    'Type an adjective',
    'Type a noun'
    ];

//keep track of current prompt we're on
var currentPrompt = 0;

//A function that will call the nextPrompt
var nextPrompt = function(){
  if (currentPrompt < prompts.length){
  // put first prompt in all html elements with class prompt
  $('.prompt').html(prompts[currentPrompt]);
  currentPrompt++;
  } else {
    //puts a new message in the html
    $('.prompt').html("that's all for now!");
  }
}

//run nextPrompt function when button is clicked
$('button').click(function() {
  nextPrompt();
});

//Show the first prompt as soon as js loads
nextPrompt();
