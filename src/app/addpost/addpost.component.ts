import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CKEditor5} from '@ckeditor/ckeditor5-angular';
import ClassicEditor from 'ckeditor5-build-classic-simple-upload-adapter-image-resize';
import { Post } from '../models/Post';
import { PostsService} from '../services/posts.service';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})

export class AddpostComponent implements OnInit {
  selectedFile:File=null;
  mainImageURL:string;
  post: Post = new Post();
  
  constructor(private postservice:PostsService, private router:Router,private httpClient:HttpClient ) { }
  public Editor =  ClassicEditor;

BACKEND_URLIMG:string = 'http://localhost:8080/uploadFile';
public html:string;
 
 config: CKEditor5.Config = {
      image: {
      // image plugin config
      toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
      styles: [
        'full',
        'alignLeft',
        'alignRight'
      ]
    },
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: this.BACKEND_URLIMG,
      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
       "X-CSRF-TOKEN": "CSFR-Token",
        Authorization: "Bearer <JSON Web Token>"
      }
    }
  };

ngOnInit(): void {
    this.post.user_id=1;
    this.post.statement
}
savePost(){
      this.postservice.createPost(this.post).subscribe(data =>
        {console.log(data);
          this.router.navigate(['/home'])
           } 
        );
  }

  onSubmit(){
    this.savePost();
 
  }
  
  OnFileSelected(event){
    this.selectedFile= <File>event.target.files[0];
    this.uploadMainImage();

  }
  uploadMainImage(){
    const imageFile=new FormData;
    imageFile.append("upload",this.selectedFile,this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/uploadFile',imageFile, { observe: 'response' }).
    subscribe((response) => {
      if (response.status === 200) {
        console.log(response.body['url']);        
         this.post.imageLink=response.body['url'];
      } else {
        console.log('Image not uploaded successfully');
      }
    });
  }
}
