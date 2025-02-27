import { Company } from './company';
import { Person } from './person';
import { Series } from './series';
import { GamePeople } from './game-people';
import { GamePlatforms } from './game-platforms';
import { Genre } from './genre';

export interface Game {
    gameId: number;
    title: string;
    developerStudio?: Company;
    publisher?: Company;
    director?: Person;
    gameSeries?: Series;
    developers?: Set<GamePeople>;
    platforms?: Set<GamePlatforms>;
    genres?: Set<Genre>;
}