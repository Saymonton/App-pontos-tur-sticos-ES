import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedradacebolaPageRoutingModule } from './pedradacebola-routing.module';

import { PedradacebolaPage } from './pedradacebola.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedradacebolaPageRoutingModule
  ],
  declarations: [PedradacebolaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PedradacebolaPageModule {}
