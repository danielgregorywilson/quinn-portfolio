import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { ContactComponent } from './contact/contact.component';

import { ImageThumbnail } from './pipes/image-thumbnail.pipe';
import { LightboxModule } from 'ngx-lightbox';
import { NgxMasonryModule } from 'ngx-masonry';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GalleryComponent,
    ImageThumbnail
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LightboxModule,
    NgxMasonryModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
