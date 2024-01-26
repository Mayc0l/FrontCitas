export class UsuarioModel {
    constructor(
       public idusuario: string,
        public cedula: string,
        public nombres: string,
        public apellidos: string,
        public direccion: string,
        public celular: string

    ) { }
}