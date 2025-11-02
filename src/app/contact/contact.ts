import { Component, AfterViewInit } from "@angular/core";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms"; // For MDBootstrap 5+
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";
import * as bootstrap from "bootstrap"; // Import Bootstrap JS types

@Component({
  selector: "app-contact",
  imports: [MdbFormsModule],
  template: `
    <div class="container">
      <div class="row justify-content-center flex-wrap-reverse">
        <div id="form_content" class="col-md-5">
          <form
            id="email-form"
            class="contact-form"
            (submit)="sendEmail($event)"
          >
            <fieldset>
              <!-- Name input -->
              <mdb-form-control class="mb-4">
                <label mdbLabel class="form-label" for="form4Example1"
                  >Name</label
                >
                <input
                  mdbInput
                  type="text"
                  name="to_name"
                  id="form4Example1"
                  class="form-control"
                  required
                />
              </mdb-form-control>

              <!-- Email input -->
              <mdb-form-control class="mb-4">
                <label mdbLabel class="form-label" for="form4Example2"
                  >Email address</label
                >
                <input
                  mdbInput
                  type="email"
                  name="to_email"
                  id="form4Example2"
                  class="form-control"
                  required
                />
              </mdb-form-control>

              <!-- Email input -->
              <mdb-form-control class="mb-4">
                <label mdbLabel class="form-label" for="form4Example2"
                  >Phone number</label
                >
                <input
                  mdbInput
                  type="tel"
                  id="form4Example2"
                  name="to_phone"
                  class="form-control"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  maxlength="12"
                  title="Ten digits code"
                />
              </mdb-form-control>

              <!-- Message input -->
              <mdb-form-control class="mb-4">
                <label mdbLabel class="form-label" for="form4Example3"
                  >Message</label
                >
                <textarea
                  mdbInput
                  class="form-control"
                  id="form4Example3"
                  name="message_copy"
                  rows="4"
                  required
                ></textarea>
              </mdb-form-control>

              <!-- Checkbox -->
              <div class="form-check d-flex justify-content-left mb-4">
                <input
                  mdbCheckbox
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  [checked]="true"
                />
                <label class="form-check-label" for="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <!-- Submit button -->
              <button
                mdbRipple
                type="button"
                type="submit"
                id="liveToastBtn"
                class="btn btn-primary btn-block mb-4"
              >
                Send
              </button>
              <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <!-- ✅ Success Toast -->
                <div
                  id="successToast"
                  class="toast bg-success text-white"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div class="toast-header bg-success text-white">
                    <i class="bi bi-envelope-check-fill"></i>
                    <strong class="me-auto">Email sent</strong>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="toast-body">Thank you for your message</div>
                </div>
                <!-- ❌ Failure Toast -->
                <div
                  id="errorToast"
                  class="toast bg-danger text-white"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div class="toast-header bg-danger text-white">
                    <strong class="me-auto">Send Failed</strong>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="toast-body">
                    Oops! Something went wrong. Please use the email above or
                    call.
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div id="contact_content" class="col-md-6">
          <div class="moving_text">
            <p>Repair is</p>
            <p>
              <span class="word wisteria">affordable.</span>
              <span class="word belize">fast.</span>
              <span class="word pomegranate">what we do best.</span>
              <span class="word green">reliable.</span>
              <span class="word midnight">built on trust.</span>
            </p>
          </div>

          <h2>Hire Noble Custom Carpentry for all of your renovation needs</h2>
          <p>
            Thank you for visiting the website of Noble Custom Carpentry in
            Great Falls, MT. Whether you need trim and finish services or
            cabinetry installation, you can rely on us to get the job done
            right.
          </p>
          <p>
            Please use the form on this page to contact us. You can also call
            (970)-397-6700 today to speak with us immediately.
          </p>

          <ul id="info_list">
            <li><i class="bi bi-geo-alt-fill"></i> Great Falls</li>
            <li>
              <i class="bi bi-envelope-check-fill"></i>
              Noblecarpentry406@gmail.com
            </li>
            <li><i class="bi bi-telephone-inbound-fill"></i> (970)-397-6700</li>
            <li>
              <i class="bi bi-person-fill-check"></i> Mon-Fri: 8:00AM - 5:00PM
            </li>
            <li>
              <i class="bi bi-calendar-check-fill"></i> Sat-Sun: By Appointment
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: [`./contact.css`],
})
export class Contact {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7mupsla",
        "template_0k11feq",
        e.target as HTMLFormElement,
        {
          publicKey: "6qBXIsKWOJaanhtFZ",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          this.resetForm();
          this.showToast("successToast");
        },
        (error) => {
          console.log("FAILED...", (error as EmailJSResponseStatus).text);
          this.resetForm();
          this.showToast("errorToast");
        }
      );
  }

  private showToast(toastId: string) {
    const toastEl = document.getElementById(toastId);
    if (!toastEl) return;
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
    toast.show();
  }

  private resetForm() {
    var resetForm = <HTMLFormElement>document.getElementById("email-form");
    resetForm.reset();
  }

  ngAfterViewInit(): void {
    const words = Array.from(
      document.getElementsByClassName("word")
    ) as HTMLElement[];
    const wordArray: HTMLElement[][] = [];
    let currentWord = 0;

    // Split each word into letters
    words.forEach((word) => this.splitLetters(word, wordArray));

    // Show first word
    words[currentWord].style.opacity = "1";

    const changeWord = () => {
      const cw = wordArray[currentWord];
      const nextIndex =
        currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
      const nw = wordArray[nextIndex];

      // Animate the current word out first
      cw.forEach((letter, i) => this.animateLetterOut(letter, i));

      // Wait until OUT animation is fully done before starting IN animation
      const outDuration = cw.length * 80 + 500;

      setTimeout(() => {
        // Hide current word entirely
        cw[0].parentElement!.style.opacity = "0";

        // Prepare next word letters
        nw.forEach((letter) => {
          letter.className = "letter behind";
        });

        // Wait briefly before fading new word in
        setTimeout(() => {
          nw[0].parentElement!.style.opacity = "1";
          nw.forEach((letter, i) => this.animateLetterIn(letter, i));
          currentWord = nextIndex;
        }, 300);
      }, outDuration);
    };

    // Start
    changeWord();
    setInterval(changeWord, 4000);
  }

  private splitLetters(word: HTMLElement, wordArray: HTMLElement[][]): void {
    const content = word.textContent || "";
    word.textContent = "";
    const letters: HTMLElement[] = [];

    for (let i = 0; i < content.length; i++) {
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }

    wordArray.push(letters);
  }

  private animateLetterOut(letter: HTMLElement, i: number): void {
    setTimeout(() => {
      letter.classList.add("out");
    }, i * 80);
  }

  private animateLetterIn(letter: HTMLElement, i: number): void {
    setTimeout(() => {
      letter.classList.remove("behind");
      letter.classList.add("in");
    }, i * 80);
  }
}
