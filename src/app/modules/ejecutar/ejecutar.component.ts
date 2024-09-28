import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardEquiposComponent } from "../../components/card-equipos/card-equipos.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TemporizadorComponent } from "../../components/temporizador/temporizador.component";
import { Alumnos } from '../../models/alumnos';
import { CardHistorialComponent } from "../../components/card-historial/card-historial.component";

@Component({
  selector: 'app-ejecutar',
  standalone: true,
  imports: [HeaderComponent, CardEquiposComponent, FooterComponent, TemporizadorComponent, CardHistorialComponent],
  templateUrl: './ejecutar.component.html',
  styleUrl: './ejecutar.component.scss'
})
export class EjecutarComponent {
  equipo1 : Alumnos [] = [
    { id: 1, names: 'Ing. Abarca', equipo: '1' },
    { id: 2, names: 'Ing. Melissa', equipo: '1' },
    { id: 3, names: 'Ing. Sujey', equipo: '1' },
    { id: 4, names: 'Ing. Bryan', equipo: '1' },
    { id: 5, names: 'Ing. Milton', equipo: '1' },
    { id: 6, names: 'Ing. Fabricio', equipo: '1' },
    { id: 7, names: 'Ing. Ameth', equipo: '1' },
    { id: 8, names: 'Ing. Manuel de Jesús', equipo: '1' },
    { id: 9, names: 'Ing. Héctor', equipo: '1' },
    { id: 10, names: 'Ing. Gael', equipo: '1' },
    { id: 11, names: 'Ing.Lyz', equipo: '1' },
    { id: 12, names: 'Ing. Luis', equipo: '1' },
    { id: 13, names: 'Ing. Sayuri', equipo: '1' }
  ]

  equipo2 : Alumnos [] = [
    {id: 1, names: 'Ing. Jose', equipo: '2' },
    { id: 2, names: 'Ing. Christopher', equipo: '2' },
    { id: 3, names: 'Ing. Angel', equipo: '2' },
    { id: 4, names: 'Ing. Maximiliano', equipo: '2' },
    { id: 5, names: 'Ing. Eduardo', equipo: '2' },
    { id: 6, names: 'Ing. Fredy', equipo: '2' },
    { id: 7, names: 'Ing. Yara', equipo: '2' },
    { id: 8, names: 'Ing. Bruno', equipo: '2' },
    { id: 9, names: 'Ing. Joaquin', equipo: '2' },
    { id: 10, names: 'Ing. Antonio', equipo: '2' },
    { id: 11, names: 'Ing. Osvaldo', equipo: '2' },
    { id: 12, names: 'Ing. Marcos', equipo: '2' },
    { id: 13, names: 'Ing. Ulises', equipo: '2' }
  ]

  ejecutar() {
    const randomIndex1 = Math.floor(Math.random() * this.equipo1.length);
    const randomIndex2 = Math.floor(Math.random() * this.equipo2.length);

    const selectedStudent1 = this.equipo1[randomIndex1].names;
    const selectedStudent2 = this.equipo2[randomIndex2].names;

    alert(`Seleccionados:\nEquipo 1: ${selectedStudent1}\nEquipo 2: ${selectedStudent2}`)
  }


}
