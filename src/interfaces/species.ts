import ReferenceItem from "./referenceItem";
import Genus from "./genus";

export default interface Species{
    base_happiness: number;
    capture_rate: number;
    color: ReferenceItem;
    egg_groups: Array<ReferenceItem>;
    evolution_chain: ReferenceItem;
    evolves_from_species: ReferenceItem;
    flavor_text_entries: Array<any>;
    form_descriptions: Array<any>;
    forms_switchable: boolean;
    gender_rate: number;

    genera: Array<Genus>;
    generation: ReferenceItem;
    growth_rate: ReferenceItem;
    habitat: ReferenceItem;

    has_gender_differences: boolean;
}