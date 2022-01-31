import { Tile } from "./tile";
import { Terrain } from "./enums"
import { Noise2D } from "./perlin"

let tileSize = 20;
let gameMapWidth = 800;
let gameMapHeight = 600;

const canvas = document.createElement('canvas');
canvas.id = "map";
canvas.style.border = "5px solid red";
canvas.width = gameMapWidth;
canvas.height = gameMapHeight;
document.body.appendChild(canvas);

let gameMap: Tile[][] = [];
let frequency = .05
for( let x=0; x < (gameMapWidth/tileSize); x++) {
    gameMap[x] = [];
    for( let y=0; y< (gameMapHeight/tileSize); y++) {
        let height = Math.floor(Noise2D(x*frequency,y*frequency) * 10);
        gameMap[x][y] = new Tile(height,Terrain.Ocean,"tile");
        console.log(gameMap[x][y].height);
        let ctx = canvas.getContext("2d");
        ctx!.beginPath();
        ctx!.fillStyle = `rgb(${gameMap[x][y].height},120,120)`;
        ctx!.fillRect(x*tileSize,y*tileSize,x*tileSize+tileSize,y*tileSize+tileSize);
        ctx!.stroke();
    }
}
