
function swap(a: number) {
    let aIndex = Board.indexOf(a)
    let zeroIndex = Board.indexOf(0)
    Board[aIndex] = 0
    Board[zeroIndex] = a
    return Board
}

let i = 0
let Board: number[] = []
let CurrentNum = 0
let ALLNum = [
    1,
    2,
    3,
    4,
    5,
    0
]
let Cell1 = sprites.create(img`
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222212222222222222222
    2222222222222222222222212222222222222222
    2222222222222222222222112222222222222222
    2222222222222222222221112222222222222222
    2222222222222222222212212222222222222222
    2222222222222222222122212222222222222222
    2222222222222222222122212222222222222222
    2222222222222222211222212222222222222222
    2222222222222222122222212222222222222222
    2222222222222211222222212222222222222222
    2222222222222122222222212222222222222222
    2222222222221222222222212222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222112222222
    2222222222222221111111111111111112222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, SpriteKind.Player)
let Cell2 = sprites.create(img`
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222221111122222222222222222
    2222222222222222112222211222222222222222
    2222222222222211222222222122222222222222
    2222222222222112222222222212222222222222
    2222222222222222222222222212222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222212222222222222
    2222222222222222222222222212222222222222
    2222222222222222222222222122222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222212222222222222222
    2222222222222222222221122222222222222222
    2222222222222222222221222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222122222222222222222222
    2222222222222222211222222222222222222222
    2222222222222222122222222222222222222222
    2222222222222211222222222222222222222222
    2222222222221111111111111111111112222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, SpriteKind.Player)
let Cell3 = sprites.create(img`
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222211111111222222222222222
    2222222222222222122222222112222222222222
    2222222222222222222222222212222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222221222222222222
    2222222222222222222222222112222222222222
    2222222222222222222222221222222222222222
    2222222222222222222222112222222222222222
    2222222222222222222111111111122222222222
    2222222222222222222222222222212222222222
    2222222222222222222222222222221222222222
    2222222222222222222222222222222122222222
    2222222222222222222222222222222122222222
    2222222222222222222222222222222212222222
    2222222222222222222222222222222212222222
    2222222222222222222222222222222212222222
    2222222222222222222222222222222212222222
    2222222222222222212222222222222212222222
    2222222222222222212222222222222122222222
    2222222222222222212222222222221122222222
    2222222222222222212222222222221222222222
    2222222222222222211222222222112222222222
    2222222222222222222112222111222222222222
    2222222222222222222221111222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, SpriteKind.Player)
let Cell4 = sprites.create(img`
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222112222222222222222222222
    2222222222222222122222222222222222222222
    2222222222222221221222222222222222222222
    2222222222222212222122222222222222222222
    2222222222222212222122222222222222222222
    2222222222222122222122222222222222222222
    2222222222221222222122222222222222222222
    2222222222221222222122222222222222222222
    2222222222212222222122222222222222222222
    2222222222122222222122222222222222222222
    2222222222122222222122222222222222222222
    2222222221222222222122222222222222222222
    2222222221222222222122222222222222222222
    2222222212222222222212222212222222222222
    2222222122222221111111111112222222222222
    2222221111111112222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222212222222222222222222
    2222222222222222222112222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, SpriteKind.Player)
let Cell5 = sprites.create(img`
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222111111222222222222
    2222222222222211111111222222222222222222
    2222222222222212222222222222222222222222
    2222222222222211222222222222222222222222
    2222222222222221222222222222222222222222
    2222222222222221222222222222222222222222
    2222222222222221222222222222222222222222
    2222222222222221222222222222222222222222
    2222222222222221222222222222222222222222
    2222222222222221221111112222222222222222
    2222222222222221112222221122222222222222
    2222222222222221222222222211222222222222
    2222222222222222222222222221122222222222
    2222222222222222222222222222112222222222
    2222222222222222222222222222212222222222
    2222222222222222222222222222212222222222
    2222222222222222222222222222212222222222
    2222222222222222222222222222212222222222
    2222222222222222222222222222212222222222
    2222222222222222222222222222212222222222
    2222222222222222122222222222212222222222
    2222222222222222122222222222122222222222
    2222222222222222212222222221222222222222
    2222222222222222212222222212222222222222
    2222222222222222221222222112222222222222
    2222222222222222222111111222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    2222222222222222222222222222222222222222
    `, SpriteKind.Player)
let EmptyCell = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Player)
let SpriteArray = [
    EmptyCell,
    Cell1,
    Cell2,
    Cell3,
    Cell4,
    Cell5
]
for (let index = 0; index < 6; index++) {
    CurrentNum = ALLNum.removeAt(randint(0, ALLNum.length - 1))
    Board.push(CurrentNum)
}
let positions = [
    [40, 40],
    [80, 40],
    [120, 40],
    [40, 80],
    [80, 80],
    [120, 80]
]
displayBoard()
let left = -1
let right = 1
let up = -3
let down = 3
while (true) {
    Board = handleInput()
    displayBoard(Board)
}
function displayBoard(Board) {
    i = 0
    while (i < 6) {
        SpriteArray[Board[i]].x = positions[i][0]
        SpriteArray[Board[i]].y = positions[i][1]
        i += 1
    }
}

function handleInput() {
    let zero = Board.indexOf(0)
    if (controller.up.isPressed()) {
        if ([0,1,2].indexOf(zero) > -1) {
            Board = swap(zero - 3)
        }
    }
    if (controller.down.isPressed()) {
        if ([3,4,5].indexOf(zero) > -1) {
            Board = swap(zero + 3)
        }
    }
    if (controller.left.isPressed()) {
        if ([1, 2, 4, 5].indexOf(zero) > -1) {
            Board = swap(zero - 1)
        }
    }
    if (controller.right.isPressed()) {
        if ([0, 1, 3, 4].indexOf(zero) > -1) {
            Board = swap(zero + 1)
        }
    }
    return Board
}

// Add Board as a parameter to DisplayBoard