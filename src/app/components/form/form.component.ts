import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  equipoSeleccionado: string | null = null;

  elejirEquipo() {
    this.equipoSeleccionado = Math.random() < 0.5 ? 'huey' : 'dewey';
    const equipoNombre = this.equipoSeleccionado === 'huey' ? 'Equipo 1' : 'Equipo 2';

    Swal.fire({
      title: '¡Equipo Seleccionado!',
      text: `Te ha tocado el equipo: ${equipoNombre}`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'btn-swal' 
      }
    });
  }

  estaDeshabilitado(equipo: string): boolean {
    return this.equipoSeleccionado !== null && this.equipoSeleccionado !== equipo;
  }

  estaSeleccionado(equipo: string): boolean {
    return this.equipoSeleccionado === equipo;
  }
}
