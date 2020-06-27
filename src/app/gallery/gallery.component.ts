import { Component, OnInit } from '@angular/core';
import {GalleryService, imageData} from '../gallery.service';
import { Lightbox } from 'ngx-lightbox';
import { NgxMasonryOptions } from 'ngx-masonry';

interface Category {
  value: string;
  viewValue: string;
  types?: Array<Type>
}

interface Type {
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
    {value: 'graphic_design', viewValue: 'Graphic Design', types:[
      {value: '', viewValue: 'None'},
      {value: 'business_card', viewValue: 'Business Card'},
      {value: 'logo', viewValue: 'Logo'},
      {value: 'poster', viewValue: 'Poster'},
      {value: 'ticket', viewValue: 'Ticket'},
      {value: 'magazine_article', viewValue: 'Magazine Article'},
    ]},
    {value: 'fine_art', viewValue: 'Fine Art', types:[
      {value: '', viewValue: 'None'},
      {value: 'quilt', viewValue: 'Quilt'},
      {value: 'digital_painting', viewValue: 'Digital Painting'},
      {value: 'acrylic_painting', viewValue: 'Acrylic Painting'},
      {value: 'watercolor_painting', viewValue: 'Watercolor Painting'},
    ]},
    {value: 'illustration', viewValue: 'Illustration', types:[
      {value: '', viewValue: 'None'},
      {value: 'digital_illustration', viewValue: 'Digital Illustration'},
      {value: 'watercolor_painting', viewValue: 'Watercolor Painting'},
    ]},
    {value: 'photography', viewValue: 'Photography', types:[
      {value: '', viewValue: 'None'},
      {value: 'human_photography', viewValue: 'Human Photography'},
      {value: 'nature_photography', viewValue: 'Nature Photography'},
    ]}
  ]

  selectedCategoryValue: string = ''
  selectedTypeValue: string = ''
  currentCategoryTypes: Array<Type> = null

  // masonryAnimations = {
  //   show: [
  //     style({opacity: 0}),
  //     animate('400ms ease-in', style({opacity: 1})),
  //   ],
  //   hide: [
  //     style({opacity: '*'}),
  //     animate('400ms ease-in', style({opacity: 0})),
  //   ]
  // }

  public masonryOptions: NgxMasonryOptions = {
    fitWidth: true,
    // animations: {
    //   show: [
    //     style({opacity: 0}),
    //     animate('400ms ease-in', style({opacity: 1})),
    //   ],
    //   hide: [
    //     style({opacity: '*'}),
    //     animate('400ms ease-in', style({opacity: 0})),
    //   ]
    // }
  };

  constructor(public galleryManager: GalleryService, private _lightbox: Lightbox) {
    this.filterAndSortImages();
    console.log(this.galleryContent);
  }

  onSetCategory(event) {
    const categoryValue = event.value
    this.selectedTypeValue = ''
    this.currentCategoryTypes = this.categories.filter(category => category.value == categoryValue)[0].types
    this.filterAndSortImages()
  }

  filterAndSortImages() {
      // .filter(image => image.pieceTitle.toLowerCase().includes(query))
      // .sort((a, b) => a.pieceTitle === b.pieceTitle ? 0 : a.pieceTitle < b.pieceTitle ? -1 : 1);

    let images = this.galleryManager.images
    if (this.selectedCategoryValue) {
      images = images.filter(image => image.broadCategory == this.selectedCategoryValue)
      if (this.selectedTypeValue) {
        images = images.filter(image => image.specificType == this.selectedTypeValue)
      }
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
