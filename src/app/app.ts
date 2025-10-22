import {Component} from '@angular/core';
import { Navbar } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, RouterOutlet, Footer],
  template: `
  
    <app-navbar></app-navbar>   

    <main>
      <router-outlet></router-outlet>      
    </main>
    
    <app-footer></app-footer>  

  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
