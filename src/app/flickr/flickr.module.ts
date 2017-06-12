import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlickrRoutingModule } from './flickr-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './gallery/image/image.component';
import {FlickrComponent} from './flickr.component';

@NgModule({
  imports: [
    CommonModule,
    FlickrRoutingModule
  ],
  declarations: [ GalleryComponent, ImageComponent, FlickrComponent]
})
export class FlickrModule { }
