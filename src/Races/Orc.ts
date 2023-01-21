import Race from './Race';

export default class Orc extends Race {
  static numberOfOrc = 0;
  private _life = 74;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Orc.numberOfOrc += 1;
  }

  static createdRacesInstances(): number { return Orc.numberOfOrc; }

  get maxLifePoints(): number { return this._life; }
}