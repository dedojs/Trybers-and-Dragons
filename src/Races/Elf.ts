import Race from './Race';

class Elf extends Race {
  private _maxlifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    Elf._createdRacesInstances += 1;
    this._maxlifePoints = 99;
  }
  
  public get maxLifePoints(): number {
    return this._maxlifePoints;
  }
  
  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}

export default Elf;