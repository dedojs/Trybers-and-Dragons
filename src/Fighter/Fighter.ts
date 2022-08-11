import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export interface FighterMain {
  lifePoints: number
  strength: number
  defense: number
  energy?: Energy
}

export default interface Fighter extends FighterMain {
  attack(enemy: SimpleFighter): void
  special(enemy: SimpleFighter): void
  levelUp(): void;
  receiveDamage(attackPoints: number): number
}
