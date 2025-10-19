import {Component} from '@angular/core';
import {Home} from './home/home';
import { Navbar } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, HeroSectionComponent],
  template: `
  
    <app-navbar></app-navbar>   

    <main>
    
    <app-hero-section></app-hero-section>

      
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
