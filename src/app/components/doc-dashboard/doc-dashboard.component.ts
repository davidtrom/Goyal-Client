import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { BlogPostService } from 'src/app/service/blog-post.service';

@Component({
  selector: 'app-doc-dashboard',
  templateUrl: './doc-dashboard.component.html',
  styleUrls: ['./doc-dashboard.component.css']
})
export class DocDashboardComponent implements OnInit {
  
  showBlogPosts: boolean = false;


  constructor(private router: Router, private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    if(localStorage.getItem("drLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }

    this.designService.updateDesignBlockStatus(true);
  }

  showPosts(): boolean{
      if(this.showBlogPosts === true){
        this.showBlogPosts = false;
      }
      else{
        this.showBlogPosts = true;
      }
      return this.showBlogPosts;
  }

  signOut(){
    this.blogPostService.logout();
    this.router.navigate(['/']);
  }
}


