import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './image.service';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
