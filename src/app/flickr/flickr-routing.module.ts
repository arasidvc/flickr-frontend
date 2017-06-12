import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlickrComponent} from './flickr.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageComponent} from './gallery/image/image.component';

const routes: Routes = [{ path: '', component: FlickrComponent, children: [
  {path: '', component: GalleryComponent},
  {path: ':id', component: ImageComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlickrRoutingModule { }
