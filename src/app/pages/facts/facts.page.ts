import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.page.html',
  styleUrls: ['./facts.page.scss'],
})
export class FactsPage implements OnInit {

  passedId = null
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
