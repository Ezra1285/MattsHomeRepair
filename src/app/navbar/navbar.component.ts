import { Component } from "@angular/core";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  imports: [MdbCollapseModule, RouterModule],
  template: `
    <nav
      class="navbar navbar-expand-lg"
      data-mdb-theme="light"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo1.png" height="75" alt="" loading="lazy" />
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
                class="nav-link"
                routerLink="/home"
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
            <li class="nav-item ms-lg-3">
              <a class="nav-link nav-call" href="tel:4067504447">
                <i class="bi bi-telephone-fill"></i>
                (406) 750-4447
              </a>
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
export class Navbar {}
