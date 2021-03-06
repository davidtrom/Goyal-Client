import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidPassword: boolean;

  constructor(private router: Router, private fb: FormBuilder, private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);

    this.loginForm = this.fb.group({
      password: ['', Validators.required]
    });
  }
  
  get form() { return this.loginForm.controls; }
  
  async onSubmit(){   
    var data = await this.blogPostService.verifyDoctor(this.loginForm.controls.password.value).toPromise();

    // this.blogPostService.verifyDoctor(this.loginForm.controls.password.value).subscribe(
    //   data => {console.log("password verified? ", data);
    console.log("data from service ", data);
    if(data){
      this.router.navigate(['/doctor-dashboard']);
    }
    else{
      this.invalidPassword = true;
      console.log(this.invalidPassword);
    }}
    // );    
  // }

}
