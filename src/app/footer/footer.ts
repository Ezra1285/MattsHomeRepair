import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  imports: [],
  template: `
<footer class="bg-primary text-white text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Business Hours</h5>
        <ul class="list-unstyled mb-0">
          <li>
            M-F: 8am – 5pm
          </li>
          <li>
            Sat: By Appointment
          </li>
          <li>
            Sun: By Appointment
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Contact</h5>

        <ul id='contact_list' class="list-unstyled mb-0">
          <li>
            Matt@ICanFixIt.com
          </li>
          <li>
            406-670-3937
          </li>
        </ul>
      </div>
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Service Areas</h5>

        <p>
          Serving Great Falls and surrounding communities.
        </p>
      </div>
      <!--Grid column-->

    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
  `,
  styleUrls: [`./footer.css`]
})
export class Footer {

}
