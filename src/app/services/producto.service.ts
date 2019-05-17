import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos() {

      return new Promise( ( resolve, reject ) => {

        this.http.get('https://portfolio-56bed.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: ProductoInterface[]) => {
          // console.log(resp);
          this.productos = resp;
          this.cargando = false;
          resolve();
          /*
          setTimeout( () => {
            this.cargando = false;
          }, 2000);
          */
      });

      });



   }

   getProducto( id: string ) {
     return this.http.get(`https://portfolio-56bed.firebaseio.com/productos/${ id }.json`);
   }

   buscarProducto ( termino: string ) {

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino );        
      });
    } else {
      this.filtrarProductos( termino );
    }
  
   }

   private filtrarProductos( termino: string) {

      // console.log( this.productos );
      this.productosFiltrado = [];
      termino = termino.toLocaleLowerCase();

      this.productos.forEach( prod => {
        const tituloLower = prod.titulo.toLocaleLowerCase();

        if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
          this.productosFiltrado.push( prod );
        }
      });
      // console.log( this.productosFiltrado )
   }

}
