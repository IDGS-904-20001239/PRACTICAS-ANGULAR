import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DistanciaModule } from './distancia/distancia/distancia.module';
import { ResistenciasModule } from './resistencias/resistencia/resistencias.module';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { AppRoutingModule } from './app-routing.module';
import { PizzasComponent } from './formularios/pizzas/pizzas.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzasComponent,
  ],
  imports: [
    DistanciaModule,
    ResistenciasModule,
    CinepolisModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
