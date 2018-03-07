import {Component} from '@angular/core';
import {PipeDecorator} from '../../core/decorators';

@Component({
  selector: 'app-main-pages',
  template: `<h1>Main pages</h1>`,
  styles: [],
})
export class MainPagesComponent {
  @PipeDecorator public getPipe: Function;

  constructor() {
    console.log('hello main pages');
  }
}
