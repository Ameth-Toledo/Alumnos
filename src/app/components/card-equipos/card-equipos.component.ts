import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-equipos',
  standalone: true,
  imports: [],
  templateUrl: './card-equipos.component.html',
  styleUrl: './card-equipos.component.scss'
})
export class CardEquiposComponent {
  @Input() name : string = '';
  @Input() names : string[] = [];

  
}  
