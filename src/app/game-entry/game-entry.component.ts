import { Component, Input } from '@angular/core';
import { Game } from '../interfaces/game';
import { CommonModule } from '@angular/common';
import { GamePlatforms } from '../interfaces/game-platforms';

@Component({
  selector: 'app-game-entry',
  imports: [CommonModule],
  template: `
    <div class="game-entry w-[205px]">

      <div class="h-[205px] w-[205px] overflow-hidden">
        <img [src]="imageUrl" alt="Game cover" class="w-full h-full object-cover">
      </div>

      <div class="description">
        <h2 class="game-title font-bold mt-2">{{ this.game.title }} ({{ firstReleaseYear }})</h2>
        <p class="game-genre mt-1"
          *ngFor="let genre of this.game.genres">
          {{ genre.genreName }}
        </p>
      </div>

    </div>
  `,
  styleUrl: './game-entry.component.css'
})
export class GameEntryComponent {

  //Square
  /* 
  imageUrl = "https://www.theoldcomputer.com/game-box-art-covers/Sony/Playstation-PS1/R/Resident%20Evil%20%5BU%5D%20%5BSLUS-00170%5D-front.jpg";
   */
  //Wide
  
  imageUrl = "https://m.media-amazon.com/images/M/MV5BZjYzOWMzN2UtNDFjMi00ODE3LWEyNTAtMjZjNzg2OTUwMmI3XkEyXkFqcGdeQXVyMjU2NDgzODU@.jpg";
 
  //Tall
  /* 
  imageUrl = "https://m.media-amazon.com/images/M/MV5BOGVkNjEyN2EtMjRiYi00ZWY1LThkOWItZTNkNjA0MTE4YmRhXkEyXkFqcGdeQXVyNjUxNDQwMzA@.jpg"
  */

  @Input() game!: Game;

  firstReleaseYear: string = "";

  ngOnInit(): void {
    this.setFirstReleaseDate();
  }

  setFirstReleaseDate(): void {
    const gamePlatforms: Set<GamePlatforms> | undefined = this.game.platforms;
    if (gamePlatforms) {
      let earliestDate: Date | null = null;
  
      for (let platformRelease of gamePlatforms) {
        const releaseDates = [
          platformRelease.releaseDateEU,
          platformRelease.releaseDateNA,
          platformRelease.releaseDateJP
        ].filter((date): date is string => !!date); // Remove empty strings

        for (let dateStr of releaseDates) {
          const date = new Date(dateStr);
          if (!earliestDate || date < earliestDate) {
            earliestDate = date;
          }
        }
      }

      if (earliestDate) {
        this.firstReleaseYear = earliestDate.getFullYear().toString();
      }
    }

  }

}
