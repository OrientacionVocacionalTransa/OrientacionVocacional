import { Routes } from '@angular/router';
import { PagoComponent } from './pago/pago.component'; 
import { PlanesComponent } from './planes/planes.component';
import { PerfilestudianteComponent } from './perfilestudiante/perfilestudiante.component';
import { PerfilasesorComponent } from './perfilasesor/perfilasesor.component';

export const routes: Routes = [
  { path: '', component: PagoComponent }, 
  {path: 'planes', component: PlanesComponent},
  {path: 'perfilestudiante', component: PerfilestudianteComponent},
  {path: 'perfilasesor', component: PerfilasesorComponent},

  { path: '**', redirectTo: '' } 
];
