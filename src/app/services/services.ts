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
                  src="../assets/cabinet1.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>CABINETRY INSTALLATION</h2>
                  <p class="card-text">
                    We install kitchen, bathroom, and storage cabinets with
                    precision and care. Whether you need new cabinets fitted or
                    old ones replaced, we’ll make sure they’re level, secure,
                    and ready for everyday use.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW PAST CABINET INSTALLS
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
                  src="../assets/shelf1.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>CUSTOM BUILT-IN SHELVING</h2>
                  <p class="card-text">
                    Add storage that actually fits your home. From floating
                    shelves to full built-ins, we design and install shelving
                    that looks great and makes the most of your space. Every
                    piece is measured, cut, and installed to match your style
                    and needs.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW PAST SHELVING SERVICES
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
                  src="../assets/door1.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>DOOR AND LOCK</h2>
                  <p class="card-text">
                    Whether your door is sticking, worn out, or just outdated,
                    we can replace it with something that fits right and looks
                    great. From sturdy front doors to smooth interior installs,
                    we make sure everything opens, closes, and locks exactly
                    like it should.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW DOOR AND LOCK REPLACEMENT SERVICES
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
                  src="../assets/hearth1.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>CUSTOM HEARTHS</h2>
                  <p class="card-text">
                    A new hearth can completely change the look of your
                    fireplace. We design and install custom hearths that match
                    your home’s style while adding function and durability. From
                    simple stonework to detailed finishes, we’ll make sure it’s
                    built to last.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW HEARTHS SERVICES
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
                  src="../assets/trimWork.png"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>TRIM AND FINISH WORK</h2>
                  <p class="card-text">
                    Add the final touches that make a room stand out. From clean
                    corners to detailed molding, we make sure every edge looks
                    sharp and polished.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW PAST TRIM SERVICES
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
                  src="../assets/mudroom1.jpg"
                  data-holder-rendered="true"
                />
              </div>
              <div class="card-body row-md-8">
                <div class="card_text">
                  <h2>CLOSETS AND MUDROOMS</h2>
                  <p class="card-text">
                    Stay organized with custom-built spaces that fit your
                    lifestyle. From storage solutions to stylish finishes, we
                    build for function and flow.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-m btn-outline-secondary"
                      >
                        VIEW PAST CLOSETS AND MUDROOMS SERVICES
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
