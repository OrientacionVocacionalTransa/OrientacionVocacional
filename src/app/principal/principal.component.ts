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
      image: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Ft4RtQ%2FMAGRE2t4RtQ%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAGo707pChYlWfOezi06QJ1-Cmq2kO5196wG721fyf2YT&exp=1726723436&osig=AAAAAAAAAAAAAAAAAAAAAF0H-NqSQeWYxn177XfBI5_AvjwvHLwrxf-Y8mZINErK&signer=media-rpc&x-canva-quality=thumbnail',
      description: 'La carrera de Medicina forma a profesionales para prevenir, diagnosticar y tratar enfermedades, mejorando la salud y calidad de vida de las personas.',
      city: ['piura']
    },
    {
      title: 'INGENIERÍA',
      image: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FeX_Kc%2FMAGRE9eX_Kc%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAANhqkAP0IkoeigWa4CEV_ZPt-2yYffGPwszX3yfulyXQ&exp=1726722198&osig=AAAAAAAAAAAAAAAAAAAAAOYo2YINK0BVkxK5qfjg-OAKUWYmyKAkj8FjpkfBYatb&signer=media-rpc&x-canva-quality=thumbnail', 
      description: 'La carrera de Ingeniería forma a profesionales que diseñan y optimizan soluciones tecnológicas para diversos sectores, impulsando el desarrollo.',
      city: ['trujillo']
    },
    {
      title: 'DERECHO',
      image: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FowUVA%2FMAGRE7owUVA%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALYMrhsM8KFFXWfGUEXKxzEIrT-xyUxLdLnE0q0Ry2LP&exp=1726720544&osig=AAAAAAAAAAAAAAAAAAAAAD26MFRixM18AgzmiB9bYfVlB0SJD5d1Ew9UgtCJobIJ&signer=media-rpc&x-canva-quality=thumbnail',
      description: 'La carrera de Derecho prepara a profesionales para asesorar y representar en temas legales, defendiendo derechos y garantizando el cumplimiento de las leyes.',
      city: ['trujillo']
    },
    {
      title: 'PSICOLOGÍA',
      image: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F0tjOA%2FMAGRE50tjOA%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAPDmwfZN4dUcx4JFVIwnV1pZUOEjcGLyfWG8Nzznw8ZY&exp=1726722185&osig=AAAAAAAAAAAAAAAAAAAAAFGtPsgDotMVwfi6iUmms8wKWrtSunXoEy7QkniFGw49&signer=media-rpc&x-canva-quality=thumbnail',
      description: 'La carrera de Psicología forma a profesionales para comprender y mejorar el comportamiento humano, ayudando en la salud mental y bienestar emocional.',
      city: ['piura']
    },
    {
      title: 'ADMINISTRACIÓN',
      image: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Fl875g%2FMAGRE1l875g%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAABJOHx4XnNj0DSDrpO2j3H4Mu37yQKo_5-XUlajk1Gv5&exp=1726722664&osig=AAAAAAAAAAAAAAAAAAAAAD1wQ63p8tzNS0X6YNGXb4Lxx9e2Wh0dy5b5m3Y4FyVL&signer=media-rpc&x-canva-quality=thumbnail', 
      description: 'La carrera de Administración prepara a profesionales para gestionar recursos y tomar decisiones estratégicas, impulsando el crecimiento de las organizaciones.',
      city: ['trujillo', 'piura']
    },
    {
      title: 'CONTABILIDAD',
      image: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F_BUBM%2FMAGRE6_BUBM%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAD5MCYdMrbwrUhmvHZDdf2_TOpbFDd6YgBfni1FLGr7f&exp=1726723395&osig=AAAAAAAAAAAAAAAAAAAAACpXG_yCE1LMgxG65yeHabxTeWHymXZDP852d7zXsSfI&signer=media-rpc&x-canva-quality=thumbnail',
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