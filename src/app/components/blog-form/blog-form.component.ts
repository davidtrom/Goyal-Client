import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  addBlogForm: FormGroup;
  formNotValid: boolean;

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
    if(this.addBlogForm.valid){
      let blogPost: BlogPost = new BlogPost(
        null,
        this.addBlogForm.controls.title.value,
        this.addBlogForm.controls.description.value,
        this.addBlogForm.controls.link.value
      );

      this.blogPostService.createBlogPost(blogPost).subscribe(
        data => {
          if(data !== null){
            alert('Your Blog Post has been saved');
          }
          else{
            alert('There was an error saving your Blog Post.  Please try again.');
          }
          this.addBlogForm.reset();
        }
      );
    }
    else{
      this.addBlogForm.markAllAsTouched();
      this.formNotValid = true;
    }
  }

  signOut(){
    this.blogPostService.logout();
    this.router.navigate(['/']);
  }

}
