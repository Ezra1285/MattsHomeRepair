import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'; // For MDBootstrap 5+


@Component({
  selector: 'app-contact',
  imports: [MdbFormsModule],
  template: `

<div class="container">
  <div class="row justify-content-center flex-wrap-reverse">
    <div id="form_content" class="col-md-4">
      <form>
  <!-- Name input -->
  <mdb-form-control class="mb-4">
    <label mdbLabel class="form-label" for="form4Example1">Name</label>
    <input mdbInput type="text" id="form4Example1" class="form-control" />
  </mdb-form-control>

  <!-- Email input -->
  <mdb-form-control class="mb-4">
    <label mdbLabel class="form-label" for="form4Example2">Email address</label>
    <input mdbInput type="email" id="form4Example2" class="form-control" />
  </mdb-form-control>

  <!-- Email input -->
  <mdb-form-control class="mb-4">
    <label mdbLabel class="form-label" for="form4Example2">Phone number</label>
    <input mdbInput type="email" id="form4Example2" class="form-control" />
  </mdb-form-control>


  <!-- Message input -->
  <mdb-form-control class="mb-4">
    <label mdbLabel class="form-label" for="form4Example3">Message</label>
    <textarea mdbInput class="form-control" id="form4Example3" rows="4"></textarea>
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
  <button mdbRipple type="button" class="btn btn-primary btn-block mb-4">Send</button>
  </form>
    </div>
    <div id="contact_content" class="col-md-6">
    <h2>Hire Clean Cut Handyman LLC for all of your renovation needs</h2>
    <p>
    Thank you for visiting the website of Clean Cut Handyman LLC in Billings, MT. Whether you need drywall repair services or fence installations,
     you can rely on your local handyman to get the job done right.
    </p>  
    <p>Please use the form on this page to contact us. You can also call 406-371-3060 today to speak with us immediately.</p>

    <ul id="info_list">
      <li><i class="bi bi-geo-alt-fill"></i> Great Falls</li>
      <li><i class="bi bi-envelope-check-fill"></i> Matt@ICanFixIt.com</li>
      <li><i class="bi bi-telephone-inbound-fill"></i> (406)-123-1234</li>
      <li><i class="bi bi-person-fill-check"></i> Mon-Fri: 8:00AM - 5:00PM</li>
      <li><i class="bi bi-calendar-check-fill"></i> Sat-Sun: By Appointment</li>
    </ul>
    </div>
  </div>
</div>

  `,
  styleUrls: [`./contact.css`]
})
export class Contact {

}
