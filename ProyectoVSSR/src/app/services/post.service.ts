import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Form {
  Nombre: string;
  Descripcion: string;
  Cantidad: string;
  Fecha: string;
}

@Injectable({
  providedIn: 'root',
})

export class PostService {
  private url = 'http://localhost:8000/Gastos'

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    return this.http.post(this.url, data);
  } 
}
