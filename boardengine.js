

/** General Initialization */
var white = document.querySelectorAll(".white");
var black = document.querySelectorAll(".black");
var wpieces = document.querySelectorAll(".wpiece");
var bpieces = document.querySelectorAll(".bpiece");

/** White Pieces Initialization */
var wqueen = document.querySelectorAll(".wpiece.wq");
var wking = document.querySelector(".wpiece.wking");
var wrook1 = document.querySelector(".wpiece.wr.r1");
var wrook2 = document.querySelector(".wpiece.wr.r2");
var wknight1 = document.querySelector(".wpiece.wk.k1");
var wknight2 = document.querySelector(".wpiece.wk.k2"); 
var wbishop1 = document.querySelector(".wpiece.wb.b1");
var wbishop2 = document.querySelector(".wpiece.wb.b2");
var wpeon1 = document.querySelector(".wpiece.wp.p1");
var wpeon2 = document.querySelector(".wpiece.wp.p2");
var wpeon3 = document.querySelector(".wpiece.wp.p3");
var wpeon4 = document.querySelector(".wpiece.wp.p4");
var wpeon5 = document.querySelector(".wpiece.wp.p5");
var wpeon6 = document.querySelector(".wpiece.wp.p6");
var wpeon7 = document.querySelector(".wpiece.wp.p7");
var wpeon8 = document.querySelector(".wpiece.wp.p8");

/** Black Pieces Initialization */
var bqueen = document.querySelectorAll(".bpiece.bq");
var bking = document.querySelector(".bpiece.bking");
var brook1 = document.querySelector(".bpiece.br.r1");
var brook2 = document.querySelector(".bpiece.br.r2");
var bknight1 = document.querySelector(".bpiece.bk.k1");
var bknight2 = document.querySelector(".bpiece.bk.k2"); 
var bbishop1 = document.querySelector(".bpiece.bb.b1");
var bbishop2 = document.querySelector(".bpiece.bb.b2");
var bpeon1 = document.querySelector(".bpiece.bp.p1");
var bpeon2 = document.querySelector(".bpiece.bp.p2");
var bpeon3 = document.querySelector(".bpiece.bp.p3");
var bpeon4 = document.querySelector(".bpiece.bp.p4");
var bpeon5 = document.querySelector(".bpiece.bp.p5");
var bpeon6 = document.querySelector(".bpiece.bp.p6");
var bpeon7 = document.querySelector(".bpiece.bp.p7");
var bpeon8 = document.querySelector(".bpiece.bp.p8");

/** Vertical Columns */
var vcor8 = document.getElementById("vcor8");
var vcor7 = document.getElementById("vcor7");
var vcor6 = document.getElementById("vcor6");
var vcor5 = document.getElementById("vcor5");
var vcor4 = document.getElementById("vcor4");
var vcor3 = document.getElementById("vcor3");
var vcor2 = document.getElementById("vcor2");
var vcor1 = document.getElementById("vcor1");

/** Horizontal Columns */
var hcor1 = document.getElementById("hcor1");
var hcor2 = document.getElementById("hcor2");
var hcor3 = document.getElementById("hcor3");
var hcor4 = document.getElementById("hcor4");
var hcor5 = document.getElementById("hcor5");
var hcor6 = document.getElementById("hcor6");
var hcor7 = document.getElementById("hcor7");
var hcor8 = document.getElementById("hcor8");

function init() {
    /** General Initialization */
    wpieces = document.querySelectorAll(".wpiece");
    bpieces = document.querySelectorAll(".bpiece");
    
    /** White Pieces Initialization */
    wqueen = document.querySelectorAll(".wpiece.wq");
    wking = document.querySelector(".wpiece.wking");
    wrook1 = document.querySelector(".wpiece.wr.r1");
    wrook2 = document.querySelector(".wpiece.wr.r2");
    wknight1 = document.querySelector(".wpiece.wk.k1");
    wknight2 = document.querySelector(".wpiece.wk.k2"); 
    wbishop1 = document.querySelector(".wpiece.wb.b1");
    wbishop2 = document.querySelector(".wpiece.wb.b2");
    wpeon1 = document.querySelector(".wpiece.wp.p1");
    wpeon2 = document.querySelector(".wpiece.wp.p2");
    wpeon3 = document.querySelector(".wpiece.wp.p3");
    wpeon4 = document.querySelector(".wpiece.wp.p4");
    wpeon5 = document.querySelector(".wpiece.wp.p5");
    wpeon6 = document.querySelector(".wpiece.wp.p6");
    wpeon7 = document.querySelector(".wpiece.wp.p7");
    wpeon8 = document.querySelector(".wpiece.wp.p8");

    /** Black Pieces Initialization */
    bqueen = document.querySelectorAll(".bpiece.bq");
    bking = document.querySelector(".bpiece.bking");
    brook1 = document.querySelector(".bpiece.br.r1");
    brook2 = document.querySelector(".bpiece.br.r2");
    bknight1 = document.querySelector(".bpiece.bk.k1");
    bknight2 = document.querySelector(".bpiece.bk.k2"); 
    bbishop1 = document.querySelector(".bpiece.bb.b1");
    bbishop2 = document.querySelector(".bpiece.bb.b2");
    bpeon1 = document.querySelector(".bpiece.bp.p1");
    bpeon2 = document.querySelector(".bpiece.bp.p2");
    bpeon3 = document.querySelector(".bpiece.bp.p3");
    bpeon4 = document.querySelector(".bpiece.bp.p4");
    bpeon5 = document.querySelector(".bpiece.bp.p5");
    bpeon6 = document.querySelector(".bpiece.bp.p6");
    bpeon7 = document.querySelector(".bpiece.bp.p7");
    bpeon8 = document.querySelector(".bpiece.bp.p8");
}

/** The state of the Chess Game.
 *  @author Brian Kim
 */
class Board {  

