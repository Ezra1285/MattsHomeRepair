import { Component } from "@angular/core";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
@Component({
  selector: "app-home",
  imports: [HeroSectionComponent],
  template: `
    <app-hero-section></app-hero-section>
    <div id="home_content" class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <img
            id="headshot_photo"
            src="../../assets/family_photo.jpg"
            class="img-fluid"
            loading="lazy"
            alt="Matt Morris, owner of Noble Custom Carpentry, with his family"
          />
        </div>
        <div id="photo_content" class="col-md-6">
          <img
            src="../../assets/home_logo.png"
            class="img-fluid"
            loading="lazy"
            alt="Noble Custom Carpentry logo"
          />
          <p>
            HI, I’m Matt Morris, owner and handyman at Noble Custom Carpentry
            serving Great Falls, MT and surrounding areas.
            <br /><br />
            Time is your most valuable asset. As someone who juggles family,
            business, and home ownership, I know the weight of a never-ending
            to-do list. I specialize in one thing: reclaiming your time. Let me
            expertly tackle your home projects so you can focus on living.
            <br /><br />
            I treat every home project as if it were my own, giving you the
            assurance of knowing that your projects will be completed in a
            timely and professional manner.
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./home.css"],
})
export class Home {}
