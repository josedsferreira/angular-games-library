import { Game } from './game';
import { Person } from './person';
import { GamePeopleKey } from './game-people-key';

export interface GamePeople {
    gamePeopleId: GamePeopleKey;
    game: Game;
    person: Person;
    jobRole: string;
}