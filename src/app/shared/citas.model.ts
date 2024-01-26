export class CitasModel {
  constructor(
      public idcita: string,
      public idusuario: string,
      public iddoctor: string,
      public fecha: string,
      public sintomas: string,
      public tratamiento: string
  ) { }
}