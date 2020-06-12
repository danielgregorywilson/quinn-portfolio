import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { GalleryService } from './gallery.service';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

import { ImageThumbnailPipe } from './image-thumbnail.pipe';

import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GalleryComponent,
    ImageThumbnailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
