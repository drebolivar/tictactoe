////////////////////////////////
// Global Variables Here
const tiles = document.querySelectorAll('.tile')
const xPlayer = 'X'
const oPlayer = 'O'
let turn = xPlayer

const boardState = Array(tiles.length)
boardState.fill(null)

//Elements
const results = document.getElementById('finishGame')
const resultsText = document.getElementById('finishText')
const reset = (document.getElementById('restart').onclick = startNew)

////////////////////////////////
// Functions For Game Logic Here

function tileClick(event) {
  if (results.classList.contains('visible')) {
    return
  }

  const tile = event.target
  const tileNumber = tile.dataset.index

  if (tile.innerText != '') {
    return
  }

  if (turn === xPlayer) {
    tile.innerText = xPlayer
    boardState[tileNumber] = xPlayer
    turn = oPlayer
  } else {
    tile.innerText = oPlayer
    boardState[tileNumber] = oPlayer
    turn = xPlayer
  }
  console.log(turn)
  checkWinner()
}

function checkWinner() {
  for (const winningCombination of winningCombinations) {
    const combo = winningCombination.combo
    const tileValue1 = boardState[combo[0]]
    const tileValue2 = boardState[combo[1]]
    const tileValue3 = boardState[combo[2]]

    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      gameOver()
    }
  }
}
//draw
function tieGame() {
  text = 'Tie game? How whack'
  results.className = 'visible'
  resultsText.innerText = text
}

function gameOver() {
  if (turn == 'O') {
    text = 'Winner is X!'
  } else {
    text = 'Winner is O!'
  }
  results.className = 'visible'
  resultsText.innerText = text
}

function startNew() {
  results.className = 'hidden'
  boardState.fill(null)
  tiles.forEach((tile) => (tile.innerText = ''))
  turn = xPlayer
  results
}

const winningCombinations = [
  { combo: [0, 1, 2] },
  { combo: [3, 4, 5] },
  { combo: [6, 7, 8] },
  { combo: [0, 3, 6] },
  { combo: [1, 4, 7] },
  { combo: [2, 5, 8] },
  { combo: [0, 4, 8] },
  { combo: [2, 4, 6] }
]
////////////////////////////////
// Event Listeners Here
////////////////////////////////
tiles.forEach((tile) => tile.addEventListener('click', tileClick))
