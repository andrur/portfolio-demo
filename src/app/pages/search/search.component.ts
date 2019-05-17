import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public _productoService: ProductoService) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        console.log(params['termino']);
        this._productoService.buscarProducto( params['termino'] );
      });
  }


}
