import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})

export class ThirdPage implements OnInit {

  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(
    private nav : NavController,
    private router: Router, 
    private cartService: CartService
    ) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    //this.nav.navigateForward('/cart')
    //this.router.navigateByUrl('/cart');
    this.router.navigate(['cart'])
    
  }
}
