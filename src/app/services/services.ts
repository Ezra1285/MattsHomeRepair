import { Component } from "@angular/core";

@Component({
  selector: "app-services",
  imports: [],
  template: `
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">All Services Offered</h1>
        <p class="lead text-muted">
          Shelving and Hooks Hanging Pictures and TVs, Interior⁄Exterior Door
          Installation, Doggie Door Installation, Door Knobs and Locks, Door and
          Baseboard Trim, Drywall Patching, Appliance Installation, Light
          Fixtures and Ceiling Fans, Outlets and Switches, Toilets ⁄ Sinks ⁄
          Faucets, Grow Room Construction, Garden Boxes, Tree Trimming or
          Removal, Small Roofing Jobs, Small Construction Jobs, Custom Projects,
          Trips to the Garbage Dump
        </p>
        <div class="btn-group">
          <!-- <button type="button" class="btn btn-lg btn-secondary"> -->
          <a class="btn btn-lg btn-secondary" href="contact" role="button">
            START A QUOTE TODAY
            <i class="bi bi-arrow-right my_icon"></i>
          </a>

          <!-- </button> -->
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="col">
          <div class="service_section">
            <div class="card mb-4 box-shadow ">
              <div class="row-md-4">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src="../assets/window_repair.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>HOME WINDOW REPLACEMENT</h2>
                  <p class="card-text">
                    From adding an egress window to replaceing a whole house,
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW WINDOW REPLACEMENT SERVICES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service_section">
            <div class="card mb-4 box-shadow">
              <div class="row-md-4">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src="../assets/new_door.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>DOORS</h2>
                  <p class="card-text">
                    We offer sliding glass doors and french door sales adn
                    services for the homeowner or property management company.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW DOOR SERVICES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service_section">
            <div class="card mb-4 box-shadow">
              <div class="row-md-4">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src="../assets/new_shower.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>SHOWERS</h2>
                  <p class="card-text">
                    We can create the perfect customer shower soultion to
                    complete the bathroom of your dreams.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW SHOWER SERVICES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="service_section">
            <div class="card mb-4 box-shadow">
              <div class="row-md-4">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src="../assets/new_skylight.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>SKYLIGHTS</h2>
                  <p class="card-text">Skylights... they are very cool</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW SKYLIGHT SERVICES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service_section">
            <div class="card mb-4 box-shadow">
              <div class="row-md-4">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src="../assets/new_skylight.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>MIRRORS</h2>
                  <p class="card-text">We provide customer mirror soultions</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW MIRROR SERVICES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service_section">
            <div class="card mb-4 box-shadow">
              <div class="row-md-4">
                <img
                  class="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  src="../assets/new_tiles.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>TILE REPAIR AND INSTALL</h2>
                  <p class="card-text">Stuff and things</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW TILE SERVICES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [`./services.css`],
})
export class Services {}
