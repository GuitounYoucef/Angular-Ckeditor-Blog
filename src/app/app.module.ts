import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PostStatementComponent } from './post-statement/post-statement.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {   path: 'home', component: HomeComponent},
  { path: 'addpost', component: AddpostComponent},
  { path: 'statement/:id', component: PostStatementComponent},
  

  
];
@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    HomeComponent,
    PostStatementComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    CKEditorModule,
    MDBBootstrapModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
