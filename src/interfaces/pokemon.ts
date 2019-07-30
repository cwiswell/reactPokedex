import SpriteUrl from "./spriteUrls";
import ReferenceItem from "./referenceItem";
import PokemonStat from "./pokemonStat";

export default interface Pokemon {
    weight: number | null;
    height: number | null;
    id: number | null;
    name: string | null;
    sprites: SpriteUrl;
    forms: Array<ReferenceItem>;
    species: ReferenceItem;
    stats: Array<PokemonStat>;
}