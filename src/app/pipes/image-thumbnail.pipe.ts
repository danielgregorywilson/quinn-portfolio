import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform a filename to a thumbnail filename
 * Takes a filename string
 * Usage:
 *   value | thumb
 * Example:
 *   {{ boat.png | thumb }}
 *   formats to: boat_thumb.png
*/
@Pipe({name: 'thumb'})
export class ImageThumbnail implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\.[^.]+)$/, "_thumb.png")
  }
}