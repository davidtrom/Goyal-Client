import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  editBlogForm: FormGroup;
  blogPostToEdit: BlogPost;
  formNotValid: boolean;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private designService: DesignBlockService, private blogPostService: BlogPostService) {}

  ngOnInit() {

    if(localStorage.getItem("drLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }

    this.blogPostService.getCurrentBlogPost().subscribe(data => {
      console.log("data in component: ", data);
      this.blogPostToEdit = data;}
    );

    console.log(this.blogPostToEdit);
    
    this.editBlogForm = this.fb.group({
      title: [this.blogPostToEdit.title, Validators.required],
      description: [this.blogPostToEdit.description, Validators.required],
      link: [this.blogPostToEdit.link, Validators.required]
    });

    this.designService.updateDesignBlockStatus(true);
  }

  get form() {
    return this.editBlogForm.controls;
  }

  onSubmit(){
    if(this.editBlogForm.valid){
      this.blogPostService.updateBlogPost(this.blogPostToEdit.id, this.editBlogForm.controls.title.value,this.editBlogForm.controls.description.value, this.editBlogForm.controls.link.value).subscribe(
        data => {
          if(data !== null){
            alert('Your Blog Post has been saved');
            this.router.navigate(['/doctor-dashboard'])
          }
          else{
            alert('There was an error saving your Blog Post.  Please try again.');
          }
          this.editBlogForm.reset();
          this.formNotValid = false;
        }
      );
    }
    else{
      this.editBlogForm.markAllAsTouched();
      this.formNotValid = true;
    }
  }

}
