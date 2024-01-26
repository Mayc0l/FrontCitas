import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../shared/doctor.model';
import { DoctorService } from '../shared/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-doctor',
  templateUrl: './editar-doctor.component.html',
  styleUrls: ['./editar-doctor.component.css']
})
export class EditarDoctorComponent implements OnInit{
  id = ''
  doctor = new DoctorModel("", "", "", "", "", "","")

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.doctorService.obtenerDoctor(this.id).subscribe(data => {
        this.doctor = data[0]
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');
    if(this.doctor.iddoctor) {
      this.doctorService.actualizarDoctor(this.doctor).subscribe(data => {
        alert(data)
        this.router.navigate(['/doctores'])
      })
    } else {
      console.log('crear');
      this.doctorService.agregarDoctor(this.doctor).subscribe(data => {
        alert(data)
        this.router.navigate(['/doctores'])
      })
    }
  }

}
