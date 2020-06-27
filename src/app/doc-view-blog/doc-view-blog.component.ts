import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from '../service/design-block.service';
import { BlogPostService } from '../service/blog-post.service';

@Component({
  selector: 'app-doc-view-blog',
  templateUrl: './doc-view-blog.component.html',
  styleUrls: ['./doc-view-blog.component.css']
})
export class DocViewBlogComponent implements OnInit {

  blogPosts: any[]

  constructor(private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);
    this.getBlogPosts();
  }

  getBlogPosts(){
    this.blogPostService.getAllPosts().subscribe(data => {
      console.log(data);
      this.blogPosts = data;
    });
  }

}
