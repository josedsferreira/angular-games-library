import { Game } from './game';
import { Platform } from './platform';
import { GamePlatformsKey } from './game-platforms-key';

export interface GamePlatforms {
    gamePlatformsKey: GamePlatformsKey;
    game: Game;
    platform: Platform;
    releaseDateNA?: string;
    releaseDateJP?: string;
    releaseDateEU?: string;
}