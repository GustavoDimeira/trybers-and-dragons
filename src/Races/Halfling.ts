import Race from './Race';

export default class Halfling extends Race {
  static numberOfHalfling = 0;
  private _life = 60;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Halfling.numberOfHalfling += 1;
  }

  static createdRacesInstances(): number { return Halfling.numberOfHalfling; }

  get maxLifePoints(): number { return this._life; }
}