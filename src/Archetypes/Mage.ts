import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static _archetypeInstances = 0;
  private type: EnergyType = 'mana';

  constructor(private _MageName: string) {
    super(_MageName);
    Mage._archetypeInstances += 1;
  }

  get name() { return this._MageName; }
  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances() { return Mage._archetypeInstances; }
}