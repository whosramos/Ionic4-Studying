import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  
  value = 0;

  constructor(
    private nav : NavController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}
  
  goFacts(){
    // this.nav.navigateForward('/facts/')
    this.nav.navigateForward(`/facts/${this.value}`)
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'custom_id': this.value,
      }
    });
    modal.present();
  }

  async openPopover(event: Event){
    const pop = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {
        'custom_id': this.value,
      },
      event: event
    });
    pop.present();
  }
}
