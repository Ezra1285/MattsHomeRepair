import { Component } from "@angular/core";
import {
  RouterLinkWithHref,
  RouterModule,
  RouterOutlet,
} from "@angular/router";

@Component({
  selector: "app-hero-section",
  imports: [RouterModule],
  template: `
    <!-- Background image -->

    <div id="intro-example" class="p-5 text-center bg-image">
      <div
        id="heroContent"
        class="mask"
        style="background-color: rgba(0, 0, 0, 0.7);"
      >
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">
              Choose Noble Custom Carpentry For Your Next Project
            </h1>
            <h5 class="mb-4">
              Proudly serving homeowners in Great Falls, MT and surrounding
              areas.
            </h5>
            <a
              data-mdb-ripple-init
              class="btn btn-outline-light btn-lg m-2"
              routerLink="/services"
              routerLinkActive="active"
              role="button"
              >See services</a
            >
            <a
              data-mdb-ripple-init
              class="btn btn-outline-light btn-lg m-2"
              routerLink="/contact"
              routerLinkActive="active"
              role="button"
              >Request a quote</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./hero-section.component.css"],
})
export class HeroSectionComponent {}
