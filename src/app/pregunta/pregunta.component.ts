import { Component } from '@angular/core';

@Component({
  selector: 'app-test-vocacional',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent {
  preguntaActual: number = 1;
  totalPreguntas: number = 30;

  avanzarPregunta() {
    if (this.preguntaActual < this.totalPreguntas) {
      this.preguntaActual++;
    }
  }

  retrocederPregunta() {
    if (this.preguntaActual > 1) {
      this.preguntaActual--;
    }
  }
}