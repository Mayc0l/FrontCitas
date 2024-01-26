import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CitasModel } from '../shared/citas.model';
import { CitasService } from '../shared/citas.service';
import { UsuarioModel } from '../shared/usuario.model';
import { DoctorModel } from '../shared/doctor.model';
import { UsuarioService } from '../shared/usuario.service';
import { DoctorService } from '../shared/doctor.service';


@Component({
  selector: 'app-lista-lcita',
  templateUrl: './lista-lcita.component.html',
  styleUrls: ['./lista-lcita.component.css']
})
export class ListaLcitaComponent implements OnInit {
  citas: Observable<CitasModel[]> | undefined
  usuarios: { [id: string]: UsuarioModel } = {};
  doctores: { [id: string]: DoctorModel } = {};

  constructor(
    private usuarioService: UsuarioService,
    private doctorService: DoctorService,
    private citasService: CitasService){ }

  ngOnInit() {
    this.citas = this.citasService.obtenerCitas();
    this.usuarioService.obtenerUsuarios().subscribe((usuariosData) => {
      usuariosData.forEach((usuario) => {
        this.usuarios[usuario.idusuario] = usuario;
      });
    });
    this.doctorService.obtenerDoctores().subscribe((doctoresData) => {
      doctoresData.forEach((doctor) => {
        this.doctores[doctor.iddoctor] = doctor;
      });
    });
  }

  getUsuarioNombre(idusuario: string): string {
    return this.usuarios[idusuario] ? this.usuarios[idusuario].nombres : '';
  }

  getDoctorNombre(iddoctor: string): string {
    return this.doctores[iddoctor] ? this.doctores[iddoctor].nombredr : '';
  }

  obtenerCitas() {
    this.citas = this.citasService.obtenerCitas();
  }

  borrarCita(id: string) {
    this.citasService.borrarCita(id).subscribe(
      () => {
        console.log(`Cita eliminado correctamente`);
        this.obtenerCitas(); 
      },
      error => {
        console.error(`Error al eliminar cita:`, error);
      }
    );
  }
}