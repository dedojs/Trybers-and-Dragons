import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player1: Fighter;
  protected _player2: Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this._player1 = p1;
    this._player2 = p2;
  }

  fight(): number {
    let result = 0;
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1) {
        result = -1;
      } else {
        result = 1;
      }
    }
    return result;
  }
}
