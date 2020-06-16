import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from 'src/app/service/blog-post.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  constructor(private router: Router, private blogPostService: BlogPostService) { }

  ngOnInit() {
    if(localStorage.getItem("isLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }
  }

}
