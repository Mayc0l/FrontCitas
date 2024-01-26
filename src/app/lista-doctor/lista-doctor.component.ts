import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorModel } from '../shared/doctor.model';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-lista-doctor',
  templateUrl: './lista-doctor.component.html',
  styleUrls: ['./lista-doctor.component.css']
})
export class ListaDoctorComponent implements OnInit{

  doctores: Observable<DoctorModel[]> | undefined

  constructor(private doctorService: DoctorService){ }

  ngOnInit() {
    this.obtenerDoctores(); // Extracted method to get users
  }

  obtenerDoctores() {
    this.doctores = this.doctorService.obtenerDoctores();
  }

  borrarDoctor(id: string) {
    this.doctorService.borrarDoctor(id).subscribe(
      () => {
        console.log(`Doctor eliminado correctamente`);
        this.obtenerDoctores(); // Refresh the user list after deletion
      },
      error => {
        console.error(`Error al eliminar doctor:`, error);
      }
    );
  }
}
