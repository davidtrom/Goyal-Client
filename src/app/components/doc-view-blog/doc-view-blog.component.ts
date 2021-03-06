import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from '../../service/design-block.service';
import { BlogPostService } from '../../service/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-view-blog',
  templateUrl: './doc-view-blog.component.html',
  styleUrls: ['./doc-view-blog.component.css']
})
export class DocViewBlogComponent implements OnInit {

  blogPosts: any[]
  noBlog: boolean =null;


  constructor(private router: Router, private designService: DesignBlockService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    if(localStorage.getItem("drLoggedIn") !== "true"){
      this.router.navigate(['/']);
    }

    this.designService.updateDesignBlockStatus(true);
    this.getBlogPosts();
  }

  async getBlogPosts(){
    var data = await this.blogPostService.getAllPosts().toPromise();
    // this.blogPostService.getAllPosts().subscribe(data => {
    if(data.length === 0){
      this.noBlog = true;
    }
    else{
      this.blogPosts = data;
    }
  }

  signOut(){
    this.blogPostService.logout();
    this.router.navigate(['/']);
  }

  deleteBlog(id: number){
    this.blogPostService.deletePost(id).subscribe(data => {
      console.log("Blog Post deleted ", data)
      if(data){
        alert('This Blog Post has been deleted');
        location.reload();
      }
      else{
        alert('There was an error deleting this Blog Post. Please try again');
      }
    }); 
  }

  // editBlog(id: number){
  //   this.blogPostService.getBlogPostById(id).subscribe(data => {
  //     console.log(data);
  //   });
  //   this.router.navigate(['/edit-blog', blogPost.id]);
  // }

}
