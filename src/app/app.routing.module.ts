import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';


const routes: Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'CinepolisComponent',component:CinepolisComponent},
    {path: 'DistanciaComponent',component:DistanciaComponent},
    {path: 'ResistenciaComponent',component:ResistenciasComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}