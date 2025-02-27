import { Injectable } from '@angular/core';
import { Game } from './interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = "https://game-library-deployment.onrender.com/api/games";

  async getAllGames(): Promise<Game[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getGameById(id: number): Promise<Game | undefined> {
    const data = await fetch("${this.url}/${id}");
    return await data.json() ?? {};
  }
}
