import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardEquiposComponent } from "../../components/card-equipos/card-equipos.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TemporizadorComponent } from "../../components/temporizador/temporizador.component";

@Component({
  selector: 'app-ejecutar',
  standalone: true,
  imports: [HeaderComponent, CardEquiposComponent, FooterComponent, TemporizadorComponent],
  templateUrl: './ejecutar.component.html',
  styleUrl: './ejecutar.component.scss'
})
export class EjecutarComponent {

}
