import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from '../model/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private url: string = "http://localhost:8080/sede"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Sede[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(sede:Sede){
    return this.http.put(this.url, sede)
  }
}