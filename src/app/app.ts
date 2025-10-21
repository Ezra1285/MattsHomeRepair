import {Component} from '@angular/core';
import { Navbar } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, RouterOutlet],
  template: `
  
    <app-navbar></app-navbar>   

    <main>
      <router-outlet></router-outlet>
    </main>
    
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
