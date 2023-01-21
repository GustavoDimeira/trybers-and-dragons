export default abstract class Race {
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  constructor(private _name: string, private _dexterity: number) { }

  get name(): string { return this._name; }
  get dexterity(): number { return this._dexterity; }
  abstract get maxLifePoints(): number;
}
