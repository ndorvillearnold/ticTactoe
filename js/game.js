// const board = [["", "", ""], ["", "", ""], ["", "", ""]];

const boxes = document.querySelectorAll('.box');

let playerOneTurn = true;

const currentUserTurn = "X"

boxes.forEach(element => {
    element.addEventListener("click", start, { once: true })

})
function start(element) {

    let eachBox = element.target // target each box when clicked
    console.log(eachBox);

    diffChoices(eachBox)
}
function diffChoices(eachBox) {
    eachBox.innterText = "X";
    console.log(eachBox.innterText)

}




//target is like a pointer for HTML to point

// class Game {
//     constructor(X, O) {
//         this.X = X
//         this.O = O
//         // this.isPlayerOneTurn = true
//         // this.isGameOver = false
//         // this.board = board
//         // this.count = count
//     }
//     player() {
//         return this.X
//     }

// }

// const start = new Game("X", "0", true, false)

