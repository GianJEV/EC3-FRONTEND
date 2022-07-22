import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrera } from '../model/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private url: string = "http://localhost:8080/carrera"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Carrera[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(carrera:Carrera){
    return this.http.put(this.url, carrera)
  }
}
