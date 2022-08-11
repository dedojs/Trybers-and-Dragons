import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _createdArchetypeInstances = 0;
  public _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._name = name;
    Mage._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Mage;