import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  usuarios: Observable<UsuarioModel[]> | undefined

  constructor(private usuarioService: UsuarioService){ }


  
  ngOnInit() {
    this.obtenerUsuarios(); // Extracted method to get users
  }

  obtenerUsuarios() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  borrarUsuario(id: string) {
    this.usuarioService.borrarUsuario(id).subscribe(
      () => {
        console.log('Usuario eliminado correctamente');
        this.obtenerUsuarios(); // Refresh the user list after deletion
      },
      error => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }
}



