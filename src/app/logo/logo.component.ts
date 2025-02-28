import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
    <img id="logo" 
      src="title.png" 
      class="h-18" 
      id="logo"
      alt="Library Logo and title 'Game Library'" 
      aria-hidden="true"
    />
  `,
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit {

  ngOnInit(): void {
      this.updateLogoMode();
  }

  updateLogoMode()  {
    const logo = document.getElementById('logo') as HTMLImageElement;
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateLogo = (e: MediaQueryListEvent) => {
      if (e.matches) {
        logo.src = 'title_dark.png';
      } else {
        logo.src = 'title.png';
      }
    };

    // Initial check
    if (darkModeMediaQuery.matches) {
      logo.src = 'title_dark.png';
    } else {
      logo.src = 'title.png';
    }

    // Listen for changes
    darkModeMediaQuery.addEventListener('change', updateLogo);
  }
}
