import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static _archetypeInstances = 0;
  private type: EnergyType = 'mana';

  constructor(private _NecromancerName: string) {
    super(_NecromancerName);
    Necromancer._archetypeInstances += 1;
  }

  get name() { return this._NecromancerName; }
  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances() { return Necromancer._archetypeInstances; }
}