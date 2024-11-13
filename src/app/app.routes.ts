import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { AsesoriaEstudianteComponent } from './asesoria-estudiante/asesoria-estudiante.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Página principal
  {path:'pregunta', component: PreguntaComponent},
  {path:'asesoria', component: AsesoriaEstudianteComponent},
  { path: '**', redirectTo: '' } // Redirección por defecto
];