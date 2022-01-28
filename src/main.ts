import { Tile } from "./tile";
import { Terrain } from "./enums"

let tileSize = 10;
let gameMapWidth = 800;
let gameMapHeight = 100;

let gameMap: Tile[][] = [];

for( let x=0; x < (gameMapWidth/tileSize); x++) {
    gameMap[x] = [];
    for( let y=0; y< (gameMapHeight/tileSize); y++) {
        gameMap[x][y] = new Tile(1,Terrain.Ocean,"tile");
    }
}


document.body.innerHTML += '<canvas id="map" width=gameMapWidth height="gameMapHeight" style="border:10px solid red"></canvas>';
