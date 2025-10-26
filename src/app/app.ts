import { Component } from "@angular/core";
import { Navbar } from "./navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Footer } from "./footer/footer";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [Navbar, CommonModule, RouterOutlet, Footer, ReactiveFormsModule],
  template: `
    <app-navbar></app-navbar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open Sans%7CMontserrat"
    />
  `,
  styleUrls: ["./app.css"],
})
export class App {
  title = "homes";
}
