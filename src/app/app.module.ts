import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuarioService } from './shared/usuario.service';
import { CommonModule } from '@angular/common';
import { EditarDoctorComponent } from './editar-doctor/editar-doctor.component';
import { ListaDoctorComponent } from './lista-doctor/lista-doctor.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { ListaLcitaComponent } from './lista-lcita/lista-lcita.component';
import { DoctorService } from './shared/doctor.service';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListaCitasComponent,
    EditarUsuarioComponent,
    EditarDoctorComponent,
    ListaDoctorComponent,
    EditarCitaComponent,
    ListaLcitaComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsuarioService,
    DoctorService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})
export class AppModule { }
