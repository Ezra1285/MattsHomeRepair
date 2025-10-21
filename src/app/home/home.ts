import {Component} from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent],
  template: `
<app-hero-section></app-hero-section>
<div id="home_content" class="container">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <img id="headshot_photo" src="../../assets/headshot_photo.jpg" class="img-fluid" alt="Headshot photo">
    </div>
    <div id="photo_content" class="col-md-6">
      <img src="../../assets/repair_logo.png" class="img-fluid" alt="Repair logo">
      <p>
          HI, I’m Jason Buehring, owner and handyman at Peace of Mind Home Repair & Maintenance serving Billings, MT and surrounding areas.
          <br><br>
          As a husband, father, businessman and homeowner I know how valuable time is. That is why I specialize in helping homeowners tackle your “to-Do-Lists”, freeing up your time to do what you love to do!
          <br><br>
          I treat every home project as if it were my own, giving you the Peace of Mind knowing that your projects will be completed in a timely and professional manner.
      </p>
    </div>
  </div>
</div>

  `,
  styleUrls: ['./home.css'],
})
export class Home {}