import { Component } from '@angular/core';
import { heroes } from './store';

@Component({
  selector: 'app-todo',
  templateUrl: './entry.html'
})
export class AppComponent {
  heroes: heroes;

  constructor(heroes: heroes) {
    this.heroes = heroes;
    console.log(heroes);
  }

  add_Todo() {
    let i = this.heroes.length;
    console.log(i);
    localStorage.setItem('todos'+i, '');
    this.heroes.push('todos'+i);
  }
}
