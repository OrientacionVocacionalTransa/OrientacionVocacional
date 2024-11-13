import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  // Lista de tarjetas con su información
  cards = [
    {
      title: 'MEDICINA',
      image: 'https://cdn-icons-png.flaticon.com/512/5783/5783292.png',
      description: 'La carrera de Medicina forma a profesionales para prevenir, diagnosticar y tratar enfermedades, mejorando la salud y calidad de vida de las personas.',
      city: ['piura']
    },
    {
      title: 'INGENIERÍA',
      image: 'https://www.un.edu.mx/wp-content/uploads/2023/03/Universidad-del-Norte-Conclusion-2.png', 
      description: 'La carrera de Ingeniería forma a profesionales que diseñan y optimizan soluciones tecnológicas para diversos sectores, impulsando el desarrollo.',
      city: ['trujillo']
    },
    {
      title: 'DERECHO',
      image: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-law-books-clipart-cartoon-justice-scale-and-books-for-law-illustration-png-image_11091471.png',
      description: 'La carrera de Derecho prepara a profesionales para asesorar y representar en temas legales, defendiendo derechos y garantizando el cumplimiento de las leyes.',
      city: ['trujillo']
    },
    {
      title: 'PSICOLOGÍA',
      image: 'https://cdn-icons-png.flaticon.com/512/6432/6432769.png',
      description: 'La carrera de Psicología forma a profesionales para comprender y mejorar el comportamiento humano, ayudando en la salud mental y bienestar emocional.',
      city: ['piura']
    },
    {
      title: 'ADMINISTRACIÓN',
      image: 'https://universidadalnus.com/wp-content/uploads/2022/04/Universidad-Alnus-Que-puede-impedir-el-cambio.png', 
      description: 'La carrera de Administración prepara a profesionales para gestionar recursos y tomar decisiones estratégicas, impulsando el crecimiento de las organizaciones.',
      city: ['trujillo', 'piura']
    },
    {
      title: 'CONTABILIDAD',
      image: 'https://plan.cr/wp-content/uploads/plan-contabilidad-ico.png',
      description: 'La carrera de Contabilidad capacita a profesionales para analizar y gestionar la información financiera, asegurando la estabilidad económica de empresas.',
      city: ['piura']
    }
  ];

  // Tarjetas filtradas que se muestran en la vista
  filteredCards = [...this.cards];

  // Método para filtrar según la ciudad seleccionada
  onCityChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Convertimos el event.target a HTMLSelectElement
    const city = selectElement.value; // Obtenemos el valor seleccionado
  
    console.log('Ciudad seleccionada:', city);  // Verificar qué ciudad se selecciona
  
    if (city === 'all') {
      this.filteredCards = [...this.cards]; // Mostrar todas las tarjetas
    } else {
      this.filteredCards = this.cards.filter(card => card.city.includes(city));
    }
  
    console.log('Tarjetas filtradas:', this.filteredCards);  // Mostrar las tarjetas filtradas
  }
}