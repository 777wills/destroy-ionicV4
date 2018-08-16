import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  constructor(private router: Router) {}

  goUsers() {
    this.router.navigate(['users'])
  }

  ngOnDestroy() {
    console.log('destroy');
  }

}
