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

  constructor(private fb: FormBuilder, private contactService: ContactService, private designService: DesignBlockService) {
   }

  ngOnInit() {

    this.designService.updateDesignBlockStatus(true);

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNum: ['', Validators.required],
      birthDate: ['', Validators.required],
      reasonForContact: ['', Validators.required],
      preferredApptTime: ['', Validators.required],
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

      

      // this.contactService.createContact(contact).subscribe(
      //   data => {console.log("in component", data);
      //   console.log(this.contactForm.value);
      //   this.contactForm.reset();
      //   alert('Your email is sent');
      //   }
      // );

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
}
