import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  //Tabs e seus SubDominios
  //Menu -- Os SubDominios de menu devem ser registrados em 'menu.module.ts' e 'menu.page.ts'
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },

  {
    path: 'details/:id',
    resolve: { special: DataResolverService },
    loadChildren: './pages/details/details.module#DetailsPageModule'
  },
  { 
    path: 'facts/:id', 
    loadChildren: './pages/facts/facts.module#FactsPageModule' 
  },
  { path: 'accordion-list', loadChildren: './pages/accordion-list/accordion-list.module#AccordionListPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
