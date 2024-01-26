import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitasModel } from './citas.model';
import { UsuarioModel } from './usuario.model';
import { DoctorModel } from './doctor.model';


@Injectable({
  providedIn: 'root'
})
export class CitasService {
  
  BASE_URL = 'http://localhost:3000';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: HttpClient) { }

  obtenerCitas(): Observable<CitasModel[]> {
    return this.http.get<CitasModel[]>(`${this.BASE_URL}/citas`);
  }

  obtenerCita(id: string): Observable<CitasModel[]> {
    return this.http.get<CitasModel[]>(`${this.BASE_URL}/citas/${id}`);
  }

  agregarCita(cita: CitasModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/citas/agregar`, cita);
  }

  actualizarCita(cita: CitasModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/citas/actualizar/${cita.idcita}`, cita);
  }

  borrarCita(id: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/citas/borrar/${id}`);
  }

  obtenerUsuario(id: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.BASE_URL}/usuarios/${id}`);
  }

  obtenerDoctor(id: string): Observable<DoctorModel> {
    return this.http.get<DoctorModel>(`${this.BASE_URL}/doctores/${id}`);
  }

}