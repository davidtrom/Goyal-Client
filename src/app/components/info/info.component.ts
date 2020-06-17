import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from 'src/app/service/design-block.service';
import { BlogPostService } from 'src/app/service/blog-post.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  blogPosts: any[];
  noBlog: boolean;


  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);
    this.getBlogPosts();
  }

  getBlogPosts(){
    this.blogPostService.getAllPosts().subscribe(data => {
      console.log(data);
      this.blogPosts = data;
      if(this.blogPosts.length === 0){
        this.noBlog = true;
      }
      else {this.noBlog = false;}
    });
  }

}
