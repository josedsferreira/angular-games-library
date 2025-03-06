import { Component, inject } from '@angular/core';
import { GameEntryComponent } from '../game-entry/game-entry.component';
import { Game } from '../interfaces/game';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [GameEntryComponent, CommonModule, RouterModule],
  template: `
    <section class="grid auto-cols-max grid-flow-col gap-4 m-4">
      <a
        *ngFor="let game of gameList"
        [routerLink]="['/game', game.gameId]"
        class="block">
        <app-game-entry [game]="game"></app-game-entry>
      </a>
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
