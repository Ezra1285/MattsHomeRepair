import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-services",
  imports: [CommonModule],
  template: `
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">All Services Offered</h1>
        <p class="lead text-muted">
          Cabinets, Trim and Finish Work, Custom Shelving, Counter Install,
          Custom Hearth, Interior⁄Exterior Door Installation, Pocket Door,
          Doggie Door Installation, Door Knobs and Locks, Door and Baseboard
          Trim, Window Install, Closets and Mudrooms, Customer Hearths, Built-In
          Shelving, Touch-up painting, and LVT floors,
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
                        (click)="openCabnetLightbox()"
                        class="btn btn-m btn-outline-secondary open-btn"
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
                        (click)="openShelfLightbox()"
                        class="btn btn-m btn-outline-secondary open-btn"
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
                        (click)="openHearthLightbox()"
                        class="btn btn-m btn-outline-secondary open-btn"
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
                        (click)="openMudroomLightbox()"
                        class="btn btn-m btn-outline-secondary open-btn"
                      >
                        VIEW PAST CLOSETS AND MUDROOMS SERVICES
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New Angular control flow syntax -->
    @if (lightboxOpen) {
    <div class="lightbox" (click)="closeLightbox()">
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <!-- Image -->
        <img
          [src]="currentImgGallery[currentIndex]"
          alt="Gallery Image"
          class="lightbox-img"
        />

        <!-- Navigation buttons -->
        <button class="nav-btn prev" (click)="prevImage()">❮</button>
        <button class="nav-btn next" (click)="nextImage()">❯</button>

        <!-- Close button -->
        <button class="close-btn" (click)="closeLightbox()">✕</button>

        <!-- Optional counter -->
        <div class="counter">
          {{ currentIndex + 1 }} / {{ currentImgGallery.length }}
        </div>
      </div>
    </div>
    }
  `,
  styleUrls: [`./services.css`],
})
export class Services {
  cabnetImages: string[] = [
    "../../assets/cabinet1.jpg",
    "../../assets/cabnet2.jpg",
    "../../assets/cabnet3.jpg",
    "../../assets/cabnet4.jpg",
    "../../assets/cabnet5.jpg",
    "../../assets/cabnet6.jpg",
    "../../assets/cabnet7.jpg",
    "../../assets/cabnet8.jpg",
    "../../assets/cabnet9.jpg",
    "../../assets/cabnet10.jpg",
    "../../assets/cabnet11.jpg",
  ];

  mudroomImages: string[] = [
    "../../assets/mudroom1.jpg",
    "../../assets/mudroom2.jpg",
  ];

  hearthImages: string[] = [
    "../../assets/hearth1.jpg",
    "../../assets/hearth2.jpg",
    "../../assets/hearth3.jpeg",
  ];

  ShelfImages: string[] = [
    "../../assets/shelf1.jpg",
    "../../assets/shelf2.jpg",
    "../../assets/shelf3.jpg",
  ];

  currentImgGallery: string[] = this.cabnetImages;

  currentIndex = 0;
  lightboxOpen = false;

  openCabnetLightbox(index: number = 0) {
    this.currentImgGallery = this.cabnetImages;
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  openShelfLightbox(index: number = 0) {
    this.currentImgGallery = this.ShelfImages;
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  openMudroomLightbox(index: number = 0) {
    this.currentImgGallery = this.mudroomImages;
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  openHearthLightbox(index: number = 0) {
    this.currentImgGallery = this.hearthImages;
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.currentImgGallery.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.currentImgGallery.length) %
      this.currentImgGallery.length;
  }
}
