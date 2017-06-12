import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpService } from '../http.service';

@Injectable()
export class GalleryService {
    constructor(private http: HttpService) {
    }
    
    getImages() {
        //return this.http.get('./assets/data/img-gallery.json')
         return this.http.get(`${environment.apiUrl}photos`)
         .toPromise()
            .then(res => {
                const responce = res.json();
                return responce.data.images;
            });
    }

    getImageById(imageId) {
        return this.http.get(`${environment.apiUrl}view-photo/${imageId}`)
            .map(res => {
                const responce = res.json();
                return responce.data;
            });
    }

}
