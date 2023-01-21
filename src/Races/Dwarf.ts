import Race from './Race';

export default class Dwarf extends Race {
  static numberOfDwarf = 0;
  private _life = 80;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Dwarf.numberOfDwarf += 1;
  }

  static createdRacesInstances(): number { return Dwarf.numberOfDwarf; }

  get maxLifePoints(): number { return this._life; }
}