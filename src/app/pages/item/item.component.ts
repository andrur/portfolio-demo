import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoDetalleInterface } from '../../interfaces/producto-detalle.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDetalleInterface;
  id: string;

  constructor( private route: ActivatedRoute,
                public _productoService: ProductoService ) { }

  ngOnInit() {
    this.route.params
        .subscribe( parametros =>{
          // console.log(parametros);
          // console.log(parametros['id']);

          this._productoService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDetalleInterface) => {
                this.producto = producto;
                this.id = parametros['id'];
                //console.log(producto);
              });       

    });
  }

}
