import { Terrain } from "./enums";

export class Tile {
    height: number;
    terrain: Terrain;
    sprite: string;
    
    constructor(height: number,terrain: Terrain,sprite: string) {
        this.sprite = sprite;
        this.height = height;
        this.terrain = terrain;
    }
}
