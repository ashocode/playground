function solve(params){
    var rows = Number(params[0]),
        moves = [],
        arr = [],
        desk = [],
        start = [],
        end = [],
        moveValid = 0,
        startCol,
        startRow,
        endCol,
        endRow,
        currentMove,
        rookPath = [],
        bishopPath = []; 
        
        function createDesk (){
            for (i = 2; i < (rows + 2); i += 1){
                arr[i - 2] = params[i].split('');
            }
            desk = arr.reverse();
        }
        createDesk();

        function getMoves (){
            for (j = (rows + 3); j < params.length; j += 1){
                moves[j - (rows + 3)] = params[j].split(' ');
            }

        var rook = function(){
                if ((startRow > endRow)&&(startCol === endCol)){
                    rookPath = [];
                    var r = 0;
                    for (r = 1; r < (startRow - endRow); r += 1){
                        if (desk[startRow - r][startCol] === '-'){
                            rookPath[(r - 1)] = '1';
                        } else {
                            rookPath[(r - 1)] = '0';
                        }
                    }
                } else if ((startRow < endRow)&&(startCol === endCol)){
                    rookPath = [];
                    var r = 0;
                    for (r = 1; r < (endRow - startRow); r += 1){
                        if (desk[startRow + r][startCol] === '-'){
                            rookPath[(r - 1)] = '1';
                        } else {
                            rookPath[(r - 1)] = '0';
                        }
                    }
                } else if ((startRow === endRow)&&(startCol < endCol)){
                    rookPath = [];
                    var r = 0;
                    for (r = 1; r < (endCol - startCol); r += 1){
                        if (desk[startRow][startCol + r] === '-'){
                            rookPath[(r - 1)] = '1';
                        } else {
                            rookPath[(r - 1)] = '0';
                        }
                    }
                } else if ((startRow === endRow)&&(startCol > endCol)){
                    rookPath = [];
                    var r = 0;
                    for (r = 1; r < (startCol - endCol); r += 1){
                        if (desk[startRow][startCol - r] === '-'){
                            rookPath[(r - 1)] = '1';
                        } else {
                            rookPath[(r - 1)] = '0';
                        }
                    }
                } else {
                    rookPath[0] = '0';                             //If the move is not vertical or horizontal it is not valid for a rook
            }
            moveValid = rookPath.every(function(x){return x === '1'});
            return moveValid;
        }

        var bishop = function(){
                var moveSize = Math.abs(startCol - endCol);
                if (Math.abs(startCol - endCol) !== Math.abs(startRow - endRow)){
                    bishopPath[0] = '0';
                } else if ((startRow > endRow)&&(startCol > endCol)){
                    bishopPath = [];
                    var r = 0;
                    for (r = 1; r <= moveSize; r += 1){
                            if (desk[startRow - r][startCol - r]=== '-'){
                                bishopPath[(r - 1)] = '1';
                            } else {
                                bishopPath[(r - 1)] = '0';
                            }
                    }
                } else if ((startRow < endRow)&&(startCol > endCol)){
                    bishopPath = [];
                    var r = 0;
                    for (r = 1; r <= moveSize; r += 1){
                            if (desk[startRow + r][startCol - r]=== '-'){
                                bishopPath[(r - 1)] = '1';
                            } else {
                                bishopPath[(r - 1)] = '0';
                            }
                    }
                } else if ((startRow < endRow)&&(startCol < endCol)){
                    var r = 0;
                    bishopPath = [];
                    for (r = 1; r <= moveSize; r += 1){
                            if (desk[startRow + r][startCol + r]=== '-'){
                                bishopPath[(r - 1)] = '1';
                            } else {
                                bishopPath[(r - 1)] = '0';
                            }
                    }
                    
            } else if ((startRow > endRow)&&(startCol < endCol)){
                    bishopPath = [];
                    var r = 0;
                    for (r = 1; r <= moveSize; r += 1){
                            if (desk[startRow - r][startCol + r] === '-'){
                                bishopPath[(r - 1)] = '1';
                            } else {
                                bishopPath[(r - 1)] = '0';
                            }
                    }   
                }
                moveValid = bishopPath.every(function(y){return y === '1'});
                return moveValid;
            }
            var queen = function() {
                if (moveValid = ((rook() || bishop()) === true)){
                return moveValid = true;
                }
            }

        function checkMoves (){
            moveValid = false;
            for (k = 0; k < moves.length; k += 1){
                currentMove = moves[k];
                //console.log(currentMove);
                start = currentMove[0];
                end = currentMove[1];
                startCol = (start.charCodeAt(0) - 97);
                startRow = Number(start.charAt(1) - 1);
                endCol = (end.charCodeAt(0) - 97);
                endRow = Number(end.charAt(1) - 1);
                if ((startCol === endCol)&&(startRow === endRow)){
                    moveValid = false;                              //If start and end fields are the same the move is not valid
                } else if (desk[startRow][startCol] === '-'){
                    moveValid = false;
                } else if (desk[startRow][startCol] === 'B'){
                    bishop();
                } else if (desk[startRow][startCol] === 'R'){
                    rook();
                } else if (desk[startRow][startCol] === 'Q'){
                    queen();
                }
                switch (moveValid){
                    case true:
                        console.log('Yes');
                        break;
                    case false:
                        console.log('No');
                        break;
                }     
            }
        }
        checkMoves();
        }
    getMoves();
}

var params = [
    '3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3'
];
solve(params);

/*    '5', 
    '5', 
    'Q---Q',
    '-----',
    '-B---',
    '--R--',
    'Q---Q',
    '10',
    'a1 a1',
    'a1 d4',
    'e1 b4',
    'a5 d2',
    'e5 b2',
    'b3 d5',
    'b3 a2',
    'b3 d1',
    'b3 a4',
    'c2 c5'	*/