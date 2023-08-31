import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { PrimeModule } from '../prime/prime.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomeViewComponent, CardComponent],
  imports: [CommonModule, HomeRoutingModule, PrimeModule],
})
export class HomeModule {}
