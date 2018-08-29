import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('UsersOnInit');
  }

  ngOnChanges() {
    console.log('UsersOnChanges');
  }

  ngDoCheck() {
    console.log('UsersDoCheck');
  }

  ngAfterContentInit() {
    console.log('UsersAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('UsersAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('UsersAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('UsersAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Usersdestroy');
  }

  atras() {
    this.router.navigate(['home']);
  }

}
