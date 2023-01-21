import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static _archetypeInstances = 0;
  private type: EnergyType = 'stamina';

  constructor(private _RangerName: string) {
    super(_RangerName);
    Ranger._archetypeInstances += 1;
  }

  get name() { return this._RangerName; }
  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances() { return Ranger._archetypeInstances; }
}