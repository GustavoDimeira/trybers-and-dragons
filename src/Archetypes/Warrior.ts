import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static _archetypeInstances = 0;
  private type: EnergyType = 'stamina';

  constructor(private _WarriorName: string) {
    super(_WarriorName);
    Warrior._archetypeInstances += 1;
  }

  get name() { return this._WarriorName; }
  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances() { return Warrior._archetypeInstances; }
}