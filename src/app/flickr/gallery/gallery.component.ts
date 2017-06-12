import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private images: Array<any> = [];

  constructor(private galleryService: GalleryService) {
    this.images = [];
  }

  ngOnInit() {
    this.galleryService.getImages()
        .then(images => {
          this.images = images;
        });
  }

}
