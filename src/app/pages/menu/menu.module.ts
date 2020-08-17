import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'first', loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
      { path: 'second', loadChildren: '../second/second.module#SecondPageModule' },
      { path: 'second/facts', loadChildren: '../details/details.module#DetailsPageModule'},
      { path: 'third', loadChildren: '../third/third.module#ThirdPageModule' },
      { path: 'third/cart', loadChildren: '../third/third.module#ThirdPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
