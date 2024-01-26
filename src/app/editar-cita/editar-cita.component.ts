import { Component, OnInit } from '@angular/core';
import { CitasModel } from '../shared/citas.model';
import { CitasService } from '../shared/citas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
import { DoctorModel } from '../shared/doctor.model';
import { UsuarioService } from '../shared/usuario.service';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {
  id = '';
  cita = new CitasModel('', '', '', '', '', '');
  usuarioSeleccionadoId: string | null = null;
  doctorSeleccionadoId: string | null = null;
  usuarios: UsuarioModel[] = [];
  doctores: DoctorModel[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private doctorService: DoctorService,
    private citasService: CitasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('EDITAR');
      this.citasService.obtenerCita(this.id).subscribe(data => {
        this.cita = data[0];

        // Obtener información del usuario
        this.usuarioService.obtenerUsuarios().subscribe(usuarioData => {
          this.usuarios = usuarioData;
          this.usuarioSeleccionadoId = this.cita.idusuario;
        });

        // Obtener información del doctor
        this.doctorService.obtenerDoctores().subscribe(doctorData => {
          this.doctores = doctorData;
          this.doctorSeleccionadoId = this.cita.iddoctor;
        });
      });
    } else {
      console.log('CREAR');
      // Obtener listado de usuarios y doctores
      this.usuarioService.obtenerUsuarios().subscribe(usuarioData => {
        this.usuarios = usuarioData;
      });

      this.doctorService.obtenerDoctores().subscribe(doctorData => {
        this.doctores = doctorData;
      });
    }
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.cita.idcita) {
      // Verificar que los campos idusuario y iddoctor tengan valores válidos
      if (!this.usuarioSeleccionadoId || !this.doctorSeleccionadoId) {
        alert('Por favor, seleccione un usuario y un doctor antes de guardar la cita.');
        return;
      }

      this.cita.idusuario = this.usuarioSeleccionadoId;
      this.cita.iddoctor = this.doctorSeleccionadoId;

      this.citasService.actualizarCita(this.cita).subscribe(data => {
        alert(data);
        this.router.navigate(['/citas']);
      });
    } else {
      // Verificar que los campos idusuario y iddoctor tengan valores válidos
      if (!this.usuarioSeleccionadoId || !this.doctorSeleccionadoId) {
        alert('Por favor, seleccione un usuario y un doctor antes de guardar la cita.');
        return;
      }

      this.cita.idusuario = this.usuarioSeleccionadoId;
      this.cita.iddoctor = this.doctorSeleccionadoId;

      console.log('crear');
      this.citasService.agregarCita(this.cita).subscribe(data => {
        alert(data);
        this.router.navigate(['/citas']);
      });
    }
  }
}
