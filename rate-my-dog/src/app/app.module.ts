import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import {HttpClientModule} from '@angular/common/http';
import { HeartRatingComponent } from './heart-rating/heart-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    HeartRatingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
