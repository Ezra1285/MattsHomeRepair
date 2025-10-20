import {Component} from '@angular/core';
@Component({
  selector: 'app-home',
  template: `

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


<!-- 
<div id="home_content" class="container-lg">
  <div class="row">
    <div class="col-6">
      <div class="position-relative h-100">
        <img class="position-absolute h-100 w-100" src="../../assets/headshot_photo.jpg" alt="random image">
      </div>
    </div>
    <div class="col-6">
      <p>
          HI, I’m Jason Buehring, owner and handyman at Peace of Mind Home Repair & Maintenance serving Billings, MT and surrounding areas.
          <br><br>
          As a husband, father, businessman and homeowner I know how valuable time is. That is why I specialize in helping homeowners tackle your “to-Do-Lists”, freeing up your time to do what you love to do!
          <br><br>
          I treat every home project as if it were my own, giving you the Peace of Mind knowing that your projects will be completed in a timely and professional manner.
      </p>
    </div>
  </div>
</div> -->

  <!-- <div id="content" class="d-flex flex-row bd-highlight mb-3 justify-content-center">
    <div id="headshot_photo"  class="p-2 bd-highlight">
      <img src="../../assets/headshot_photo.jpg" class="img-fluid" alt="...">
    </div>
    <div id="headshot_content" class="p-2 bd-highlight">
      <p>
          HI, I’m Jason Buehring, owner and handyman at Peace of Mind Home Repair & Maintenance serving Billings, MT and surrounding areas.
          <br><br>
          As a husband, father, businessman and homeowner I know how valuable time is. That is why I specialize in helping homeowners tackle your “to-Do-Lists”, freeing up your time to do what you love to do!
          <br><br>
          I treat every home project as if it were my own, giving you the Peace of Mind knowing that your projects will be completed in a timely and professional manner.
      </p>
    </div>
  </div> -->
  `,
  styleUrls: ['./home.css'],
})
export class Home {}