import Energy, { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype implements Energy {
  static _createdArchetypeInstances = 0;
  public type_: EnergyType;
  public amount!: number;

  constructor(name: string) {
    super(name);
    this._name = name;
    Warrior._createdArchetypeInstances += 1;
    this.type_ = 'stamina';
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Warrior;