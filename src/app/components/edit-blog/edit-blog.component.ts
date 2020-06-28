import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  editBlogForm: FormGroup;
  //blogPostToEdit: BlogPost;
  formNotValid: boolean;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private designService: DesignBlockService, private blogPostService: BlogPostService) {}

  ngOnInit() {

    this.fetchData();

    if(localStorage.getItem("drLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }

    this.designService.updateDesignBlockStatus(true);
  }

  async fetchData(){
    let id = +this.route.snapshot.paramMap.get('id');
    var data = await this.blogPostService.getBlogPostById(id).toPromise(); //returns a json
    //this.blogPostToEdit = data; //assign your variable to it
    this.editBlogForm = this.createFormGroup(data);
    return this.editBlogForm;
  }

  
  createFormGroup(data: BlogPost){
    return new FormGroup({
      title: new FormControl(data.title, [Validators.required]),
      description: new FormControl(data.description, [Validators.required]),
      link: new FormControl(data.link, [Validators.required])
    })
  }


  get form() {
    return this.editBlogForm.controls;
  }

  onSubmit(){
    let id = +this.route.snapshot.paramMap.get('id');
    if(this.editBlogForm.valid){
      this.blogPostService.updateBlogPost(id, this.editBlogForm.controls.title.value,this.editBlogForm.controls.description.value, this.editBlogForm.controls.link.value).subscribe(
        data => {
          if(data !== null){
            alert('Your Blog Post has been saved');
            this.router.navigate(['/doctor-blog'])
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
