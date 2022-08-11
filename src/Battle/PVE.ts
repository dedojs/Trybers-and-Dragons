import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  protected _player1: Fighter;
  protected _monsters: SimpleFighter[] | Monster[];

  constructor(p1: Fighter, m1: SimpleFighter[] | Monster[]) {
    super(p1);
    this._player1 = p1;
    this._monsters = m1;
  }

  fight(): number {
    let monster = this._monsters.find((item) => item.lifePoints > 0);

    while (this._player1.lifePoints > 0 && monster !== undefined) {
      this._player1.attack(monster);
      monster.attack(this._player1);
      monster = this._monsters.find((item) => item.lifePoints > 0);
    }
    
    return super.fight();
  }
}