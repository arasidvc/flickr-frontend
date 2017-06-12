import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flickr',
  template: `
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class FlickrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
