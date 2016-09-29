// $(document).ready(function() {
//   $('#game').append('<div class="block" id="blue"></div>' + '<div class="block"
//id="yellow"></div>' + '<div class="block"
//id="purple"></div>' + '<div class="block" id="green"></div>');
// gamePlay();
// });
// function gamePlay() {
//   var choices = [$('#blue'), $('#yellow'), $('#purple'), $('#green')];
//   var correct = choices[randomNumber(0, 3)];
//   console.log(correct);
//   $('.block').on('click', function guess(correct) {
//     console.log($(this));
//     if ($(this) == $('#blue') && correct == $('#blue')) {
//       console.log('Correct!');
//     } else if ($(this).id == $('#yellow') && correct.id == $('#yellow')) {
//       console.log('Correct!');
//     }else if ($(this).id == $('#purple') && correct.id == $('#purple')) {
//       console.log('Correct!');
//     }else if ($(this).id == $('#green') && correct.id == $('#green')) {
//       console.log('Correct!');
//     } else {
//       console.log('Wrong!');
//     }
//   });
// };
// // function gamePlay() {
// //   var choices = [$('#blue'), $('#yellow'), $('#purple'), $('#green')];
// //   var correct = choices[randomNumber(0, 3)];
// //   // var pick = alert("Please pick a color!");
// //   var pick = $('#game').on('click');
// //   console.log(correct);
// //   $('.block').on('click', function guess(correct, pick){
// //     if (correct == pick) {
// //       alert("That's right! Good job!");
// //     } else {
// //       alert("That's not right. Pick again!");
// //     }
// //   });
// // }
// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }

//$(function) is the same thing as $(document).ready(function)
var colors = ['red', 'blue', 'yellow', 'green', 'purple'];
var correctColor;
var SUCCESS_COLOR = 'blanchedalmond';
var TIMEOUT = 2000;
$(function () {
  createBoxes();
  registerListeners();
  chooseRandomBlock();
});

//will put boxes on the screen
function createBoxes() {
  //.map will give you a new array at the end, .forEach
  // works on things in array, doesn't necessarily make a new array
  colors.forEach(function (color) {
        var $box = $('<div></div>');
        $box.addClass('box');
        //will attach color information to the boxes to use later
        $box.data('color', color);
        $box.css('background-color', color);
        $('#app').append($box);
      });
}

//will choose what box user is supposed to click
function chooseRandomBlock() {
  //using colors.length - 1 is better than hard coding max number
  var index = randomNumber(0, colors.length - 1);
  correctColor = colors[index];
  $('#correct-color').text(correctColor);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//event listener for clicks
function registerListeners() {
  $('#app').on('click', '.box', handleClick);
}

//figure out what box was clicked on and what color it is
function handleClick() {
  var $clickedBox = $(this);
  var color = $clickedBox.data('color');
  if (color === correctColor) {
    //suceess
    $('#message').text('Yeah!');
    setTimeout(function () {
      $clickedBox.css('background-color', color);
      chooseRandomBlock();
      $('#message').text('');
    }, TIMEOUT);
    $clickedBox.css('background-color', SUCCESS_COLOR);

  } else {
    //try again
    $('#message').text('Nope!');
  }
}
