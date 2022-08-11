import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import { SimpleFighter } from './Fighter';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  protected _race: Race;
  protected _archetype: Archetype;
  protected _maxLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;
  protected _defense: number;
  protected _dexterity: number;
  protected _energy: Energy;
  protected _name: string;

  constructor(name: string) {
    this._name = name;
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(10, 20);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    // console.log('dmage', damage);
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    // console.log('l', this._lifePoints);
    return this._lifePoints;
  }
  
  public attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
  
  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 2);
  }
}

export default Character;
