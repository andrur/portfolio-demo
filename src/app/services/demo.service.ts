import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( private http: HttpClient) { }

  retornar() {
    const url = 'http://scratchya.com.ar/vue/datos.php';
    return this.http.get(url);
  }
}
