 /* //clicking cycles through o,x and blank
$(document).ready(function() {
  $('.input').click(function() {
    var clicked = $(this).text();
    if (clicked === "O") {
      $(this).text('X');
    }
    else if (clicked === "X") {
      $(this).text(' ');
    }
    else {
      $(this).text('O');
    }
  });
});
*/
////////////////////////////////////////

// third iteration & fourth iteration - clicking will only put O's or X's, if button is occupied, does nothing
/*
var turn = 0;

$(document).ready(function() {
  $('.input').click(function() {
    var symbol = $(this).text();
    if (symbol === '') {
      if (turn % 2 === 0) {
        $(this).text('O');
      }
      else {
        $(this).text('X');
      }
      turn = turn + 1;
      var board = getCurrentBoard()
      var winner = checkWinner(board);
      if (winner) {
        alert('The winner is ' + winner);
      }
    } else if (symbol === "O" || symbol === "X") {
        //disables button
    }
  });
}); */
//////////////////////////////////////// */
// fifth iteration
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];


// function takes
// 1. the board
// 2. returns the winner "O" or "X"
function checkWinner(board) {
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (playerOccupiesSquares('O', combo, board)) {
      return 'O';
    }
    if (playerOccupiesSquares('X', combo, board)) {
      return 'X';
    }
  }
  return null;
}

// function that takes
// 1. a player "O" or "X"
// 2. a winning combo - array of 3 numbers (array indices)
// 3. the board - an array of all moves
// and returns true if players occupies all 3, or false otherwise
function playerOccupiesSquares(player, squares, board) {
  for (var i = 0; i < squares.length; i++) {
    var idx = squares[i];
    var value = board[idx];
    if (value !== player) {
      return false;
    }
  }
  return true;
}

// function that returns an array consisting of the current moves on the board

function getCurrentBoard() {
  var buttons = $('button');
  var moves = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = $(buttons[i]);
    moves.push(button.text());
  }
  return moves;
}

var turn = 0;

$(document).ready(function() {
  $('.input').click(function() {
    var symbol = $(this).text();
    if (symbol === '') {
      if (turn % 2 === 0) {
        $(this).text('O');
      }
      else {
        $(this).text('X');
      }
      turn = turn + 1;
      var board = getCurrentBoard()
      var winner = checkWinner(board);
      if (winner) {
        alert('The winner is ' + winner);
      }
    } else if (symbol === "O" || symbol === "X") {
        //disables button
    }
  });
});
