import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from '../model/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url: string = "http://localhost:8080/docente"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Docente[]>(this.url)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(docente:Docente){
    return this.http.put(this.url, docente)
  }
}
