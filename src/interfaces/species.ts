import ReferenceItem from "./referenceItem";

export default interface Species{
    base_happiness: number;
    capture_rate: number;
    color: ReferenceItem;
    egg_groups: Array<ReferenceItem>;
}