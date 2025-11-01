import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  imports: [],
  template: `
    <footer id="my_footer" class="text-black text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Business Hours</h5>
            <ul class="list-unstyled mb-0">
              <li>M-F: 8am – 5pm</li>
              <li>Sat: By Appointment</li>
              <li>Sun: By Appointment</li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0">Contact</h5>

            <ul id="contact_list" class="list-unstyled mb-0">
              <li>
                <a href="mailto:Noblecarpentry406@gmail.com"
                  >Noblecarpentry406@gmail.com</a
                >
              </li>
              <li>(970)-397-6700</li>
            </ul>
          </div>
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Service Areas</h5>

            <p>Serving Great Falls and surrounding communities.</p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div
        class="copyright text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2025 Copyright
      </div>
      <!-- Copyright -->
    </footer>
  `,
  styleUrls: [`./footer.css`],
})
export class Footer {}
