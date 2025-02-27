import { Company } from './company';
import { GamePlatforms } from './game-platforms';

export interface Platform {
    platformId: number;
    platformName: string;
    platformAbreviation?: string;
    manufacturer?: Company;
    productFamily?: string;
    platformReleaseDateNA?: string;
    platformReleaseDateJP?: string;
    platformReleaseDateEU?: string;
    generation?: number;
    games?: Set<GamePlatforms>;
}