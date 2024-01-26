import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginPrd:AutenticacionService) {}

  public visualizarMenu(){
    return this.loginPrd.habilitarlogeo();
  }
}