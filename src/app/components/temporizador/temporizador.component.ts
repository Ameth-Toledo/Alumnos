import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.scss'
})
export class TemporizadorComponent implements OnInit {
  
  tiempoRestante : number = 180;
  minutos : number = 0;
  segundos : number = 0;
  temporizadorInterval : any;
  alertaVisible : boolean = false;
  
  ngOnInit(): void {

  }

  iniciarTemporizador() {
    if (this.temporizadorInterval) {
      clearInterval(this.temporizadorInterval)
    } 

    this.tiempoRestante =180;
    this.temporizadorInterval = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante --;
        this.minutos = Math.floor(this.tiempoRestante / 60);
        this.segundos = this.tiempoRestante % 60;
      
        if (this.tiempoRestante === 10) {
          this.AlertPush();
        }
      } else {
        clearInterval(this.temporizadorInterval)
        this.mostrarAlert();
      }
    }, 1000);
  }

  mostrarAlert() {
    Swal.fire({
      title: '¡Tiempo Finalizado!',
      text: 'Lo siento, tu tiempo ha acabado',
      icon : 'info',
      confirmButtonText: 'Aceptar'
    });
  }

  AlertPush() {
    this.alertaVisible = true;
    setTimeout(() => {
      this.alertaVisible = false
    }, 3000);
  }
}
