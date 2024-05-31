import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  showFiller = false;
  sideDrawerHasBackdrop = true;
  sideDrawerMode = 'push'; // 'side' | 'over' | 'push'
  sideDrawerOpened = false;
  titleToolbar = 'Golden Raspberry Awards';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/movies']);
  }

  goToPage = (page: string) => {
    this.router.navigate([`/${page}`]);
    this.sideDrawerOpened = false;
  };

  onToggleSideDrawer = (event: any) => {
    this.sideDrawerOpened = !this.sideDrawerOpened;
  };
}
