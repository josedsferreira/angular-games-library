import { Component, inject } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-page',
  imports: [CommonModule],
  template: `
    <div *ngIf="game; else notFound">

      <div class="flex flex-row gap-4 m-4">

        <!-- Image -->
        <div class="h-[205px] w-[205px]">
          <img [src]="imageUrl" alt="Game cover" class="w-full h-full object-cover">
        </div>

        <div>
          <!-- Details -->
          <span class="flex flex-row gap-1 items-end">
            <p class="text-3xl font-bold">{{ game.title }}</p>
            <p class="text-xl">{{ firstReleaseYear }}</p>
          </span>
          <span class="flex flex-row gap-1 items-end">
            <p class="font-bold">Developer:</p>
            <p>{{ game.developerStudio?.companyName }}</p>
          </span>
          <span class="flex flex-row gap-1 items-end">
            <p class="font-bold">Publisher:</p>
            <p>{{ game.publisher?.companyName }}</p>
          </span>
          <span class="flex flex-row gap-1 items-end">
            <p class="font-bold">Director:</p>
            <p>{{ game.director?.personName }}</p>
          </span>
          <span class="flex flex-row gap-1 items-end">
            <p class="font-bold">Series:</p>
            <p>{{ game.gameSeries?.seriesName }}</p>
          </span>

          <!-- Platforms -->
          <div *ngIf="game.platforms" class="flex flex-row gap-1">
            <p class="font-bold">Platforms: </p>
            <span *ngFor="let platform of game.platforms; let i = index">
              <span>{{ platform.platform.platformName }}</span><span *ngIf="i < game.platforms.size - 1">, </span>
            </span>
          </div>

          <!-- Genres -->
          <div *ngIf="game.genres" class="flex flex-row gap-1">
            <p class="font-bold">Genres: </p>
            <span *ngFor="let genre of game.genres; let i = index">
              <span>{{ genre.genreName }}</span><span *ngIf="i < game.genres.size - 1">, </span>
            </span>
          </div>

        </div>

      </div>

    </div>
    <ng-template #notFound>
      <p>Loading...</p>
    </ng-template>
  `,
  styleUrl: './game-page.component.css'
})
export class GamePageComponent {

  /*//Square
  imageUrl = "https://www.theoldcomputer.com/game-box-art-covers/Sony/Playstation-PS1/R/Resident%20Evil%20%5BU%5D%20%5BSLUS-00170%5D-front.jpg";
   */

  /* //Wide
  imageUrl = "https://m.media-amazon.com/images/M/MV5BZjYzOWMzN2UtNDFjMi00ODE3LWEyNTAtMjZjNzg2OTUwMmI3XkEyXkFqcGdeQXVyMjU2NDgzODU@.jpg";
  */

  //Tall
  imageUrl = "https://m.media-amazon.com/images/M/MV5BOGVkNjEyN2EtMjRiYi00ZWY1LThkOWItZTNkNjA0MTE4YmRhXkEyXkFqcGdeQXVyNjUxNDQwMzA@.jpg"
 

  game: Game | undefined;
  firstReleaseYear: string = "";
  gameService: GameService = inject(GameService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      //console.log(gameId);
      this.gameService.getGameById(Number(gameId)).then((game: Game | undefined) => {
        if (game) {
          this.game = game;
          this.game.platforms = new Set(game.platforms);
          /* console.log('platforms object:', this.game.platforms);
          console.log('platforms size:', this.game.platforms?.size);
          console.log('Instance of Set?', this.game.platforms instanceof Set); */
          this.setFirstReleaseDate();
        }
      }).catch(error => {
        console.error('Error fetching game:', error);
      });
    }
  }

  setFirstReleaseDate(): void {
    if (this.game?.platforms) {
      let earliestDate: Date | null = null;
  
      for (let platformRelease of this.game?.platforms) {
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

  /* interface Game
      gameId: number;
      title: string;
      developerStudio?: Company;
      publisher?: Company;
      director?: Person;
      gameSeries?: Series;
      developers?: Set<GamePeople>;
      platforms?: Set<GamePlatforms>;
      genres?: Set<Genre>; */

}
