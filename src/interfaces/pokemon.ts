import SpriteUrl from "./spriteUrls";

export default interface Pokemon {
    weight: number | null;
    height: number | null;
    id: number | null;
    name: string | null;
    sprites: SpriteUrl;
}