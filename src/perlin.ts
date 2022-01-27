enum Terrain {
    Ocean,
    Plain,
    Mountain,
    Swamp,
}

class Tile {
    sprite: string;
    height: number;
    terrain: Terrain;
    
    constructor(sprite: string,height: number,terrain: Terrain) {
        this.sprite = sprite;
        this.height = height;
        this.terrain = terrain;
    }
}

let gameMap:Tile[][];
let gameMapWidth = 16;
let gameMapHeight = 16;

