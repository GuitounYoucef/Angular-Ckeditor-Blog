import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {HttpClientInterceptor} from './http-client-interceptor';

import { PostStatementComponent } from './post-statement/post-statement.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {   path: 'login', component: LoginComponent},
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
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NgbModule,
    CKEditorModule,
    MDBBootstrapModule.forRoot()
   
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
