import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router) {
   }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNum: [''],
      birthDate: [''],
      reasonForContact: [''],
      preferredApptTime: [''],
      message: [''],
    });
  }

  get form() { return this.contactForm.controls; }

  onSubmit(): void{       
    console.log("inside onSubmit")
        
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

      console.log("checking data in TS: ", contact)

      this.contactService.createContact(contact).subscribe(
        data => {console.log("in component", data);
        console.log(this.contactForm.value);
        this.contactForm.reset();
        alert('Your email is sent');
        }
      );

      // this.contactService.createContact(contact).subscribe(
      //   data => {console.log("in component", data);
      //   console.log("Contact Form Values: ", this.contactForm.value);
        
      //   if(data){
      //     alert('Your email has been sent');
      //   }
      //   else {
      //     alert('There was an error, your email has NOT been sent ' + '\n'
      //     + 'Please try again.');
      //   }
      //   this.contactForm.reset();
       }
        
  //     );
  // } 
}

  // createFormGroup(){
  //   return new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  //     inputAddress: new FormControl(''),
  //     inputAddress2: new FormControl(''),
  //     inputCity: new FormControl('')
  //   });
  // }
