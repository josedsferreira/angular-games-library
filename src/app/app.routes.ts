import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameFormComponent } from './forms/game-form/game-form.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent, 
        title: 'Game Library'
    },
    {
        path: 'game/:id',
        component: GamePageComponent,
        title: 'Game Page'
    },
    {
        path: 'add-game',
        component: GameFormComponent,
        title: 'Add new game'
    },
];
