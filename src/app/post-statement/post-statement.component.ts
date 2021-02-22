import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/Post';
import { PostsService} from '../services/posts.service';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-post-statement',
  styleUrls: ['./post-statement.component.css'],
  templateUrl: './post-statement.component.html'
  
 

})
export class PostStatementComponent implements OnInit {
 
  constructor(private postservice:PostsService, private router:Router,private activaterouter:ActivatedRoute,private sanitizer: DomSanitizer) { }
  id :number;
  post : Post =new Post();
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id'] ;
    this.postservice.getPostById(this.id).subscribe( data =>{
     this.post=data;
     let stat=document.querySelector('.statement');
     stat.innerHTML=this.post.statement;
    })    
  }

}
