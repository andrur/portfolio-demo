import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
  this.cargarInfo();

  this.cargarEquipo();

  }

  private cargarInfo(){
    console.log('Info Pagina service cargado.');   
    this.http.get('assets/data/data-pagina.json')
       .subscribe( ( resp: InfoPagina) => {
         this.cargada = true;
         this.info = resp;
         console.log( resp.nombre_corto );
       });
  }

  private cargarEquipo(){
    console.log('Info Equipoa service cargado.');
    this.http.get('https://portfolio-56bed.firebaseio.com/equipo.json')
       .subscribe(  (resp: any[])  => {
         // this.cargada = true;
         this.equipo = resp;
         console.log( this.equipo );
       });

  }

}
