import { Game } from './game';

export interface Genre {
    genreId: number;
    genreName: string;
    gamesInThisGenre?: Set<Game>;
}