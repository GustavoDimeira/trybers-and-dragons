import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public character1: Character, public character2: Character) {
    super(character1);
    super(character2);
  }
}

const a = new PVP(new Character('a'), new Character('b'));
console.log(a);