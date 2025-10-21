import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  template: `
 <!-- Background image -->
  
  <div id="intro-example" class="p-5 text-center bg-image">
    <div id="heroContent" class="mask" style="background-color: rgba(0, 0, 0, 0.7);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
          <h5 class="mb-4">
            Best & free guide of responsive web design
          </h5>
          <a data-mdb-ripple-init class="btn btn-outline-light btn-lg m-2" href="services"
            role="button" rel="nofollow" target="_blank">See services</a>
          <a data-mdb-ripple-init class="btn btn-outline-light btn-lg m-2" href="contact"
            target="_blank" role="button">Request a quote</a>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {

}
