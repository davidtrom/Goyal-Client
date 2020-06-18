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

  constructor(private router: Router, private fb: FormBuilder, private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);

    this.loginForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  // get password(){
  //   return this.loginForm.get('password');
  // }

  
  get form() { return this.loginForm.controls; }
  
  onSubmit(): void{  
    console.log("inside onSubmit ", this.loginForm.controls.password.value);  
    this.blogPostService.verifyDoctor(this.loginForm.controls.password.value).subscribe(
      data => {console.log("password verified? ", data);
    if(data){
      this.router.navigate(['/blog-post']);
    }}
    );    
  }

}
