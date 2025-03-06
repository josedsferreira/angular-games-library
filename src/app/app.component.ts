import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-games-library';
}
