import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createContactForm: FormGroup;

  constructor() {
    this.createContactForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  createFormGroup(){
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl('')
    });
  }

}
