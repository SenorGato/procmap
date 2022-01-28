import { Terrain } from "./enums";

export class Tile {
    sprite: string;
    height: number;
    terrain: Terrain;
    
    constructor(sprite: string,height: number,terrain: Terrain) {
        this.sprite = sprite;
        this.height = height;
        this.terrain = terrain;
    }
}
