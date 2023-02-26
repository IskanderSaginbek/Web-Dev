import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../app/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  i = 0;
  product: Product | undefined;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.i = productIdFromRoute;

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  slide(dir : number) {
    if (dir) {
      products[this.i].image++;
      if (products[this.i].image > 2) products[this.i].image = 0;
    }
    else {
      products[this.i].image--;
      if (products[this.i].image < 0) products[this.i].image = 2;
    }
  }

}
