import {Component} from '@angular/core';
import {Home} from './home/home';
import { Navbar } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar],
  template: `
  
  
    <main>
    
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <app-navbar></app-navbar>   
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
