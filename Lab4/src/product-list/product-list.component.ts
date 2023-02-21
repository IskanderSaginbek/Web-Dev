import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  share(link : string) {
    window.open("https://t.me/share/url?url="+link+"&text=Look what I found, dude","_blank");
  }
  slide(dir : number, curimg : number) {
    if (dir) {
      products[curimg].image++;
      if (products[curimg].image > 2) products[curimg].image = 0;
    }
    else {
      products[curimg].image--;
      if (products[curimg].image < 0) products[curimg].image = 2;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