    /** Constructs the Board for the first time.
     * @param turn "input of whose turn it is";
     */
    constructor(turn, wai, bai) {
        this._turn = turn;
        this._winner = null;
        this._piecelocations = []; 
        this._check = false;  
        this._wai = wai; 
        this._bai = bai;  
        /* Creating 2 dimentional Array **/
        this._board = new Array(8);
        for (let i = 0; i < 8; i++) {
            this._board[i] = new Array(8);
        }
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                var bumpy = i + 1; 
                var bumpx = j + 1; 
                var piece = document.getElementById(bumpx.toString() + bumpy.toString()).innerHTML;
                this._board[i][j] = new Place(piece);
                if (piece != "") {
                    this._piecelocations.push(j.toString() + i.toString());
                } 
            }           
        }
        this._blackmoves = this.blackmoves(); 
        this._whitemoves = this.whitemoves();
        this._undostack = []; 

    }

    /**
     * Returns all legal moves a piece can have. 
     * @param {String} piece "What kind of piece it is";
     * @param {String} cor "The Coordinate of the piece";
     */
    legalmoves(piece, cor) {
        let x = cor.charAt(0);
        let y = cor.charAt(1);
        var allmoves = []; 
        if (piece == "King" && this._winner == null) {
            allmoves = this.kingmoves(x, y, false);
        } else if (piece == "Queen" && this._winner == null) {
            allmoves = this.queenmoves(x, y, false);
        } else if (piece == "Rook" && this._winner == null) {
            allmoves = this.rookmoves(x, y, false);
        } else if (piece == "Knight" && this._winner == null) {
            allmoves = this.knightmoves(x, y, false); 
        } else if (piece == "Bishop" && this._winner == null) {
            allmoves = this.bishopmoves(x, y, false);
        } else if (piece == "Peon" && this._winner == null) {
            allmoves = this.peonmoves(x, y, false);
        }
        return allmoves; 
    }

    /**
     * Returns all King moves for coordinates (x, y)
     * @param {int} x "coordinate x";
     * @param {int} y "coordinate y";
     * @param {boolean} stop "determines if mutual recursion between allmoves should end"
     */
    kingmoves(x, y, check) {
        var wmove = ["-", "♚", "♛", "♜", "♝", "♞", "♟"];
        var bmove = ["-", "♔", "♕", "♖", "♗", "♘", "♙"]; 
        var hmove = ["-", "♚", "♔", "♕", "♖", "♗", "♘", "♙", "♛", "♜", "♝", "♞", "♟"];
        let xbor = x - 1; 
        let ybor = y - 1;
        let blackattack = null; 
        let whiteattack = null;
        var allmoves = [];
        if (check == false) {
            blackattack = this.blackattackmoves(); 
            whiteattack = this.whiteattackmoves();  
        } 
        if (this.inboard(xbor + 1, ybor)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor][xbor + 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor][xbor + 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor][xbor + 1].piece))) {
                let testx = xbor + 1; 
                let testy = ybor; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor + 1 + 1; let newy = ybor + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor + 1 + 1; let newy = ybor + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }
                    }
                } else {
                    let newx = xbor + 1 + 1; let newy = ybor + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }
            }
        }
        if (this.inboard(xbor, ybor + 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 1][xbor].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 1][xbor].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 1][xbor].piece))) {
                let testx = xbor; 
                let testy = ybor + 1; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor + 1; let newy = ybor + 1 + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor + 1; let newy = ybor + 1 + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }

                    }
                } else {
                    let newx = xbor + 1; let newy = ybor + 1 + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }
            }
        }
        if (this.inboard(xbor - 1, ybor)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor][xbor - 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor][xbor - 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor][xbor - 1].piece))) {
                let testx = xbor - 1; 
                let testy = ybor; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor - 1 + 1; let newy = ybor + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor - 1 + 1; let newy = ybor + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }
                    }
                } else {
                    let newx = xbor - 1 + 1; let newy = ybor + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }
            }
        }
        if (this.inboard(xbor, ybor - 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 1][xbor].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 1][xbor].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 1][xbor].piece))) {
                let testx = xbor; 
                let testy = ybor - 1; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor + 1; let newy = ybor - 1 + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor + 1; let newy = ybor - 1 + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }
                    }
                } else {
                    let newx = xbor + 1; let newy = ybor - 1 + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }
            }
        }
        /** Upper Right x+1 and y+1 */
        if (this.inboard(xbor + 1, ybor + 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 1][xbor + 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 1][xbor + 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 1][xbor + 1].piece))) {
                let testx = xbor + 1; 
                let testy = ybor + 1; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor + 1 + 1; let newy = ybor + 1 + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor + 1 + 1; let newy = ybor + 1 + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }
                    }
                } else {
                    let newx = xbor + 1 + 1; let newy = ybor + 1 + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }                
            }
        }

        /** Lower Right x+1 and y-1 */ 
        if (this.inboard(xbor + 1, ybor - 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 1][xbor + 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 1][xbor + 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 1][xbor + 1].piece))) {
                let testx = xbor + 1; 
                let testy = ybor - 1; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor + 1 + 1; let newy = ybor - 1 + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor + 1 + 1; let newy = ybor - 1 + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }
                    }
                } else {
                    let newx = xbor + 1 + 1; let newy = ybor - 1 + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }
            }
        }

        /** Upper Left x-1 and y+1 */
        if (this.inboard(xbor - 1, ybor + 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 1][xbor - 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 1][xbor - 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 1][xbor - 1].piece))) {
                let testx = xbor - 1; 
                let testy = ybor + 1; 
                if (check == false) {
                    var test = this.whiteattackmoves(); 
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor - 1 + 1; let newy = ybor + 1 + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor - 1 + 1; let newy = ybor + 1 + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }

                    }
                } else {
                    let newx = xbor - 1 + 1; let newy = ybor + 1 + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }


            }
        }
        /** Lower Left x-1 and y-1 */
        if (this.inboard(xbor - 1, ybor - 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 1][xbor - 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 1][xbor - 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 1][xbor - 1].piece))) {
                let testx = xbor - 1; 
                let testy = ybor - 1; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        if (this._check == true) {
                            if (this.uncheckingmove(xbor.toString() + ybor.toString(), testx.toString() + testy.toString(), "king")) {
                                let newx = xbor - 1 + 1; let newy = ybor - 1 + 1; 
                                allmoves.push(newx.toString() + newy.toString()); 
                            }
                        } else {
                            let newx = xbor - 1 + 1; let newy = ybor - 1 + 1; 
                            allmoves.push(newx.toString() + newy.toString()); 
                        }
                    }
                } else {
                    let newx = xbor - 1 + 1; let newy = ybor - 1 + 1; 
                    allmoves.push(newx.toString() + newy.toString()); 
                }

            }
        }
        /** Castling check. */
        if (x == 5 && y == 1 && this._turn == "W") {
            if (this._board[0][0].piece == "♖" && this._board[0][2].piece == "-" &&
             this._board[0][3].piece == "-" && this._board[0][1].piece == "-") {
                let testx = 2;
                let testy = 0;
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        allmoves.push("31");
                    }
                } else {
                    allmoves.push("31");
                }
            } 
            if (this._board[0][7].piece == "♖" && this._board[0][6].piece == "-" && this._board[0][5].piece == "-") {
                let testx = 6; 
                let testy = 0; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        allmoves.push("71");
                    }
                } else {
                    allmoves.push("71");
                }
            }
        } else if (x == 5 && y == 8 && this._turn == "B") {

            if (this._board[7][0].piece == "♜" && this._board[7][2].piece == "-" &&
             this._board[7][3].piece =="-" && this._board[7][1].piece == "-") {
                let testx = 2; 
                let testy = 7;
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        allmoves.push("38");
                    } 
                } else {
                    allmoves.push("38");
                }
            } 
            if (this._board[7][7].piece == "♜" && this._board[7][6].piece == "-" && this._board[7][5].piece == "-") {
                let testx = 6;
                let testy = 7; 
                if (check == false) {
                    if ((this._turn == "W" && !blackattack.includes(testx.toString() + testy.toString())) ||
                    (this._turn == "B" && !whiteattack.includes(testx.toString() + testy.toString()))) {
                        allmoves.push("78");
                    }
                } else {
                    allmoves.push("78");
                }
            }
        }
        return allmoves;  
    }

    /**
     * Returns all Knight moves for coordinate (x, y)
     * @param {int} x "coordinate x";
     * @param {int} y "coordinate y"; 
     */
    knightmoves(x, y, check) {
        var wmove = ["-", "♚", "♛", "♜", "♝", "♞", "♟"];
        var bmove = ["-", "♔", "♕", "♖", "♗", "♘", "♙"]; 
        var hmove = ["-", "♚", "♔", "♕", "♖", "♗", "♘", "♙", "♛", "♜", "♝", "♞", "♟"];
        let xbor = x - 1; 
        let ybor = y - 1;
        var allmoves = [];
        if (this.inboard(xbor + 1, ybor + 2)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 2][xbor + 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 2][xbor + 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 2][xbor + 1].piece))) {
                let nxbor = xbor + 1;
                let nybor = ybor + 2;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 + 1; let newy = ybor + 1 + 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 + 1; let newy = ybor + 1 + 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 + 1; let newy = ybor + 1 + 2;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }
        }
        if (this.inboard(xbor - 1, ybor + 2)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 2][xbor - 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 2][xbor - 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 2][xbor - 1].piece))) {
                let nxbor = xbor - 1;
                let nybor = ybor + 2;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 - 1; let newy = ybor + 1 + 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 - 1; let newy = ybor + 1 + 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 - 1; let newy = ybor + 1 + 2;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }
        }
        if (this.inboard(xbor - 1, ybor - 2)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 2][xbor - 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 2][xbor - 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 2][xbor - 1].piece))) {
                let nxbor = xbor - 1;
                let nybor = ybor - 2;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 - 1; let newy = ybor + 1 - 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 - 1; let newy = ybor + 1 - 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 - 1; let newy = ybor + 1 - 2;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }
            
        } 
        if (this.inboard(xbor + 1, ybor - 2)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 2][xbor + 1].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 2][xbor + 1].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 2][xbor + 1].piece))) {
                let nxbor = xbor + 1;
                let nybor = ybor - 2;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 + 1; let newy = ybor + 1 - 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 + 1; let newy = ybor + 1 - 2;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 + 1; let newy = ybor + 1 - 2;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }

        }
        if (this.inboard(xbor + 2, ybor + 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 1][xbor + 2].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 1][xbor + 2].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 1][xbor + 2].piece))) {
                let nxbor = xbor + 2;
                let nybor = ybor + 1;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 + 2; let newy = ybor + 1 + 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 + 2; let newy = ybor + 1 + 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 + 2; let newy = ybor + 1 + 1;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }
        }
        if (this.inboard(xbor + 2, ybor - 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 1][xbor + 2].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 1][xbor + 2].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 1][xbor + 2].piece))) {
                let nxbor = xbor + 2;
                let nybor = ybor - 1;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 + 2; let newy = ybor + 1 - 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 + 2; let newy = ybor + 1 - 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 + 2; let newy = ybor + 1 - 1;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }
        }
        if (this.inboard(xbor - 2, ybor + 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor + 1][xbor - 2].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor + 1][xbor - 2].piece)) || 
            (check == true && hmove.includes(this._board[ybor + 1][xbor - 2].piece))) {
                let nxbor = xbor - 2;
                let nybor = ybor + 1;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 - 2; let newy = ybor + 1 + 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 - 2; let newy = ybor + 1 + 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 - 2; let newy = ybor + 1 + 1;
                    allmoves.push(newx.toString() + newy.toString());
                }
            }
        }
        if (this.inboard(xbor - 2, ybor - 1)) {
            if ((this._turn == "W" && wmove.includes(this._board[ybor - 1][xbor - 2].piece)) || 
            (this._turn == "B" && bmove.includes(this._board[ybor - 1][xbor - 2].piece)) || 
            (check == true && hmove.includes(this._board[ybor - 1][xbor - 2].piece))) {
                let nxbor = xbor - 2;
                let nybor = ybor - 1;
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "knight")) {
                        let newx = xbor + 1 - 2; let newy = ybor + 1 - 1;
                        allmoves.push(newx.toString() + newy.toString());    
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let newx = xbor + 1 - 2; let newy = ybor + 1 - 1;
                        allmoves.push(newx.toString() + newy.toString());
                    }
                } else {
                    let newx = xbor + 1 - 2; let newy = ybor + 1 - 1;
                    allmoves.push(newx.toString() + newy.toString());    
                }

            }
        }    
        return allmoves; 
    }

    /**
     * Returns all Bishop moves for coordinate (x, y)
     * @param {int} x "coordinate x";
     * @param {int} y "coordinate y"; 
     */
    bishopmoves(x, y, check) {
        let xbor = x - 1; 
        let ybor = y - 1;
        var wmove = ["-", "♚", "♛", "♜", "♝", "♞", "♟"];
        var bmove = ["-", "♔", "♕", "♖", "♗", "♘", "♙"]; 
        var hmove = ["-", "♚", "♔", "♕", "♖", "♗", "♘", "♙", "♛", "♜", "♝", "♞", "♟"];
        var allmoves = []; 
        /** Upper Right Diagonal */
        var nxbor = xbor + 1; 
        var nybor = ybor + 1; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
         || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece)) 
         || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
            if (this._check == true && check == false) {
                if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "bishop")) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else if (this._check == false && check == false) {
                if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else {
                let realx = nxbor + 1; let realy = nybor + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this._board[nybor][nxbor].piece != "-") {
                break; 
            }
            nxbor++; nybor++; 
        }
        /** Upper Left Diagonal */
        var nxbor = xbor - 1; 
        var nybor = ybor + 1; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
            || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece)) 
            || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "bishop")) {
                        let realx = nxbor + 1; let realy = nybor + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let realx = nxbor + 1; let realy = nybor + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
                if (this._board[nybor][nxbor].piece != "-") {
                    break; 
                }
                nxbor--; nybor++; 
        }
        /** Lower Right Diagonal */
        var nxbor = xbor + 1; 
        var nybor = ybor - 1; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
            || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece))
            || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
                if (this._check == true && check == false) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "bishop")) {
                        let realx = nxbor + 1; let realy = nybor + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else if (this._check == false && check == false) {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                        let realx = nxbor + 1; let realy = nybor + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
                if (this._board[nybor][nxbor].piece != "-") {
                    break; 
                }
                nxbor++; nybor--; 
        }
        /** Lower Left Diagonal */
        var nxbor = xbor - 1; 
        var nybor = ybor - 1; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
         || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece)) 
         || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
            if (this._check == true && check == false) {
                if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "bishop")) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else if (this._check == false && check == false) {
                if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else {
                let realx = nxbor + 1; let realy = nybor + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this._board[nybor][nxbor].piece != "-") {
                break; 
            }
            nxbor--; nybor--; 
        }
        return allmoves; 
    }

    /**
     * Returns all Rook moves for coordinate (x, y)
     * @param {int} x "coordinate x";
     * @param {int} y "coordinate y"; 
     */
    rookmoves(x, y, check) {
        var wmove = ["-", "♚", "♛", "♜", "♝", "♞", "♟"];
        var bmove = ["-", "♔", "♕", "♖", "♗", "♘", "♙"]; 
        var hmove = ["-", "♚", "♔", "♕", "♖", "♗", "♘", "♙", "♛", "♜", "♝", "♞", "♟"];
        let xbor = x - 1; 
        let ybor = y - 1;
        var allmoves = [];
        /** Top */
        var nxbor = xbor; 
        var nybor = ybor + 1; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
         || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece))
         || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
            if (this._check == true && check == false) {
                if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "rook")) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else if (this._check == false && check == false) {
                if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else {
                let realx = nxbor + 1; let realy = nybor + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this._board[nybor][nxbor].piece != "-") {
                break; 
            }
            nybor++;
        }
        /** Bottom */
        var nxbor = xbor; 
        var nybor = ybor - 1; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
         || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece)) 
         || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
            if (this._check == true && check == false) {
                if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "rook")) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else if (this._check == false && check == false) {
                if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            }  else {
                let realx = nxbor + 1; let realy = nybor + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this._board[nybor][nxbor].piece != "-") {
                break; 
            }
            nybor--; 
        }
        /** Left */
        var nxbor = xbor - 1; 
        var nybor = ybor; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
         || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece)) 
         || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
            if (this._check == true && check == false) {
                if (this.uncheckingmove(xbor.toString() + ybor.toString() ,nxbor.toString() + nybor.toString(), "rook")) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else if (this._check == false && check == false) {
                if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else {
                let realx = nxbor + 1; let realy = nybor + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this._board[nybor][nxbor].piece != "-") {
                break; 
            }
            nxbor--;
        }
        /** Right */
        var nxbor = xbor + 1; 
        var nybor = ybor; 
        while (this.inboard(nxbor, nybor) && 
        ((this._turn == "W" && wmove.includes(this._board[nybor][nxbor].piece))
         || (this._turn == "B" && bmove.includes(this._board[nybor][nxbor].piece)) 
         || (check == true && hmove.includes(this._board[nybor][nxbor].piece)))) {
            if (this._check == true && check == false) {
                if (this.uncheckingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString(), "rook")) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else if (this._check == false && check == false) {
                if (!this.checkingmove(xbor.toString() + ybor.toString(), nxbor.toString() + nybor.toString())) {
                    let realx = nxbor + 1; let realy = nybor + 1; 
                    allmoves.push(realx.toString() + realy.toString());
                }
            } else {
                let realx = nxbor + 1; let realy = nybor + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this._board[nybor][nxbor].piece != "-") {
                break; 
            }
            nxbor++;
        }
        return allmoves; 
    }

    /**
     * Returns all Queen moves for coordinate (x, y)
     * @param {int} x "coordinate x";
     * @param {int} y "coordinate y"; 
     */
    queenmoves(x, y, check) {
        if (check == true) {
            var rookmoves = this.rookmoves(x, y, true);
            var bishopmoves = this.bishopmoves(x, y, true);
            var queenmove = rookmoves.concat(bishopmoves);   
            return queenmove; 
        } else {
            var rookmoves = this.rookmoves(x, y, false);
            var bishopmoves = this.bishopmoves(x, y, false);
            var queenmove = rookmoves.concat(bishopmoves);   
            return queenmove; 
        }
    }

    /**
     * Returns all Peon moves for coordinate (x, y)
     * @param {int} x "coordinate x";
     * @param {int} y "coordinate y"; 
     */
    peonmoves(x, y, check) {
        var wmove = ["♚", "♛", "♜", "♝", "♞", "♟"];
        var bmove = ["♔", "♕", "♖", "♗", "♘", "♙"]; 
        var hmove = ["-", "♕", "♖", "♗", "♘", "♙", "♛", "♜", "♝", "♞", "♟"];
        let xbor = x - 1; 
        let ybor = y - 1;
        var allmoves = [];
        if (this._turn == "W") {
            if (this.inboard(xbor, ybor + 1) && this._board[ybor + 1][xbor].piece == "-" && check == false) {
                let tox = xbor; 
                let toy = ybor + 1; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1; let realy = ybor + 1 + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1; let realy = ybor + 1 + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }

                }
            }
            if (ybor == 1 && this.inboard(xbor, ybor + 2) && this._board[ybor + 2][xbor].piece == "-" && this._board[ybor + 1][xbor].piece == "-" && check == false) {
                let tox = xbor; 
                let toy = ybor + 2;
                if (this._check == true) { 
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1; let realy = ybor + 1 + 2;
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                    let realx = xbor + 1; let realy = ybor + 1 + 2;
                    allmoves.push(realx.toString() + realy.toString());
                    }
                }
            } 
            if (this.inboard(xbor + 1, ybor + 1) && wmove.includes(this._board[ybor + 1][xbor + 1].piece) && check == false) {
                let tox = xbor + 1; 
                let toy = ybor + 1; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1 + 1; let realy = ybor + 1 + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1 + 1; let realy = ybor + 1 + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                }

            }
            if (this.inboard(xbor - 1, ybor + 1) && wmove.includes(this._board[ybor + 1][xbor - 1].piece) && check == false) {
                let tox = xbor - 1; 
                let toy = ybor + 1; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1 - 1; let realy = ybor + 1 + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1 - 1; let realy = ybor + 1 + 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                }

            }
            if (this.inboard(xbor + 1, ybor + 1) && hmove.includes(this._board[ybor + 1][xbor + 1].piece) && check == true) {
                let realx = xbor + 1 + 1; let realy = ybor + 1 + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this.inboard(xbor - 1, ybor + 1) && hmove.includes(this._board[ybor + 1][xbor - 1].piece) && check == true) {
                let realx = xbor + 1 - 1; let realy = ybor + 1 + 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            
        } else if (this._turn == "B") {
            if (this.inboard(xbor, ybor - 1) && this._board[ybor - 1][xbor].piece == "-" && check == false) {
                let tox = xbor; 
                let toy = ybor - 1; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1; let realy = ybor + 1 - 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1; let realy = ybor + 1 - 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                }
            }
            if (ybor == 6 && this.inboard(xbor, ybor - 2) && this._board[ybor - 2][xbor].piece == "-" && this._board[ybor - 1][xbor].piece == "-" && check == false) {
                let tox = xbor; 
                let toy = ybor - 2; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1; let realy = ybor + 1 - 2;
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1; let realy = ybor + 1 - 2;
                        allmoves.push(realx.toString() + realy.toString());
                    }
                }
            } 
            if (this.inboard(xbor + 1, ybor - 1) && bmove.includes(this._board[ybor - 1][xbor + 1].piece) && check == false) {
                let tox = xbor + 1; 
                let toy = ybor - 1; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1 + 1; let realy = ybor + 1 - 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1 + 1; let realy = ybor + 1 - 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                }
            }
            if (this.inboard(xbor - 1, ybor - 1) && bmove.includes(this._board[ybor - 1][xbor - 1].piece) && check == false) {
                let tox = xbor - 1; 
                let toy = ybor - 1; 
                if (this._check == true) {
                    if (this.uncheckingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString(), "peon")) {
                        let realx = xbor + 1 - 1; let realy = ybor + 1 - 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                } else {
                    if (!this.checkingmove(xbor.toString() + ybor.toString(), tox.toString() + toy.toString())) {
                        let realx = xbor + 1 - 1; let realy = ybor + 1 - 1; 
                        allmoves.push(realx.toString() + realy.toString());
                    }
                }

            }
            if (this.inboard(xbor + 1, ybor - 1) && hmove.includes(this._board[ybor - 1][xbor + 1].piece) && check == true) {
                let realx = xbor + 1 + 1; let realy = ybor + 1 - 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
            if (this.inboard(xbor - 1, ybor - 1) && hmove.includes(this._board[ybor - 1][xbor - 1].piece) && check == true) {
                let realx = xbor + 1 - 1; let realy = ybor + 1 - 1; 
                allmoves.push(realx.toString() + realy.toString());
            }
        }
        return allmoves; 
    }


    /**
     * Checks if coordinates x and y are within the board. 
     * @param {int} x "x coordiante";
     * @param {int} y "y coordinate";
     * @return boolean;  
     */
    inboard(x, y) {
        if (x < 8 && x > -1 && y < 8 && y > -1) {
            return true;
        } else {
            return false; 
        }
    }

    /**
     * Returns the position of the king on side in board coordinates.
     * @param {String} side "Whose turn it is."
     */
    kingposition(side) {
        for (let i = 0; i < this._piecelocations.length; i++) {
            let x = this._piecelocations[i].charAt(0);
            let y = this._piecelocations[i].charAt(1);
            if (this._board[y][x].piece == "♔" && side == "W") {
                return x.toString() + y.toString(); 
            } else if (this._board[y][x].piece == "♚" && side == "B") {
                return x.toString() + y.toString(); 
            }
        }

        // for (let i = 0; i < this._board.length; i++) {
        //     for (let j = 0; j < this._board[i].length; j++) {
        //         if (this._board[i][j].piece == "♔" && side == "W") {
        //             return j.toString() + i.toString(); 
        //         } 
        //         if (this._board[i][j].piece == "♚" && side == "B") {
        //             return j.toString() + i.toString(); 
        //         }
        //     }
        // }

    }

    /**
     * Check if the move from -> to unchecks the king
     * @param {String} from 
     * @param {String} to 
     * @param {String} piece 
     */
    uncheckingmove(from, to, piece) {
        let retval = false; 
        let fx = parseInt(from.charAt(0), 10);
        let fy = parseInt(from.charAt(1), 10);
        let tx = parseInt(to.charAt(0), 10);
        let ty = parseInt(to.charAt(1), 10);
        if (this._turn == "W") {
            let frompiece = this._board[fy][fx].piece; 
            let topiece = this._board[ty][tx].piece; 
            this._board[fy][fx].piece = "-";
            this._board[ty][tx].piece = frompiece;
            if (topiece == "-") { //non-capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
    
            } else { //capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
            }
            this._check = false;   //mark 
            var allbmoves = this.blackattackmoves();
            var allwmoves = this.whiteattackmoves(); 
            this._check = true;  
            var wkingp = this.kingposition("W");
            var bkingp = this.kingposition("B"); 
            if (!allbmoves.includes(wkingp) && !allwmoves.includes(bkingp)) {
                retval = true; 
            }
            this._board[ty][tx].piece = topiece;
            this._board[fy][fx].piece = frompiece;
            if (topiece == "-") { //not capturing
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(fx.toString() + fy.toString());            
            } else {
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());  
                this._piecelocations.push(fx.toString() + fy.toString());
            }
            return retval;
        } else if (this._turn == "B") {
            let frompiece = this._board[fy][fx].piece; 
            let topiece = this._board[ty][tx].piece; 
            this._board[fy][fx].piece = "-";
            this._board[ty][tx].piece = frompiece; 
            if (topiece == "-") { //non-capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
    
            } else { //capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
            }
            this._check = false;  
            var allwmoves = this.whiteattackmoves();
            var allbmoves = this.blackattackmoves(); 
            this._check = true;
            var bkingp = this.kingposition("B"); 
            if (!allwmoves.includes(bkingp) && !allbmoves.includes(wkingp)) {
                retval = true; 
            }
            this._board[ty][tx].piece = topiece;
            this._board[fy][fx].piece = frompiece;
            if (topiece == "-") { //not capturing
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(fx.toString() + fy.toString());            
            } else {
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());  
                this._piecelocations.push(fx.toString() + fy.toString());
            }
            return retval;
        }
    }

    /**
     * Checks if the move from -> to will check the king.
     * Returns true if it checks the king.
     * @param {String} from 
     * @param {String} to      */
    checkingmove(from, to) {
        let retval = false; 
        let fx = parseInt(from.charAt(0), 10);
        let fy = parseInt(from.charAt(1), 10);
        let tx = parseInt(to.charAt(0), 10);
        let ty = parseInt(to.charAt(1), 10);
        if (this._turn == "W") {
            let frompiece = this._board[fy][fx].piece; 
            let topiece = this._board[ty][tx].piece; 
            this._board[fy][fx].piece = "-";
            this._board[ty][tx].piece = frompiece;
            if (topiece == "-") { //non-capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
    
            } else { //capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
            }
            var allbmoves = this.blackattackmoves(); 
            var wkingp = this.kingposition("W"); 
            if (allbmoves.includes(wkingp)) {
                retval = true; 
            }
            this._board[ty][tx].piece = topiece;
            this._board[fy][fx].piece = frompiece;
            if (topiece == "-") { //not capturing
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(fx.toString() + fy.toString());            
            } else {
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());  
                this._piecelocations.push(fx.toString() + fy.toString());
            }
            return retval;
        } else if (this._turn == "B") {
            let frompiece = this._board[fy][fx].piece; 
            let topiece = this._board[ty][tx].piece; 
            this._board[fy][fx].piece = "-";
            this._board[ty][tx].piece = frompiece; 
            if (topiece == "-") { //non-capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
    
            } else { //capturing
                this._piecelocations.splice(this._piecelocations.indexOf(fx.toString() + fy.toString()), 1);
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());
            }
            var allwmoves = this.whiteattackmoves(); 
            var bkingp = this.kingposition("B"); 
            if (allwmoves.includes(bkingp)) {
                retval = true; 
            }
            this._board[ty][tx].piece = topiece;
            this._board[fy][fx].piece = frompiece;
            if (topiece == "-") { //not capturing
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(fx.toString() + fy.toString());            
            } else {
                this._piecelocations.splice(this._piecelocations.indexOf(tx.toString() + ty.toString()), 1);
                this._piecelocations.push(tx.toString() + ty.toString());  
                this._piecelocations.push(fx.toString() + fy.toString());
            }
            return retval;
        }
    }

    /**
     * Makes from (from - > to). Updates HTML of the move. 
     * @param {String} from "from id";
     * @param {String} to "to id"; 
     */
    async makemove(from, to) {
        removegreenhighlight(); 
        let fromx = from.charAt(0);
        let fromy = from.charAt(1);
        let tox = to.charAt(0);
        let toy = to.charAt(1); 
        let bfromx = fromx - 1;
        let bfromy = fromy - 1; 
        let btox = tox - 1;
        let btoy = toy - 1; 
        console.log(from);
        let fromsq = document.getElementById(from);
        let tosq = document.getElementById(to); 
        let frompiece = document.getElementById(from).innerHTML;
        let topiece = document.getElementById(to).innerHTML; 
        /* Non Capturing Move. **/
        if (topiece == "") {
            this._board[bfromy][bfromx].piece = "-";
            this._board[btoy][btox].piece = frompiece; 
            this._piecelocations.splice(this._piecelocations.indexOf(bfromx.toString() + bfromy.toString()), 1);
            this._piecelocations.push(btox.toString() + btoy.toString());
            let toadd = []; 
            for (let i = 0; i < fromsq.classList.length; i++) { 
                if (fromsq.classList[i] == "white" || fromsq.classList[i] == "black") {
                    continue; 
                }
                let elem = fromsq.classList[i];
                toadd.push(elem);
                tosq.classList.add(elem); 
            }
            for (let i = 0; i < toadd.length; i++) {
                fromsq.classList.remove(toadd[i]);
            }
            document.getElementById(from).innerHTML = "";
            document.getElementById(to).innerHTML = frompiece;
            /* Castling. */
            if (this._board[btoy][btox].piece == "♔" && Math.abs(btox - bfromx) >= 2) {
                if (to == "71") {
                    return this.makemove("81", "61");
                } else if (to == "31") {
                    return this.makemove("11", "41");
                }
            } else if (this._board[btoy][btox].piece == "♚" && Math.abs(btox - bfromx) >= 2) {
                if (to == "78") {
                    return this.makemove("88", "68");
                } else if (to == "38") {
                    return this.makemove("18", "48");

                }
            }
            //console.log(this._piecelocations);
        } 
        /* Capturing Move. **/
        else if (topiece != "") {
            this._board[bfromy][bfromx].piece = "-";
            this._board[btoy][btox].piece = frompiece;
            this._piecelocations.splice(this._piecelocations.indexOf(bfromx.toString() + bfromy.toString()), 1);
            this._piecelocations.splice(this._piecelocations.indexOf(btox.toString() + btoy.toString()), 1);
            this._piecelocations.push(btox.toString() + btoy.toString());
            let toadd = [];
            let torem = [];  
            for (let i = 0; i < tosq.classList.length; i++) {
                if (tosq.classList[i] == "white" || tosq.classList[i] == "black") {
                    continue; 
                }
                torem.push(tosq.classList[i]); 
            }
            for (let i = 0; i < torem.length; i++) {
                tosq.classList.remove(torem[i]);
            }
            for (let i = 0; i < fromsq.classList.length; i++) { //FIXME 
                if (fromsq.classList[i] == "white" || fromsq.classList[i] == "black") {
                    continue; 
                }
                let elem = fromsq.classList[i];
                toadd.push(elem);
                tosq.classList.add(elem); 
            }
            for (let i = 0; i < toadd.length; i++) {
                fromsq.classList.remove(toadd[i]);
            }
            document.getElementById(from).innerHTML = "";
            document.getElementById(to).innerHTML = frompiece; 

        }
        /* Promotion */
        if (this._board[btoy][btox].piece == "♙" && btoy == 7) {
            let newx = btox + 1;
            let piece = document.getElementById(newx.toString() + "8");
            this._board[btoy][btox].piece = "♕";
            piece.innerHTML = "♕";
            piece.classList.remove("wp");
            piece.classList.add("wq"); 
            piece.classList.add("goldshine");
            await delay(1000);
            piece.classList.remove("goldshine")

        } else if (this._board[btoy][btox].piece == "♟" && btoy == 0) {
            let newx = btox + 1; 
            let piece = document.getElementById(newx.toString() + "1");
            this._board[btoy][btox].piece = "♛";
            piece.innerHTML = "♛";
            piece.classList.remove("bp");
            piece.classList.add("bq");
            piece.classList.add("goldshine");
            await delay(1000);
            piece.classList.remove("goldshine")

        }
        this._blackmoves = this.blackmoves(); 
        this._whitemoves = this.whitemoves();  
        this.checkforcheck(this._turn, false); 
        if (this.checkforwin()) {
            winmenu(); 
            return; 
        }
        this.changeturn(); 
        removelisteners(); 
        init(); 
        if (this._turn == "W" && this._wai == false) {
            whiteturnbuttons(); 
        } else if (this._turn == "B" && this._bai == false) {
            blackturnbuttons();
        } else if (this._turn == "B" && this._bai) {
            this._bai.findmove("B", this);
        } else if (this._turn == "W" && this._wai) {
            this._wai.findmove("W", this);
        }

    }

    checkforwin() { 
        if (this._turn == "W" && this._check == true && this._blackmoves.length == 0) {
            console.log("White won!"); 
            this._winner = "W";
            return true; 
        } else if (this._turn == "B" && this._check == true && this._whitemoves.length == 0) {
            console.log("Black won!");
            this._winner = "B";
            return true; 
        }
        return false; 
    }
    
    /**
     * Makes from (from - > to). Does not update HTML of the move. 
     * Records for undoing. 
     * Used for AI Gametrees.
     * @param {String} from "from id";
     * @param {String} to "to id"; 
     */
    passivemove(from, to) {
        let bfromx = from.charAt(0);
        let bfromy = from.charAt(1);
        let btox = to.charAt(0);
        let btoy = to.charAt(1); 
        var frompiece = this._board[bfromy][bfromx].piece;
        var topiece = this._board[btoy][btox].piece;
        var castling = 0; 
        var promotion = 0; 
        var winner = null; 
        var turn = this._turn;
        var pastwmoves = this._whitemoves; 
        var pastbmoves = this._blackmoves; 

        this._board[bfromy][bfromx].piece = "-";
        this._board[btoy][btox].piece = frompiece; 

        if (topiece == "-") { //non-capturing
            this._piecelocations.splice(this._piecelocations.indexOf(bfromx.toString() + bfromy.toString()), 1);
            this._piecelocations.push(btox.toString() + btoy.toString());

        } else { //capturing
            this._piecelocations.splice(this._piecelocations.indexOf(bfromx.toString() + bfromy.toString()), 1);
            this._piecelocations.splice(this._piecelocations.indexOf(btox.toString() + btoy.toString()), 1);
            this._piecelocations.push(btox.toString() + btoy.toString());
        }

        if (btoy == 7 && frompiece == "♙") {
            this._board[btoy][btox].piece = "♕"; 
            promotion = 1; 
        } else if (btoy == 0 && frompiece == "♟") {
            this._board[btoy][btox].piece = "♛";
            promotion = 1; 
        } else if (this._board[btoy][btox].piece == "♔" && Math.abs(btox - bfromx) >= 2) {
            if (to == "71") {
                this._board[0][7].piece = "-";            
                this._board[0][5].piece = "♖";
                castling = 1; 
            } else if (to == "31") {
                this._board[0][0].piece = "-";
                this._board[0][3].piece = "♖";
                castling = 2; 
            }        
        } else if (this._board[btoy][btox].piece == "♚" && Math.abs(btox - bfromx) >= 2) {
            if (to == "78") {
                this._board[7][7].piece = "-";
                this._board[7][5].piece = "♜";
                castling = 3;
            } else if (to == "38") {
                this._board[7][0].piece = "-";
                this._board[7][3].piece = "♜";
                castling = 4; 
            }
        } 

        this._blackmoves = this.blackmoves(); 
        this._whitemoves = this.whitemoves(); 
        this.checkforcheck(this._turn, true); 
        if (this.checkforwin()) {
            winner = this._winner; 
        } 
        this._undostack.push(new revpule(castling, promotion, from, to, frompiece, topiece, turn, winner, pastbmoves, pastwmoves));  
        this.changeturn();
    }

    /* Undos one move. **/
    undo() {
        if (this._undostack.length > 0) {
            var undonode = this._undostack.pop(); 
            var from = undonode._from; 
            var to = undonode._to; 
            var frompiece = undonode._frompiece; 
            var topiece = undonode._topiece;

            let bfromx = from.charAt(0);
            let bfromy = from.charAt(1);
            let btox = to.charAt(0);
            let btoy = to.charAt(1); 

            this._board[bfromy][bfromx].piece = frompiece;
            this._board[btoy][btox].piece = topiece; 

            if (topiece == "-") { //not capturing
                this._piecelocations.splice(this._piecelocations.indexOf(btox.toString() + btoy.toString()), 1);
                this._piecelocations.push(bfromx.toString() + bfromy.toString());            
            } else {
                this._piecelocations.splice(this._piecelocations.indexOf(btox.toString() + btoy.toString()), 1);
                this._piecelocations.push(btox.toString() + btoy.toString());  
                this._piecelocations.push(bfromx.toString() + bfromy.toString());
            }

            if (undonode._castling == 1) {
                this._board[0][5].piece = "-";
                this._board[0][7].piece = "♖";
            } else if (undonode._castling == 2) {
                this._board[0][3].piece = "-";
                this._board[0][0].piece = "♖";
            } else if (undonode._castling == 3) {
                this._board[7][5].piece = "-";
                this._board[7][7].piece = "♜";
            } else if (undonode._castling == 4) {
                this._board[7][3].piece = "-";
                this._board[7][0].piece = "♜";
            }
            this._whitemoves = undonode._whitemoves; 
            this._blackmoves = undonode._blackmoves; 
            this._turn = undonode._turn; 
            this._winner = undonode._winner; 
            if (undonode._promotion == 1 && this._turn == "W") {
                this._board[bfromy][bfromx] = "♙";
            } else if (undonode._promotion == 1 && this._turn == "B") {
                this._board[bfromy][bfromx] = "♟";
            }
        }
    }

    /**
     * Checks if there is a check in this turn.
     * @param {String} turn "The turn of the game"; 
     */
    checkforcheck(turn, passive) {
        let changed = false; 
        if (this._check == true) {
            this._check = false;
            changed = true; 
        }
        var allwmoves = this._whitemoves; 
        var allbmoves = this._blackmoves;
        if (changed == true) {
            this._check = true; 
        } 
        //this.printboard(); 
        var bkingpoi = this.kingposition("B"); //checking Black
        var wkingpoi = this.kingposition("W");
        let bx = parseInt(bkingpoi.charAt(0), 10);
        let by = parseInt(bkingpoi.charAt(1), 10); 
        let realbx = bx + 1; 
        let realby = by + 1; 
        let wx = parseInt(wkingpoi.charAt(0), 10);
        let wy = parseInt(wkingpoi.charAt(1), 10);
        let realwx = wx + 1; 
        let realwy = wy + 1; 

        if (turn == "W") {
            if (!allbmoves.includes(wkingpoi) && this._check == true) {
                this._check = false; 
                if (!passive) {
                    document.getElementById(realwx.toString() + realwy.toString()).classList.remove("redshine");
                }
            } else if (allwmoves.includes(bkingpoi)) {
                this._check = true;   
                if (!passive) {
                    document.getElementById(realbx.toString() + realby.toString()).classList.add("redshine"); 
                }
            } 
        } else if (turn == "B") {
            if (!allwmoves.includes(bkingpoi) && this._check == true) {
                this._check = false; 
                if (!passive) {
                    document.getElementById(realbx.toString() + realby.toString()).classList.remove("redshine");
                }
            } else if (allbmoves.includes(wkingpoi)) {
                this._check = true;
                if (!passive) {
                    document.getElementById(realwx.toString() + realwy.toString()).classList.add("redshine");
                }
            } 
        }
    }

    /** Changes turn in Board. */
    changeturn() {
        if (this._turn == "W") {
            this._turn = "B"; 
        } else if (this._turn == "B") {
            this._turn = "W";
        }
    }

    printboard() {
        for (let i = 0; i < 8; i++) {
            let line = "";
            for (let j = 0; j < 8; j++) {
                line += this._board[i][j].piece
            }
            console.log(line);
            line = "";
        }
    }

    /** Returns Whitemoves from -> to for AI */
    ftwhitemoves() {
        var movelist = [];
        var changed = false; 
        if (this._turn == "B") {
            changed = true; 
            this._turn = "W";
        }
        if (this._winner != null) {
            return [];
        }
        for (let i = 0; i < this._board.length; i++) {
            for (let j = 0; j < this._board[i].length; j++) {
                if (this._board[i][j].piece == "♙") {
                    var list = this.peonmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♘") {
                    var list = this.knightmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♗") {
                    var list = this.bishopmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                }else if (this._board[i][j].piece == "♖") {
                    var list = this.rookmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                }else if (this._board[i][j].piece == "♕") {
                    var list = this.queenmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                }else if (this._board[i][j].piece == "♔") {
                    var list = this.kingmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                }
            }
        }

        if (changed == true) {
            this._turn = "B"; 
        }
        return movelist; 
    }

    /** Returns Blackmoves from -> to for AI */
    ftblackmoves() { 
        var movelist = [];
        var changed = false; 
        if (this._turn == "W") {
            changed = true; 
            this._turn = "B";
        }
        if (this._winner != null) {
            return [];
        }
        for (let i = 0; i < this._board.length; i++) {
            for (let j = 0; j < this._board[i].length; j++) {
                if (this._board[i][j].piece == "♟") {
                    var list = this.peonmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♝") {
                    var list = this.bishopmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♞") {
                    var list = this.knightmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♜") {
                    var list = this.rookmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♚") {
                    var list = this.kingmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                } else if (this._board[i][j].piece == "♛") {
                    var list = this.queenmoves(j + 1, i + 1, false); 
                    var nlist = this.convert(list); 
                    var freshlist = [];
                    for (let k = 0; k < nlist.length; k++) {
                        freshlist.push([j.toString() + i.toString(), nlist[k]]);
                    }
                    movelist = movelist.concat(freshlist);
                }
            }
        }

        if (changed == true) {
            this._turn = "W"; 
        }
        return movelist; 

    }

    /** Returns a list of all avaliable white moves in HTML board coordinates. */
    whitemoves() {
        var movelist = [];
        var changed = false; 
        if (this._turn == "B") {
            changed = true; 
            this._turn = "W";
        }

        for (let i = 0; i < this._board.length; i++) {
            for (let j = 0; j < this._board[i].length; j++) {        
                if (this._board[i][j].piece == "♙") {
                    movelist = movelist.concat(this.peonmoves(j + 1, i + 1, false));
                } else if (this._board[i][j].piece == "♘") {
                    movelist = movelist.concat(this.knightmoves(j + 1, i + 1, false));
                } else if (this._board[i][j].piece == "♗") {
                    movelist = movelist.concat(this.bishopmoves(j + 1, i + 1, false));
                }else if (this._board[i][j].piece == "♖") {
                    movelist = movelist.concat(this.rookmoves(j + 1, i + 1, false));
                }else if (this._board[i][j].piece == "♕") {
                    movelist = movelist.concat(this.queenmoves(j + 1, i + 1, false));
                } else if (this._board[i][j].piece == "♔") {
                    movelist = movelist.concat(this.kingmoves(j + 1, i + 1, false));
                }
            }
        }
        if (changed == true) {
            this._turn = "B"; 
        }
        return this.convert(movelist); 
    }

    /** Returns a list of all avaliable black moves.  */
    blackmoves() { 
        var movelist = []; 
        var changed = false; 
        if (this._turn == "W") {
            changed = true; 
            this._turn = "B";
        }
        for (let i = 0; i < this._board.length; i++) {
            for (let j = 0; j < this._board[i].length; j++) {        
                if (this._board[i][j].piece == "♟") {
                    movelist = movelist.concat(this.peonmoves(j + 1, i + 1, false));
                } else if (this._board[i][j].piece == "♞") {
                    movelist = movelist.concat(this.knightmoves(j + 1, i + 1, false));
                } else if (this._board[i][j].piece == "♝") {
                    movelist = movelist.concat(this.bishopmoves(j + 1, i + 1, false));
                }else if (this._board[i][j].piece == "♜") {
                    movelist = movelist.concat(this.rookmoves(j + 1, i + 1, false));
                }else if (this._board[i][j].piece == "♛") {
                    movelist = movelist.concat(this.queenmoves(j + 1, i + 1, false));
                } else if (this._board[i][j].piece == "♚") {
                    movelist = movelist.concat(this.kingmoves(j + 1, i + 1, false));
                }
            }
        }
        if (changed == true) {
            this._turn = "W"; 
        }
        return this.convert(movelist); 
    }

    whiteattackmoves() {
        var movelist = [];
        var changed = false; 
        if (this._turn == "B") {
            changed = true; 
            this._turn = "W";
        }
        for (let i = 0; i < this._piecelocations.length; i++) {
            let x = parseInt(this._piecelocations[i].charAt(0), 10);
            let y = parseInt(this._piecelocations[i].charAt(1), 10);
            if (this._board[y][x].piece == "♙") {
                movelist = movelist.concat(this.peonmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♘") {
                movelist = movelist.concat(this.knightmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♗") {
                movelist = movelist.concat(this.bishopmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♖") {
                movelist = movelist.concat(this.rookmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♕") {
                movelist = movelist.concat(this.queenmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♔") {
                movelist = movelist.concat(this.kingmoves(x + 1, y + 1, true)); 
            } 
        }
        if (changed == true) {
            this._turn = "B"; 
        }
        return this.convert(movelist);

    }
    blackattackmoves() {
        var movelist = [];
        var changed = false; 
        if (this._turn == "W") {
            changed = true; 
            this._turn = "B";
        }
        for (let i = 0; i < this._piecelocations.length; i++) {
            let x = parseInt(this._piecelocations[i].charAt(0), 10);
            let y = parseInt(this._piecelocations[i].charAt(1), 10);
            if (this._board[y][x].piece == "♟") {
                movelist = movelist.concat(this.peonmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♞") {
                movelist = movelist.concat(this.knightmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♝") {
                movelist = movelist.concat(this.bishopmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♜") {
                movelist = movelist.concat(this.rookmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♛") {
                movelist = movelist.concat(this.queenmoves(x + 1, y + 1, true));
            } else if (this._board[y][x].piece == "♚") {
                movelist = movelist.concat(this.kingmoves(x + 1, y + 1, true)); 
            } 
        }
        if (changed == true) {
            this._turn = "W"; 
        }
        return this.convert(movelist);
    }


    /**
     * Converts list of HTML coordinates into _board coordinates
     * @param {String[]} list "inputted list to be transformed";  
     */
    convert(list) {
        var newlist = []; 
        for (let i = 0; i < list.length; i++) {
            let x = parseInt(list[i].charAt(0), 10);
            let y = parseInt(list[i].charAt(1), 10); 
            let realx = x - 1; let realy = y - 1;
            newlist.push(realx.toString() + realy.toString()); 
        }
        return newlist; 
    }

    updatehtml() {
        //FIXME
    }


}

/** Represents one square of the chess board. */
class Place {

    constructor(givenpic) {
        var pieces = new Map([["♔", 'W '], ["♚", "W*"], ["♕", "Q "], ["♛", "Q*"],
         ["♖", "R "], ["♜", "R*"], ["♗", "B "], ["♝", "B* "], ["♘", "K "],
          ["♞", "K*"], ["♙", "P "], ["♟", "P*"], ["", "--"]]);
    
        if (givenpic == "") {
            this.piece = "-";
        } else {
            this.piece = givenpic; 
        }
    }

}
/** Adds the hover pointer class to all divs in the right turn. */
function changepointer() {
    if (board._turn == "W") {
        for (let i = 0; i < bpieces.length; i++) {
            if (bpieces[i].classList.contains("turn")) {
                bpieces[i].classList.remove("turn");
            }
        }
        for (let i = 0; i < wpieces.length; i++) {
            wpieces[i].classList.add("turn");
        }
    } else if (board._turn == "B") {
        for (let i = 0; i < wpieces.length; i++) {
            if (wpieces[i].classList.contains("turn")) {
                wpieces[i].classList.remove("turn");
            }
        }
        for (let i = 0; i < bpieces.length; i++) {
            bpieces[i].classList.add("turn");
        }
    }
}
/** Main driver method of the chess game.
 * Handles eventlisteners for gui
 */
function whiteturnbuttons() {
    changepointer(); 
    if (wqueen != null) {
        var functions = [wqueen1a, wqueen2a, wqueen3a, wqueen4a, wqueen5a, wqueen6a, wqueen7a, wqueen8a];
        let i = 0; 
        for (const queen of wqueen) {
            queen.addEventListener("click", functions[i]);
            i++
        }
    }
    wking.addEventListener("click", wkinga);

    if (wrook1 != null) {
        wrook1.addEventListener("click", wrook1a);
    }
    if (wrook2 != null) {
        wrook2.addEventListener("click", wrook2a);
    }
    if (wknight1 != null) {
        wknight1.addEventListener("click", wknight1a);
    }
    if (wknight2 != null) {
        wknight2.addEventListener("click", wknight2a);
    }
    if (wbishop1 != null) {
        wbishop1.addEventListener("click", wbishop1a);
    }
    if (wbishop2 != null) {
        wbishop2.addEventListener("click", wbishop2a);
    }
    if (wpeon1 != null) {
        wpeon1.addEventListener("click", wpeon1a);
    }
    if (wpeon2 != null) {
        wpeon2.addEventListener("click", wpeon2a);
    }
    if (wpeon3 != null) {
        wpeon3.addEventListener("click", wpeon3a);
    }
    if (wpeon4 != null) {
        wpeon4.addEventListener("click", wpeon4a);
    }
    if (wpeon5 != null) {
        wpeon5.addEventListener("click", wpeon5a);
    }
    if (wpeon6 != null) {
        wpeon6.addEventListener("click", wpeon6a);
    }
    if (wpeon7 != null) {
        wpeon7.addEventListener("click", wpeon7a);
    }
    if (wpeon8 != null) {
        wpeon8.addEventListener("click", wpeon8a);
    }
}

function blackturnbuttons() {
    changepointer(); 
    var functions = [bqueen1a, bqueen2a, bqueen3a, bqueen4a, bqueen5a, bqueen6a, bqueen7a, bqueen8a];
    if (bqueen != null) {
        let i = 0;
        for (const queen of bqueen) {
            queen.addEventListener("click", functions[i]);
            i++; 
        }
    }
    bking.addEventListener("click", bkinga);
    if (brook1 != null) {
        brook1.addEventListener("click", brook1a);
    }
    if (brook2 != null) {
        brook2.addEventListener("click", brook2a);
    }
    if (bknight1 != null) {
        bknight1.addEventListener("click", bknight1a);
    }
    if (bknight2 != null) {
        bknight2.addEventListener("click", bknight2a);
    }
    if (bbishop1 != null) {
        bbishop1.addEventListener("click", bbishop1a);
    }
    if (bbishop2 != null) {
        bbishop2.addEventListener("click", bbishop2a);
    }
    if (bpeon1 != null) {
        bpeon1.addEventListener("click", bpeon1a);
    }
    if (bpeon2 != null) {
        bpeon2.addEventListener("click", bpeon2a);
    }
    if (bpeon3 != null) {
        bpeon3.addEventListener("click", bpeon3a);
    }
    if (bpeon4 != null) {
        bpeon4.addEventListener("click", bpeon4a);
    }
    if (bpeon5 != null) {
        bpeon5.addEventListener("click", bpeon5a);
    }
    if (bpeon6 != null) {
        bpeon6.addEventListener("click", bpeon6a);
    }
    if (bpeon7 != null) {
        bpeon7.addEventListener("click", bpeon7a);
    }
    if (bpeon8 != null) {
        bpeon8.addEventListener("click", bpeon8a);
    }

}

/** Black Action Functions. */
function bpeon1a() {
    highlightpiece("Peon", bpeon1.id); 
}
function bpeon2a() {
    highlightpiece("Peon", bpeon2.id); 
}
function bpeon3a() {
    highlightpiece("Peon", bpeon3.id); 
}
function bpeon4a() {
    highlightpiece("Peon", bpeon4.id); 
}
function bpeon5a() {
    highlightpiece("Peon", bpeon5.id); 
}
function bpeon6a() {
    highlightpiece("Peon", bpeon6.id); 
}
function bpeon7a() {
    highlightpiece("Peon", bpeon7.id); 
}
function bpeon8a() {
    highlightpiece("Peon", bpeon8.id); 
}
function bqueen1a() {
    highlightpiece("Queen", bqueen[0].id); 
}
function bqueen2a() {
    highlightpiece("Queen", bqueen[1].id); 
}
function bqueen3a() {
    highlightpiece("Queen", bqueen[2].id); 
}
function bqueen4a() {
    highlightpiece("Queen", bqueen[3].id); 
}
function bqueen5a() {
    highlightpiece("Queen", bqueen[4].id); 
}
function bqueen6a() {
    highlightpiece("Queen", bqueen[5].id); 
}
function bqueen7a() {
    highlightpiece("Queen", bqueen[6].id); 
}
function bqueen8a() {
    highlightpiece("Queen", bqueen[7].id); 
}
function bkinga() {
    highlightpiece("King", bking.id); 
}
function brook1a() {
    highlightpiece("Rook", brook1.id); 
}
function brook2a() {
    highlightpiece("Rook", brook2.id); 
}
function bbishop1a() {
    highlightpiece("Bishop", bbishop1.id); 
}
function bbishop2a() {
    highlightpiece("Bishop", bbishop2.id); 
}
function bknight1a() {
    highlightpiece("Knight", bknight1.id); 
}
function bknight2a() {
    highlightpiece("Knight", bknight2.id); 
}

/** White Action Functions. */
function wpeon1a() {
    highlightpiece("Peon", wpeon1.id); 
}
function wpeon2a() {
    highlightpiece("Peon", wpeon2.id); 
}
function wpeon3a() {
    highlightpiece("Peon", wpeon3.id); 
}
function wpeon4a() {
    highlightpiece("Peon", wpeon4.id); 
}
function wpeon5a() {
    highlightpiece("Peon", wpeon5.id); 
}
function wpeon6a() {
    highlightpiece("Peon", wpeon6.id); 
}
function wpeon7a() {
    highlightpiece("Peon", wpeon7.id); 
}
function wpeon8a() {
    highlightpiece("Peon", wpeon8.id); 
}
function wqueen1a() {
    highlightpiece("Queen", wqueen[0].id); 
}
function wqueen2a() {
    highlightpiece("Queen", wqueen[1].id); 
}
function wqueen3a() {
    highlightpiece("Queen", wqueen[2].id); 
}
function wqueen4a() {
    highlightpiece("Queen", wqueen[3].id); 
}
function wqueen5a() {
    highlightpiece("Queen", wqueen[4].id); 
}
function wqueen6a() {
    highlightpiece("Queen", wqueen[5].id); 
}
function wqueen7a() {
    highlightpiece("Queen", wqueen[6].id); 
}
function wqueen8a() {
    highlightpiece("Queen", wqueen[7].id); 
}
function wkinga() {
    highlightpiece("King", wking.id); 
}
function wrook1a() {
    highlightpiece("Rook", wrook1.id); 
}
function wrook2a() {
    highlightpiece("Rook", wrook2.id); 
}
function wbishop1a() {
    highlightpiece("Bishop", wbishop1.id); 
}
function wbishop2a() {
    highlightpiece("Bishop", wbishop2.id); 
}
function wknight1a() {
    highlightpiece("Knight", wknight1.id); 
}
function wknight2a() {
    highlightpiece("Knight", wknight2.id); 
}


function removelisteners() {
    if (bpeon8 != null) {
        bpeon8.removeEventListener("click", bpeon8a);
    }
    if (bpeon7 != null) {
        bpeon7.removeEventListener("click", bpeon7a);
    }
    if (bpeon6 != null) {
        bpeon6.removeEventListener("click", bpeon6a);
    }
    if (bpeon5 != null) {
        bpeon5.removeEventListener("click", bpeon5a);
    }
    if (bpeon4 != null) {
        bpeon4.removeEventListener("click", bpeon4a);
    }
    if (bpeon3 != null) {
        bpeon3.removeEventListener("click", bpeon3a);
    }
    if (bpeon2 != null) {
        bpeon2.removeEventListener("click", bpeon2a);
    }
    if (bpeon1 != null) {
        bpeon1.removeEventListener("click", bpeon1a);
    }
    if (bqueen != null) {
        var functions = [bqueen1a, bqueen2a, bqueen3a, bqueen4a, bqueen5a, bqueen6a, bqueen7a, bqueen8a];
        let i = 0;
        for (const queen of bqueen) {
            queen.removeEventListener("click", functions[i]);
            i++
        }
    }
    if (bking != null) {
        bking.removeEventListener("click", bkinga);
    }
    if (bbishop1 != null) {
        bbishop1.removeEventListener("click", bbishop1a);
    }
    if (bbishop2 != null) {
        bbishop2.removeEventListener("click", bbishop2a);
    }
    if (bknight1 != null) {
        bknight1.removeEventListener("click", bknight1a);
    }
    if (bknight2 != null) {
        bknight2.removeEventListener("click", bknight2a);
    }
    if (brook1 != null) {
        brook1.removeEventListener("click", brook1a);
    }
    if (brook2 != null) {
        brook2.removeEventListener("click", brook2a);
    }
    if (wpeon8 != null) {
        wpeon8.removeEventListener("click", wpeon8a);
    }
    if (wpeon7 != null) {
        wpeon7.removeEventListener("click", wpeon7a);
    }
    if (wpeon6 != null) {
        wpeon6.removeEventListener("click", wpeon6a);
    }
    if (wpeon5 != null) {
        wpeon5.removeEventListener("click", wpeon5a);
    }
    if (wpeon4 != null) {
        wpeon4.removeEventListener("click", wpeon4a);
    }
    if (wpeon3 != null) {
        wpeon3.removeEventListener("click", wpeon3a);
    }
    if (wpeon2 != null) {
        wpeon2.removeEventListener("click", wpeon2a);
    }
    if (wpeon1 != null) {
        wpeon1.removeEventListener("click", wpeon1a);
    }
    if (wqueen != null) {
        var functions = [wqueen1a, wqueen2a, wqueen3a, wqueen4a, wqueen5a, wqueen6a, wqueen7a, wqueen8a];
        let i = 0; 
        for (const queen of wqueen) {
            queen.removeEventListener("click", functions[i]);
            i++; 
        }
    }
    if (wking != null) {
        wking.removeEventListener("click", wkinga);
    }
    if (wbishop1 != null) {
        wbishop1.removeEventListener("click", wbishop1a);
    }
    if (wbishop2 != null) {
        wbishop2.removeEventListener("click", wbishop2a);
    }
    if (wknight1 != null) {
        wknight1.removeEventListener("click", wknight1a);
    }
    if (wknight2 != null) {
        wknight2.removeEventListener("click", wknight2a);
    }
    if (wrook1 != null) {
        wrook1.removeEventListener("click", wrook1a);
    }
    if (wrook2 != null) {
        wrook2.removeEventListener("click", wrook2a);
    }
}

/** Highlights all possible moves of that piece on javascript.
 *  mlist and triggers are defined globally to provide an effective way of removing previous event listeners. 
 */
var mlist = []; 
var triggers = [];  
function highlightpiece(piece, coordinates) {
    removegreenhighlight(); 
    removemovelisteners(); 
    //remove previous eventlisteners
    let lst = document.getElementById(coordinates).classList; 
    if (lst.contains("wpiece") && board._turn == "B" || lst.contains("bpiece") && board._turn == "W") {
        return; 
    }
    mlist = board.legalmoves(piece, coordinates); 
    for (let i = 0; i < mlist.length; i++) {
        let id = mlist[i]; 
        console.log(id); 
        let button = document.getElementById(id);
        button.classList.add("greenshine");
        let trigger = function() {
            board.makemove(coordinates, id);
            removemovelisteners();
        }
        triggers.push(trigger);
        button.addEventListener("click", trigger);
    }
}

/** Removes created move listeners. */
function removemovelisteners() {
    if (mlist.length == 0) {
        return;
    }
    for (let i = 0; i < mlist.length; i++) {
        let func = triggers[i];
        let id = mlist[i];
        let button = document.getElementById(id);
        button.removeEventListener("click", func); 
    }
    triggers = []; 
}

/** Removes green highlights. A CSS property */
function removegreenhighlight() {
    var ids = document.querySelectorAll('[id]'); 
    Array.prototype.forEach.call( ids, function( el, i ) {
        var classl = document.getElementById(el.id).classList;
        if (classl.contains("greenshine")) {
            classl.remove("greenshine"); 
        }
    });
}


/** Resets Board into originial config. */
function reset() { 
    for (let i = 0; i < white.length; i++) {
        white[i].style.backgroundColor = "#fff";
        white[i].style.zIndex = 1000; 
    }
    for (let i = 0; i < black.length; i++) {
        black[i].style.backgroundColor = "#999";
        black[i].style.zIndex = 1000; 
    }
    wpeon1.innerHTML = "♙"; wpeon2.innerHTML = "♙"; wpeon3.innerHTML = "♙"; wpeon4.innerHTML = "♙"; wpeon5.innerHTML = "♙";
    wpeon6.innerHTML = "♙"; wpeon7.innerHTML = "♙"; wpeon8.innerHTML = "♙"; bpeon1.innerHTML = "♟"; bpeon2.innerHTML = "♟";
    bpeon3.innerHTML = "♟"; bpeon4.innerHTML = "♟"; bpeon5.innerHTML = "♟"; bpeon6.innerHTML = "♟"; bpeon7.innerHTML = "♟";
    bpeon8.innerHTML = "♟"; wknight1.innerHTML = "♘"; wknight2.innerHTML = "♘"; bknight1.innerHTML = "♞"; bknight2.innerHTML = "♞";
    wbishop1.innerHTML = "♗"; wbishop2.innerHTML = "♗"; bbishop1.innerHTML = "♝"; bbishop2.innerHTML = "♝"; wrook1.innerHTML = "♖";
    wrook2.innerHTML = "♖"; brook1.innerHTML = "♜"; brook2.innerHTML = "♜"; wking.innerHTML = "♔"; bking.innerHTML = "♚";
    wqueen[0].innerHTML = "♕"; bqueen[0].innerHTML = "♛"; vcor1.innerHTML = "1"; vcor2.innerHTML = "2"; vcor3.innerHTML = "3"; vcor4.innerHTML = "4";
    vcor5.innerHTML = "5"; vcor6.innerHTML = "6"; vcor7.innerHTML = "7"; vcor8.innerHTML = "8"; hcor1.innerHTML = "a"; hcor2.innerHTML = "b";
    hcor3.innerHTML = "c"; hcor4.innerHTML = "d"; hcor5.innerHTML = "e"; hcor6.innerHTML = "f"; hcor7.innerHTML = "g"; hcor8.innerHTML = "h";
}

async function delay(delayInms) {
    return new Promise(resolve  => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

var text = document.querySelector(".menutext"); 
var button1 = document.querySelector(".ngame");
var button2 = document.querySelector(".bai");
var button3 = document.querySelector(".wai");
var text3 = "Please Choose a Game Option! <br/> Chess Driver V1.0 (Slow AI)"
async function main() {
    var text1 = "A Game of Chess Developed by Brian Kim."
    var text1l = text1.split(""); 

    let now = ""; 
    for (let i = 0; i < text1l.length; i++) {
        now += text1l[i];
        text.innerHTML = now; 
        await delay(55);
    }
    text.style.opacity = 0;
    await delay(1200); 
    now = ""; 
    menu(); 
    
}

function activate() {
    document.querySelector(".menubutton").removeEventListener("click", activate); 
    removelisteners(); 
    for (let i = 0; i < white.length; i++) {
        white[i].style.opacity = 0; 
    }
    for (let i = 0; i < black.length; i++) {
        black[i].style.opacity = 0; 
    }
    menu();
}

function menu() { 
    text.innerHTML = text3; 
    text.style.opacity = 1; 
    text.style.background = "grey";
    text.style.borderRadius = "50px"; 
    document.querySelector(".chessboard").style.backgroundImage = "url('background2.gif')";
    document.querySelector(".chessboard").zIndex = 600; 
    button1.innerHTML = '<span class = "o"> Play Normal </span>'; 
    button1.classList.add("button");
    button1.classList.add("ngame");
    button1.style.opacity = 1; 
    button1.addEventListener("click", normalgame); 

    button2.innerHTML = "Play Black AI"; 
    button2.classList.add("button");
    button2.classList.add("bai");
    button2.style.opacity = 1; 
    button2.addEventListener("click", blackai);

    button3.innerHTML = "Play White AI"; 
    button3.classList.add("button");
    button3.classList.add("wai");
    button3.style.opacity = 1; 
    button3.addEventListener("click", whiteai);
}

function winmenu() { 
    text.style.zIndex = 1001; 
    let won = "";
    if (board._winner == "W") {
        won = "White"
    } else {
        won = "Black"
    }
    text.style.height = "110px"; 
    text.innerHTML = won + " Won! <br/> Refresh this page to play a new game."; 

}

function normalgame() {
    reset(); 
    removebuttons(); 
    board = new Board("W", false, false);
    //revpuletest();
    whiteturnbuttons(); 

}

function blackai(){
    reset();
    removebuttons();
    board = new Board("W", false, new Ai());
    whiteturnbuttons(); 


}

function whiteai() {
    if (true) {
        reset();
        removebuttons(); 
    }
    board = new Board("W", new Ai(), false);
    board._wai.findmove("W", board);

}

async function removebuttons() { 
    button1.style.opacity = '0';
    button1.classList.remove("ngame");
    button2.style.opacity = '0';
    button2.classList.remove("bai");
    button3.style.opacity = '0';
    button3.classList.remove("wai");
    text.innerHTML = "";
    await delay(1000);
    button1.classList.remove("button");
    button2.classList.remove("button");
    button3.classList.remove("button");
    button1.removeEventListener("click", normalgame);
    button2.removeEventListener("click", blackai);
    button3.removeEventListener("click", whiteai);
}

/*
function revpuletest() {
    for (let i = 0; i < board.ftblackmoves().length; i++) {
        let from = board.ftblackmoves()[i][0];
        let to = board.ftblackmoves()[i][1];
        board.passivemove(from, to); 
        board.printboard(); 
        board.undo();
        board.printboard(); 
    }

}
*/

main(); 
