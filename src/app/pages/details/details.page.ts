import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;
 
  constructor(
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.data['special']) 
      this.data = this.route.snapshot.data['special'];
  }

}
