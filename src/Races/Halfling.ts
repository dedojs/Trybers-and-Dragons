import Race from './Race';

class Halfling extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}

export default Halfling;