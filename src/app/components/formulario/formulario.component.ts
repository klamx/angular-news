import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimineto' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnologia' },
  ];

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'co', nombre: 'Colombia' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'us', nombre: 'Estados Unidos' },
    { value: 'kr', nombre: 'Corea' },
    { value: 'fr', nombre: 'Francia' },
  ];

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia(): void {
    const parametros = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };

    this.parametrosSeleccionados.emit(parametros);
  }
}
