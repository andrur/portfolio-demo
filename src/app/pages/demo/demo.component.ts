import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  articulo: any;

  constructor( private _demoService: DemoService ) { }

  ngOnInit() {
    this.mostrarRetornar();
  }

  mostrarRetornar () {
    this._demoService.retornar()
    .subscribe( resp => {
      console.log (resp);
      this.articulo = resp;
    });
  }

}
