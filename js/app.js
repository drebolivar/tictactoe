////////////////////////////////
// Global Variables Here
let playerTxt = document.getElementById('playerTxt')
let resetBtn = document.getElementById('resetBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let spaces = Array(9).fill(null)

// ////////////////////////////////
// // Functions For Game Logic Here

// ////////////////////////////////
// // Event Listeners Here
const startGame = () => {
  boxes.forEach((box) => box.addEventListener('click', boxClicked))
}
function boxClicked(e) {
  const id = e.target.id

  if (!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    currentPlayer = currentPlayer == player1 ? player2 : player1
  }
}
startGame()
// ////////////////////////////////
