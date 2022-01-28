import { Tile } from "./tile";
import { Terrain } from "./enums"

let tileSize = 10;
let gameMapWidth = 800;
let gameMapHeight = 600;


let gameMap: Tile[][];

for( let i=0; i < (gameMapWidth/tileSize); i++) {
    gameMap[i] = [];
    for( let x=0; x< (gameMapHeight/tileSize); x++) {
        gameMap[i][x] = new Tile("default", 1, Terrain.Mountain);
    }
}


