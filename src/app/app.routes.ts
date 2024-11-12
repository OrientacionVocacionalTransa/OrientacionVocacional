import { Routes } from '@angular/router';
import { PagoComponent } from './pago/pago.component';
import { PlanesComponent } from './planes/planes.component';
import { PerfilestudianteComponent } from './perfilestudiante/perfilestudiante.component';
import { PerfilasesorComponent } from './perfilasesor/perfilasesor.component';
import {HistorialAsesorComponent} from "./historial-asesor/historial-asesor.component";
import {EEstudianteComponent} from "./e-estudiante/e-estudiante.component";
import {EAsesorComponent} from "./e-asesor/e-asesor.component";

export const routes: Routes = [
  { path: '', component: PagoComponent },
  {path: 'planes', component: PlanesComponent},
  {path: 'perfilestudiante', component: PerfilestudianteComponent},
  {path: 'perfilasesor', component: PerfilasesorComponent},
  {path: 'historial-asesor', component: HistorialAsesorComponent},
  {path: 'e-estudiante', component: EEstudianteComponent},
  {path: 'e-asesor', component: EAsesorComponent},

  { path: '**', redirectTo: '' }
];
