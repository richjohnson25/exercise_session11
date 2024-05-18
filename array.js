function matrixAdd(arr1, arr2) {
    let result = []

    for(let i = 0; i < arr1.length; i++){
        let temp = []
        for(let j = 0; j < arr1.length; j++){
            temp.push(arr1[i][j] + arr2[i][j])
        }
        result.push(temp)
    }
    return result
}

console.log(matrixAdd([
    [ 1, 2, 3, 4 ],
    [ 10, 9, 8, 7 ],
    [ 1, 3, 5, 7 ],
    [ 4, 8, 12, 16 ]
  ],[
    [ 3, 5, 8, 4 ],
    [ 5, 4, 3, 2 ],
    [ 12, 9, 6, 3 ],
    [ 9, 7, 5, 3 ]
  ]))

  /*
[
    [ 4, 7, 11, 8 ],
    [ 15, 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ]
  ]

  */

function arraySudoku(board, coordinate, value){
    for(let i = 0; i < board.length; i++){
        if(board[0][i] == value){
            return false
        }
    }
}

var arraySudoku =[
   //0 1 2 3 4 5 6 7 8
    [1,0,0,0,0,0,0,4,0],// 0
    [0,2,0,0,0,0,0,0,0],// 1
    [0,0,3,0,0,0,5,1,0],// 2
    [0,0,0,4,0,0,0,0,0],// 3
    [0,0,0,0,5,0,0,0,0],// 4
    [0,1,0,3,0,6,0,0,0],// 5
    [0,0,2,0,0,0,7,0,0],// 6
    [0,0,0,0,0,0,0,8,0],// 7
    [0,0,0,0,0,0,0,0,9],// 8
]

function minesweeper(board, coordinate){
    let bombs = 0

    if(board[coordinate[0]][coordinate[1]-1] == 0){
        bombs++
    }
    if(board[coordinate[0]][coordinate[1]+1] == 0){
        bombs++
    }
    if(board[coordinate[0]-1][coordinate[0]] == 0){
        bombs++
    }
    if(board[coordinate[0]+1][coordinate[0]] == 0){
        bombs++
    }
    if(board[coordinate[0]-1][coordinate[1]-1] == 0){
        bombs++
    }
    if(board[coordinate[0]-1][coordinate[1]+1] == 0){
        bombs++
    }
    if(board[coordinate[0]+1][coordinate[1]-1] == 0){
        bombs++
    }
    if(board[coordinate[0]+1][coordinate[1]+1] == 0){
        bombs++
    }

    return bombs
}

console.log(minesweeper([
    [0,2,1,3,0],
    [2,4,0,5,0],
    [0,3,0,0,2],
    [2,3,4,4,3],
    [1,0,2,0,0]
],[1,1]))