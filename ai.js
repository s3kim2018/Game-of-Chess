/** Artifical Intelligence. 
 *  @author Brian Kim
 */
class Ai {
    constructor() {
        this.winningval = 1000;
        this.losingval = -100000;
        this._lastfrom = null; 
        this._lastto = null; 
    }

    findmove(turn, board) {
        if (turn == "W") {
            this.gametree(board, 3, true, 1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
            let fromx = parseInt(this._lastfrom.charAt(0), 10);
            let fromy = parseInt(this._lastfrom.charAt(1), 10);
            let tox =  parseInt(this._lastto.charAt(0), 10);
            let toy = parseInt(this._lastto.charAt(1), 10);
            let hfromx = fromx + 1;
            let hfromy = fromy + 1; 
            let htox = tox + 1; 
            let htoy = toy + 1;  
            board.makemove(hfromx.toString() + hfromy.toString(), htox.toString() + htoy.toString());

        } else if (turn == "B") {
            this.gametree(board, 3, true, -1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
            let fromx = parseInt(this._lastfrom.charAt(0), 10);
            let fromy = parseInt(this._lastfrom.charAt(1), 10);
            let tox =  parseInt(this._lastto.charAt(0), 10);
            let toy = parseInt(this._lastto.charAt(1), 10);
            let hfromx = fromx + 1;
            let hfromy = fromy + 1; 
            let htox = tox + 1; 
            let htoy = toy + 1; 
            board.makemove(hfromx.toString() + hfromy.toString(), htox.toString() + htoy.toString());
        }
    }



    gametree(board, depth, savemode, sense, alpha, beta) {
        let triedto = null; 
        let triedfrom = null; 
        if (depth == 0) {
            return this.staticScore(board);
        }     
        if (sense == 1) {
            let bestval = Number.MIN_SAFE_INTEGER; 
            for (let i = 0; i < board.ftwhitemoves().length; i++) {
                let from = board.ftwhitemoves()[i][0];
                let to = board.ftwhitemoves()[i][1];
                board.passivemove(from, to);
                let val = this.gametree(board, depth - 1, false, -1, alpha, beta);
                board.undo(); 
                if (val > bestval) {
                    triedfrom = from;
                    triedto = to;
                    if (savemode) {
                        this._lastfrom = triedfrom; 
                        this._lastto = triedto;
                    } 
                }
                bestval = Math.max(bestval, val);
                alpha = Math.max(alpha, bestval);
                if (beta <= alpha) {
                    break; 
                } 
            }
            return bestval; 

        } else if (sense == -1) {
            let bestval = Number.MAX_SAFE_INTEGER; 
            for (let i = 0; i < board.ftblackmoves().length; i++) {
                let from = board.ftblackmoves()[i][0];
                let to = board.ftblackmoves()[i][1];
                board.passivemove(from, to);
                let val = this.gametree(board, depth - 1, false, 1, alpha, beta);
                board.undo(); 
                if (val < bestval) {
                    triedfrom = from;
                    triedto = to;
                    if (savemode) {
                        this._lastfrom = triedfrom; 
                        this._lastto = triedto;
                    } 
                }
                bestval = Math.min(bestval, val);
                beta = Math.min(beta, bestval);
                if (beta <= alpha) {
                    break;
                }      
            }
            return bestval; 

        }

    }

    staticScore(board) {
        let score = 0;
        if (board._winner == "W") {
            score += this.winningval; 
        }
         if (board._winner == "B") {
            score -= this.winningval;
        } 
        for (let i = 0; i < board._piecelocations.length; i++) {
            let x = parseInt(board._piecelocations[i].charAt(0), 10);
            let y = parseInt(board._piecelocations[i].charAt(1), 10);
            if (board._board[y][x].piece == "♔") {
                score += 180;
            } else if (board._board[y][x].piece == "♚") {
                score -= 180; 
            } else if (board._board[y][x].piece == "♕") {
                score += 130; 
            } else if (board._board[y][x].piece == "♛") {
                score -= 130; 
            } else if (board._board[y][x].piece == "♖") {
                score += 90; 
            } else if (board._board[y][x].piece == "♜") {
                score -= 90; 
            } else if (board._board[y][x].piece == "♗") {
                score += 65; 
            } else if (board._board[y][x].piece == "♝") {
                score -= 65; 
            } else if (board._board[y][x].piece == "♘") {
                score += 65; 
            } else if (board._board[y][x].piece == "♞") {
                score -= 65; 
            } else if (board._board[y][x].piece == "♙") {
                score += 45 
                score += Math.abs(y - 0) * 5; 
            } else if (board._board[y][x].piece == "♟") {
                score -= 45
                score -= Math.abs(y - 8) * 5; 
            }
        }
        score -= 6 * board._blackmoves.length;
        score += 6 * board._whitemoves.length;
        return score; 
    }

    
 

}