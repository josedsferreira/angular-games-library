import { Component, inject } from '@angular/core';
import { GameEntryComponent } from '../game-entry/game-entry.component';
import { Game } from '../interfaces/game';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [GameEntryComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by platform">
        <button type="submit">Search</button>
      </form>
    </section>
    <section class="results">
      <app-game-entry
        *ngFor="let game of gameList"
        [game]="game">
      </app-game-entry>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  gameList: Game[] = [];
  gameService: GameService = inject(GameService);

  constructor() {
    this.gameService.getAllGames().then((gameList: Game[]) => {
      this.gameList = gameList;
    })
  }

}
