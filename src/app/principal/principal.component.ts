import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  // Lista de tarjetas con su información
  cards = [
    {
      title: 'MEDICINA',
      image: 'assets/images/medicina.jpg',
      description: 'La carrera de Medicina forma a profesionales para prevenir, diagnosticar y tratar enfermedades, mejorando la salud y calidad de vida de las personas.',
      city: 'piura'
    },
    {
      title: 'INGENIERÍA',
      image: 'assets/images/ingenieria.jpg',
      description: 'La carrera de Ingeniería forma a profesionales que diseñan y optimizan soluciones tecnológicas para diversos sectores, impulsando el desarrollo.',
      city: 'trujillo'
    },
    {
      title: 'DERECHO',
      image: 'assets/images/derecho.jpg',
      description: 'La carrera de Derecho prepara a profesionales para asesorar y representar en temas legales, defendiendo derechos y garantizando el cumplimiento de las leyes.',
      city: 'trujillo'
    },
    {
      title: 'PSICOLOGÍA',
      image: 'assets/images/psicologia.jpg',
      description: 'La carrera de Psicología forma a profesionales para comprender y mejorar el comportamiento humano, ayudando en la salud mental y bienestar emocional.',
      city: 'piura'
    },
    {
      title: 'ADMINISTRACIÓN',
      image: 'assets/images/administracion.jpg',
      description: 'La carrera de Administración prepara a profesionales para gestionar recursos y tomar decisiones estratégicas, impulsando el crecimiento de las organizaciones.',
      city: 'trujillo piura'
    },
    {
      title: 'CONTABILIDAD',
      image: 'assets/images/contabilidad.jpg',
      description: 'La carrera de Contabilidad capacita a profesionales para analizar y gestionar la información financiera, asegurando la estabilidad económica de empresas.',
      city: 'piura'
    }
  ];

  // Tarjetas filtradas que se muestran en la vista
  filteredCards = [...this.cards];

  // Método para filtrar según la ciudad seleccionada
  onCityChange(city: string) {
    if (city === 'all') {
      this.filteredCards = [...this.cards]; // Mostrar todas las tarjetas
    } else {
      this.filteredCards = this.cards.filter(card => card.city.includes(city));
    }
  }
}
