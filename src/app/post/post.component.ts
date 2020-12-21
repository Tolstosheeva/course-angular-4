import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private  router: Router,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.dataService.getPostById(id).subscribe((res)=>{
      this.post = res;
    })
  }
  backTo() {
    this.router.navigate(['blog']);
  }
  }