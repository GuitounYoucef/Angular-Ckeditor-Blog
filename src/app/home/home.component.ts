import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/Post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  posts:Post[];
  constructor(private postservice:PostsService,private router:Router) { }

  ngOnInit(): void {
    this.getPosts();
  }
  private getPosts(){
    this.postservice.getPostsList().subscribe(data =>{
      this.posts = data;
    
    });
  }
  getPostById(id : number){   
      window.open('statement/'+id, '_blank');  
  }

}
