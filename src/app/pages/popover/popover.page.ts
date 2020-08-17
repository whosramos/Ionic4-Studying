import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  
  passedId = null;
  constructor(
    private navParams:NavParams,
    private popCtrl:PopoverController
  ) { }

  ngOnInit() {
    this.passedId = this.navParams.get('custom_id')
  }

  close(){
    this.popCtrl.dismiss()
  }

}
