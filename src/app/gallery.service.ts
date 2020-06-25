import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {
  get images() {
    return images;
  }


  constructor() { }

}

// Just for inlcuding file paths
declare function require(filename: string): string;

const images: imageData[] = [
  {
    src: "../assets/images/design/LAP_business_card_back.png",
    thumbnail: {
      type: "flip-image",
      frontImagePath: "../assets/images/design/LAP_business_card_back_thumb.png",
      backImagePath: "../assets/images/design/LAP_business_card_front_thumb.png"
    },
    thumb: "../assets/images/design/LAP_business_card_back_thumb.png",
    "pieceTitle": "Light At Play Business Card",
    "broadCategory": "graphic_desgin",
    "specificType": "business_card",
    "qualityRating": 4,
    "creationDate": 2014,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/tuibSmallBlue.jpeg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/tuibSmallBlue_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Tangoed Up In Blues Logo",
    "broadCategory": "graphic_desgin",
    "specificType": "logo",
    "qualityRating": 4,
    "creationDate": 2015,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/ruth_logo_standalone_fordark.svg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/ruth_logo_standalone_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Camilla Kaplan Logo",
    "broadCategory": "graphic_desgin",
    "specificType": "logo",
    "qualityRating": 4,
    "creationDate": 2016,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/magical_seams_logo.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/magical_seams_logo_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Magical Seams Logo",
    "broadCategory": "graphic_desgin",
    "specificType": "logo",
    "qualityRating": 5,
    "creationDate": 2018,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/cjllogo.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/cjllogo_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Climate Justice League Logo",
    "broadCategory": "graphic_desgin",
    "specificType": "logo",
    "qualityRating": 2,
    "creationDate": 2010,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/kaelidescope_poster.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/kaelidescope_poster_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Kaleidoscope Poster",
    "broadCategory": "graphic_desgin",
    "specificType": "poster",
    "qualityRating": 2,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/winterFormalPoster.pdf",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/winterFormalPoster_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Crossroads Winter Formal",
    "broadCategory": "graphic_desgin",
    "specificType": "poster",
    "qualityRating": 3,
    "creationDate": 2017,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/winterformalTicket.pdf",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/winterformalTicket_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Crossroads Winter Formal",
    "broadCategory": "graphic_desgin",
    "specificType": "ticket",
    "qualityRating": 3,
    "creationDate": 2017,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/why_go_renewable.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/why_go_renewable_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Why Go Renewable",
    "broadCategory": "graphic_desgin",
    "specificType": "magazine_article",
    "qualityRating": 4,
    "creationDate": 2013,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  // {
  //   src: "../assets/images/design/LightAtPlay-2014-11-Full_Logo.png",
  //   thumbnailfilePth: ""../assets/images/design/LightAtPlay-2014-11-Full_Logo_thumb.png",
  //   "pieceTitle": "Light at Play Banner Logo",
  //   "broadCategory": "graphic_desgin",
  // "specificType": "logo",
  // "qualityRating": 4,
  // "creationDate": 2014,
  // "active": true,
  // "idealWidth": "",
  // "idealHeight": "",
  // "minWidth": "",
  // "maxWidth": "",
  // "caption": ""
  // },
  {
    src: "../assets/images/design/theWave.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/theWave_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "The Blue Wave",
    "broadCategory": "fine_art",
    "specificType": "quilt",
    "qualityRating": 5,
    "creationDate": 2016,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": "In 2016 a wave of progressive ideals - spearheaded by Bernie Sanders, a figurehead portentiously visited by a small finch at the podium during a visit to Oregon - crashed down into confusion and chaos. Amid the helplessness of that years end, it was vital to remeber that when a wave crashes down in froth and flare, it's energy is not lost, merely transferred under the water to take on a new form, and rise again."
  },
  {
    src: "../assets/images/design/vector_self_portrait.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/vector_self_portrait_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Self Portrait in Vector",
    "broadCategory": "fine_art",
    "specificType": "digital_painting",
    "qualityRating": 3,
    "creationDate": 2013,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/wibbeldywobbldy.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/wibbeldywobbldy_thumb.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Wibbeldy Wobbeldy",
    "broadCategory": "fine_art",
    "specificType": "acrylic_painting",
    "qualityRating": 4,
    "creationDate": 2013,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/resolution.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/resolution_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Resolution",
    "broadCategory": "fine_art",
    "specificType": "digital_painting",
    "qualityRating": 4,
    "creationDate": 2016,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": "As the ordeal of birth fades from the forefront, and the chaos and novelty of a newly formed family begins to subside, a tiny human resolves out of the rippling dots of the sickbed's all to familar pillows"
  },
  {
    src: "../assets/images/design/empty.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/empty_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Empty",
    "broadCategory": "fine_art",
    "specificType": "digital_painting",
    "qualityRating": 3,
    "creationDate": 2016,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/ginger_tea.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/ginger_tea_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Ginger Tea",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 4,
    "creationDate": 2013,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/imagine.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/imagine_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Imagine",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 4,
    "creationDate": 2012,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/disollution.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/disollution_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Dissolution",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 2,
    "creationDate": 2012,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/the_night_train.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/the_night_train_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "The Night Train",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 3,
    "creationDate": 2018,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/tithonia.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/tithonia_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Tithonia",
    "broadCategory": "fine_art",
    "specificType": "watercolor_painting",
    "qualityRating": 4,
    "creationDate": 2018,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/sunset_squirrel.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/sunset_squirrel_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Sunset",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 3,
    "creationDate": 2018,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/oregon_boat.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/oregon_boat_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Boat",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 3,
    "creationDate": 2017,
    "active": false,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/peacock_sparrow.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/peacock_sparrow_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Peacock Sparrow",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 4,
    "creationDate": 2018,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/daniel3.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/daniel3_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Daniel",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 4,
    "creationDate": 2018,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/art/boat.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/art/boat_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Boat",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 4,
    "creationDate": 2017,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/renewCycle.png",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/renewCycle_thumb.png"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Renewcycle",
    "broadCategory": "illustration",
    "specificType": "digital_illustration",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/design/pisgahSilo.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/design/pisgahSilo_thumb.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Boat",
    "broadCategory": "illustration",
    "specificType": "watercolor_painting",
    "qualityRating": 4,
    "creationDate": 2013,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized1.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized1.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Quieres Jugar?",
    "broadCategory": "photography",
    "specificType": "human_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized2.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized2.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Not a Sea Anemone",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized3.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized3.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Little Green",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized4.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized4.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Suspiscious",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized5.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized5.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized6.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized6.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized7.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized7.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "Into The Light",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized8.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized8.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "A Little Ruffled",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": true,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized9.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized9.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": false,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized10.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized10.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": false,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
  {
    src: "../assets/images/photography/full_size_photo_optimized11.jpg",
    thumbnail: {
      type: "image",
      imagePath: "../assets/images/photography/thumb_photo_optimized11.jpg"
    },
    thumb: "../assets/images/design/tuibSmallBlue_thumb.png",
    "pieceTitle": "",
    "broadCategory": "photography",
    "specificType": "nature_photography",
    "qualityRating": 4,
    "creationDate": 2011,
    "active": false,
    "idealWidth": "",
    "idealHeight": "",
    "minWidth": "",
    "maxWidth": "",
    "caption": ""
  },
]

interface ImageThumbnail {
  type: "image";
  imagePath: string;
}

interface FlipImageThumbnail {
  type: "flip-image";
  frontImagePath: string;
  backImagePath: string;
}

export interface imageData {
  src: string;
  thumbnail: ImageThumbnail | FlipImageThumbnail;
  thumb: string
  pieceTitle: string;
  broadCategory: string;
  specificType: string;
  qualityRating: number;
  creationDate: number;
  active: boolean;
  caption: string;
  maxWidth: string;
  minWidth: string;
  idealHeight: string;
  idealWidth: string;
}
