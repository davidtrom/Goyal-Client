import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { BlogPostService } from 'src/app/service/blog-post.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  editBlogForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    if(localStorage.getItem("drLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }

    this.designService.updateDesignBlockStatus(true);
    
  }

  get form() {
    return this.editBlogForm.controls;
  }

}
