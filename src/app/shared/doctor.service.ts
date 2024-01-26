import { Injectable } from '@angular/core';
import { DoctorModel } from './doctor.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  BASE_URL = 'http://localhost:3000';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: HttpClient) { }

  obtenerDoctores(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(this.BASE_URL+'/doctores');
  }

  obtenerDoctor(id: string): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(`${this.BASE_URL}/doctores/${id}`);
  }

  agregarDoctor(doctor: DoctorModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/doctores/agregar`, doctor);
  }

  actualizarDoctor(doctor: DoctorModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/doctores/actualizar/${doctor.iddoctor}`, doctor);
  }

  borrarDoctor(id: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/doctores/borrar/${id}`);
  }
}
