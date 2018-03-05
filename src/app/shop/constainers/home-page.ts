import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Home page</h1>
  <a routerLink="/admin">ADMIN</a>`
})
export class HomePageComponent {

}
