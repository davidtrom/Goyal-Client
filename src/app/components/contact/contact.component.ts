import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../service/contact.service';
import { DesignBlockService } from 'src/app/service/design-block.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  formNotValid: boolean;

  constructor(private fb: FormBuilder, private contactService: ContactService, private designService: DesignBlockService) {
   }

  ngOnInit() {

    this.designService.updateDesignBlockStatus(true);

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-z. A-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%$!#+\-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$')]],
      phoneNum: ['', [Validators.required, Validators.minLength(10)]],
      birthDate: ['', Validators.required],
      reasonForContact: ['', Validators.required],
      preferredApptTime: ['', Validators.required],
      message: [''],
    });
  }
  

  // get firstName() {
  //   return this.contactForm.get('firstName');
  // } 

  // get lastName() {
  //   return this.contactForm.get('lastName');
  // } 

  // get email() {
  //   return this.contactForm.get('email');
  // } 

  // get phoneNum() {
  //   return this.contactForm.get('phoneNum');
  // } 

  // get birthDate() {
  //   return this.contactForm.get('birthDate');
  // } 

  // get reasonForContact() {
  //   return this.contactForm.get('reasonForContact');
  // } 

  // get preferredApptTime() {
  //   return this.contactForm.get('preferredApptTime');
  // } 

  // get message() {
  //   return this.contactForm.get('message');
  // } 

  get form() { return this.contactForm.controls; }

  onSubmit(): void{       
    console.log("inside onSubmit")
    if(this.contactForm.valid){
      let contact: Contact = new Contact(
        null,
        this.contactForm.controls.firstName.value,
        this.contactForm.controls.lastName.value,
        this.contactForm.controls.email.value,
        this.contactForm.controls.phoneNum.value,
        this.contactForm.controls.birthDate.value,
        this.contactForm.controls.reasonForContact.value,
        this.contactForm.controls.preferredApptTime.value,
        this.contactForm.controls.message.value
        );

        this.contactService.createContact(contact).subscribe(
          data => {
            console.log("was email sent? ", data);     
          if(data){
            alert('Your email has been sent');
          }
          else {
            alert('There was an error, your email has NOT been sent ' + '\n'
            + 'Please try again.');
          }
          this.contactForm.reset();
        }
        );
    }
    else{
      this.contactForm.markAllAsTouched();
      this.formNotValid = true;
      console.log(this.formNotValid);
    }
  } 
}
