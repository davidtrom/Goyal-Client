import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

  verifyDoctor(password:string) : Observable<boolean>{
    let reqData: Object = {"password": password};
    return this.http.post<boolean>(this.baseUrl+"/verify", reqData, this.httpOptions)
      .pipe(tap(data => {console.log("verified ", data),
        localStorage.setItem("isLoggedIn", "true"),
        localStorage.setItem("username", "DrGoyal"),
        catchError(this.handleError<boolean>('error verifying volunteer', null))
        // if(data != null){
          //this.isLoggedIn$.next(true);
          // sessionStorage.setItem('isLoggedIn', 'true')
        
    }));
  }

  getAllPosts() : Observable <BlogPost[]> {
    console.log("inside blog-post service: ", this.baseUrl+"/posts")
    return this.http.get<BlogPost[]>(this.baseUrl+"/posts", this.httpOptions)
    .pipe(tap(data => console.log('fetch posts', data)),
      catchError(this.handleError<BlogPost[]>('error geting blogs', null)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
