import { Component, Input } from '@angular/core';
import { Game } from '../interfaces/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-entry',
  imports: [CommonModule],
  template: `
    <section class="game-entry">
      <img [src]="imageUrl" alt="Game cover">
      <h2 class="game-title">{{ this.game.title }}</h2>
      <p class="game-genre"
        *ngFor="let genre of this.game.genres">
        {{ genre.genreName }}
      </p>
    </section>
  `,
  styleUrl: './game-entry.component.css'
})
export class GameEntryComponent {

  imageUrl = "https://www.theoldcomputer.com/game-box-art-covers/Sony/Playstation-PS1/R/Resident%20Evil%20%5BU%5D%20%5BSLUS-00170%5D-front.jpg";

  @Input() game!: Game;

}
