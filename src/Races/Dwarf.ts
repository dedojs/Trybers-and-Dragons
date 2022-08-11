import Race from './Race';

class Dwarf extends Race {
  private _maxlifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    Dwarf._createdRacesInstances += 1;
    this._maxlifePoints = 80;
  }
  
  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxlifePoints;
  }
}

export default Dwarf;