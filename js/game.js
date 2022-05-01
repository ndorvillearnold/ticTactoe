const boxes = document.querySelectorAll(".box");
let playerOneTurn = true;

boxes.forEach(element => {
    element.addEventListener("click", start, { once: true })
})
function start(element) {
    //target is like a pointer for HTML to point
    let eachBox = element.target // target each box when clicked
    const currentUserTurn = playerOneTurn ? "O" : "X";



    nextTurn();
    draw(currentUserTurn);
    diffChoices(eachBox, currentUserTurn);
    console.log(playerOneTurn, currentUserTurn);
}

//check functions
function diffChoices(eachBox, currentUserTurn) {
    eachBox.innerText = currentUserTurn;
}

//returned this function above
function nextTurn() {
    playerOneTurn = !playerOneTurn;
}
function draw() {
    return Object.values(boxes).every(e => {
        return e.innerText !== ""
    })
}

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

