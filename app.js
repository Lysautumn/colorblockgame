$(document).ready(function() {


  $('#game').append('<div class="block" id="blue"></div>' + '<div class="block" id="yellow"></div>' + '<div class="block" id="purple"></div>' + '<div class="block" id="green"></div>');

gamePlay();




});

function gamePlay() {
  var choices = [$('#blue'), $('#yellow'), $('#purple'), $('#green')];
  var correct = choices[randomNumber(0, 3)];
  console.log(correct);
  $('.block').on('click', function guess(correct) {
    console.log($(this));
    if ($(this) == $('#blue') && correct == $('#blue')) {
      console.log('Correct!');
    } else if ($(this).id == $('#yellow') && correct.id == $('#yellow')) {
      console.log('Correct!');
    }else if ($(this).id == $('#purple') && correct.id == $('#purple')) {
      console.log('Correct!');
    }else if ($(this).id == $('#green') && correct.id == $('#green')) {
      console.log('Correct!');
    } else {
      console.log('Wrong!');
    }
  });
};

// function gamePlay() {
//   var choices = [$('#blue'), $('#yellow'), $('#purple'), $('#green')];
//   var correct = choices[randomNumber(0, 3)];
//   // var pick = alert("Please pick a color!");
//   var pick = $('#game').on('click');
//   console.log(correct);
//   $('.block').on('click', function guess(correct, pick){
//     if (correct == pick) {
//       alert("That's right! Good job!");
//     } else {
//       alert("That's not right. Pick again!");
//     }
//   });
// }

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
