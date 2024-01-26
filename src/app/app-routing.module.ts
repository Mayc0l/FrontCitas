import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaDoctorComponent } from './lista-doctor/lista-doctor.component';
import { EditarDoctorComponent } from './editar-doctor/editar-doctor.component';
import { ListaLcitaComponent } from './lista-lcita/lista-lcita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{ path: 'login', component: LoginComponent }, //cambios aquí 
  {path: 'usuarios', component: ListaCitasComponent},
  {path: 'usuarios/actualizar/:id', component: EditarUsuarioComponent},
  {path: 'usuarios/agregar', component: EditarUsuarioComponent},
  

  {path: 'doctores', component: ListaDoctorComponent},
  {path: 'doctores/actualizar/:id', component: EditarDoctorComponent},
  {path: 'doctores/agregar', component: EditarDoctorComponent},
  
  {path: 'citas', component: ListaLcitaComponent},
  {path: 'citas/actualizar/:id', component: EditarCitaComponent},
  {path: 'citas/agregar', component: EditarCitaComponent},

  {path: '', redirectTo: 'login', pathMatch:'full'} //cambios aquí "usuarios"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
