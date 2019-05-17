import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public _usuarioService: UsuarioService) {

   }

  ngOnInit() {
  }

  ingresar( forma: NgForm){

      if ( forma.invalid ) {
        return;
      }

      let usuario= new Usuario('100','a','b', forma.value.email, forma.value.password,'','');

      this._usuarioService.login( usuario )
          .subscribe( resp => {
            console.log( resp );
          });
    
      

   // console.log( forma.value );

  };

}
