import { Component, AfterViewInit } from "@angular/core";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import {
  RouterLinkWithHref,
  RouterModule,
  RouterOutlet,
} from "@angular/router";

@Component({
  selector: "app-navbar",
  imports: [MdbCollapseModule, RouterModule],
  template: `
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      data-mdb-theme="light"
      style="background-color: #e3f2fd;"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
            height="40"
            alt=""
            loading="lazy"
          />
        </a>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          (click)="rightAligned.toggle()"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div
          class="collapse navbar-collapse"
          id="navbarRightAlignExample"
          mdbCollapse
          #rightAligned="mdbCollapse"
        >
          <!-- Left links -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/services"
                routerLinkActive="active"
                >Services</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/contact"
                routerLinkActive="active"
                >Contact Us</a
              >
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
  `,
  styleUrls: ["./navbar.component.css"],
})
export class Navbar {
  ngAfterViewInit(): void {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }
}
