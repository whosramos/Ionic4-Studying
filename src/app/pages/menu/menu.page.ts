import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'First Page with Tabs',
      url: '/menu/first'
    },
    {
      title: 'Second Page',
      url: '/menu/second'
    },
    {
      title: 'Third Page',
      url: '/menu/third'
    }
  ];
  
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
