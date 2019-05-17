import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 

  constructor( public http: HttpClient) {
    console.log( ' Servicio Usuario listo');
   }

  login ( usuario: Usuario) {   
// tslint:disable-next-line: no-trailing-whitespace
           
    // const URL_SERVICIOS = 'http://localhost/rest-api-authentication-example/api/';
    const URL_SERVICIOS = 'http://localhost/resto-api/portafolio-api.php';
    console.log( usuario );

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario);

  }
}
 