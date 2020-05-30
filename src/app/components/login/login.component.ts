import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private designService: DesignBlockService) { }

  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);

    this.loginForm = this.fb.group({
      password: [''],
    });
  }

  get form() { return this.loginForm.controls; }

  onSubmit(): void{       
    console.log("inside onSubmit")
      this.loginForm.controls.password.value;
  }

}
