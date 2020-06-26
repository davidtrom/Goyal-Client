import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  addBlogForm: FormGroup;

  constructor(private designService: DesignBlockService, private router: Router, private blogPostService: BlogPostService, private fb: FormBuilder) { }

  ngOnInit() {
    if(localStorage.getItem("drLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }

    this.designService.updateDesignBlockStatus(true);

    this.addBlogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  get form() { return this.addBlogForm.controls; }

  onSubmit(){
    
  }

  signOut(){
    this.blogPostService.logout();
    this.router.navigate(['/']);
  }

}
