import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAllPosts() {
    throw new Error('Method not implemented.');
  }
  
   constructor(
    private http: HttpClient
    ) { }
    getAllPost():Observable<Post[]> {
      return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
    getPostById(id:number){
      return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
}
