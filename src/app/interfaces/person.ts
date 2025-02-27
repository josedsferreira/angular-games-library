import { GamePeople } from './game-people';
import { Gender } from './gender';

export interface Person {
    personId: number;
    personName: string;
    nationality?: string;
    gender?: Gender;
    birthDate?: string;
    gamesWorkedOn?: Set<GamePeople>;
}