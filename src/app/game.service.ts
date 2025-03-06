import { Injectable } from '@angular/core';
import { Game } from './interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = "https://game-library-deployment.onrender.com/api/games";

  async getAllGames(): Promise<Game[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() ?? [];
  }

  async getGameById(id: number): Promise<Game | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    //console.log("Service result:", response);
    if (!response.ok) {
      console.error('Network response was not ok');
      return undefined;
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const game = await response.json();
      //console.log("Parsed game:", game);
      return game;
    } else {
      console.error('Expected JSON response but got:', contentType);
      return undefined;
    }
  }
}
