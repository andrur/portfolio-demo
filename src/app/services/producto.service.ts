import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando = true;
  productos: ProductoInterface[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
      this.http.get('https://portfolio-56bed.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: ProductoInterface[]) => {
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
        /*
        setTimeout( () => {
          this.cargando = false;
        }, 2000);
        */
        
        
    });
   }
}
