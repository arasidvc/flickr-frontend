import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../gallery.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    private image;
    private selectedImage;
    private sub: Subscription;
    private imageId: string;

    constructor(private galleryService: GalleryService,
              private router: Router,
              private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.sub = this.route.params
           .subscribe(params => {
             this.imageId = params['id'];
             this.image = this.galleryService.getImageById(this.imageId)
                 .subscribe(image => {
                   this.image = image;
                   this.showSelectedImage(this.image.url);
                 });
           });
    }

    showSelectedImage(imageSource:string) {
        this.selectedImage = imageSource;
    }
}
