import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Alumnos } from '../../models/alumnos';
import { CommonModule } from '@angular/common'; //para usar mas directivas
@Component({
  selector: 'app-card-equipos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card-equipos.component.html',
  styleUrl: './card-equipos.component.scss'
})

export class CardEquiposComponent implements OnInit {
  @Input() equipo : string = '';
  @Input() estudiantes : Alumnos[] = [];

  ngOnInit(): void {
    console.log(`Equipo ${this.equipo}:`, this.estudiantes)
  }
}  
