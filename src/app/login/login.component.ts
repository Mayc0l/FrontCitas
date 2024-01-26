import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public myForm!:FormGroup;
  constructor(private fb:FormBuilder, private loginPrd:AutenticacionService) { }

  ngOnInit(): void {
    // Lógica de autenticación
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['', [Validators.required]],
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      return;
    }
    if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
      alert("Datos incorrectos, vuelva a intentarlo!")
    }
  }
  public get f():any{
    return this.myForm.controls;
  }
}
