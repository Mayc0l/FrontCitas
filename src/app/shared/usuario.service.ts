import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  BASE_URL = 'http://localhost:3000';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.BASE_URL+'/usuarios');
  }

  obtenerUsuario(id: string): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/usuarios/${id}`);
  }

  agregarUsuario(usuario: UsuarioModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/usuarios/agregar`, usuario);
  }

  actualizarUsuario(usuario: UsuarioModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar/${usuario.idusuario}`, usuario);
  }

  borrarUsuario(id: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/usuarios/borrar/${id}`);
  }
}
