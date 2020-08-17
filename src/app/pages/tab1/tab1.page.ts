import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: { zip: 48149, city: 'Muenster', country: 'DE' },
    interests: [ 'Ionic', 'Angular', 'YouTube', 'Sports' ]
  };

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }
  
  ngOnInit() {}

  showData() {
    this.dataService.setData(42, this.user);
    this.router.navigateByUrl('/details/42');
  }

}
