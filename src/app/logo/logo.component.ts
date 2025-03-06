import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
    <div class="flex items-center">
      <img
        src="library_logo.png" 
        class="max-w-none h-12 object-contain flex-shrink-0"
        alt="Library Logo" 
        aria-hidden="true"
      />
    </div>
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
        logo.src = 'library_logo_dark.png';
      } else {
        logo.src = 'library_logo.png';
      }
    };

    // Initial check
    if (darkModeMediaQuery.matches) {
      logo.src = 'library_logo_dark.png';
    } else {
      logo.src = 'library_logo.png';
    }

    // Listen for changes
    darkModeMediaQuery.addEventListener('change', updateLogo);
  }
}
