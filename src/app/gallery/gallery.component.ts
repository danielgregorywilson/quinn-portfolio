import { Component, OnInit } from '@angular/core';
import {GalleryService, imageData} from '../gallery.service';
import { Lightbox } from 'ngx-lightbox';
import { NgxMasonryOptions } from 'ngx-masonry';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  galleryContent: imageData[] | null = null;

  categories: Category[] = [
    {value: '', viewValue: 'None'},
    {value: 'graphic_design', viewValue: 'Graphic Design'},
    {value: 'fine_art', viewValue: 'Fine Art'},
    {value: 'illustration', viewValue: 'Illustration'},
    {value: 'photography', viewValue: 'Photography'}
  ]

  selectedCategoryValue: string = ''

  public masonryOptions: NgxMasonryOptions = {
    fitWidth: true
  };

  constructor(public galleryManager: GalleryService, private _lightbox: Lightbox) {
    this.filterAndSortImages();
    console.log(this.galleryContent);
  }

  filterAndSortImages() {
      // .filter(image => image.pieceTitle.toLowerCase().includes(query))
      // .sort((a, b) => a.pieceTitle === b.pieceTitle ? 0 : a.pieceTitle < b.pieceTitle ? -1 : 1);

    let images = this.galleryManager.images
    if (this.selectedCategoryValue) {
      images = images.filter(image => image.broadCategory == this.selectedCategoryValue)
    }
    
    this.galleryContent = images
  }

  openLightbox(index: number): void {
    // Open lightbox
    this._lightbox.open(this.galleryContent, index)
  }

  ngOnInit() {
  }

}
