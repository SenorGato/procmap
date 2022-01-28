import { Tile } from "./tile";
import { Terrain } from "./enums"
import { Noise2D } from "./perlin"

let tileSize = 10;
let gameMapWidth = 800;
let gameMapHeight = 600;

let gameMap: Tile[][] = [];

for( let x=0; x < (gameMapWidth/tileSize); x++) {
    gameMap[x] = [];
    for( let y=0; y< (gameMapHeight/tileSize); y++) {
        gameMap[x][y] = new Tile(Noise2D(x,y), Terrain.Mountain, "default");
    }
}

