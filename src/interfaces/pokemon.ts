import SpriteUrl from "./spriteUrls";
import ReferenceItem from "./referenceItem";
import PokemonStat from "./pokemonStat";
import Species from "./species";

export default interface Pokemon {
    weight: number | null;
    height: number | null;
    id: number | null;
    name: string | null;
    sprites: SpriteUrl;
    forms: Array<ReferenceItem>;
    formsData: any;
    species: ReferenceItem;
    speciesData: Species | null;
    stats: Array<PokemonStat>;
}