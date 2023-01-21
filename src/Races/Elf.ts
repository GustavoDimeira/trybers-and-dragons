import Race from './Race';

export default class Elf extends Race {
  static numberOfElf = 0;
  private _life = 99;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Elf.numberOfElf += 1;
  }

  static createdRacesInstances(): number { return Elf.numberOfElf; }

  get maxLifePoints(): number { return this._life; }
}