import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.API;

  constructor(private http: HttpClient) { }

  ddds() {
    return this.http.get(this.url + Endpoint.DDDS);
  }

  planos() {
    return this.http.get(this.url + Endpoint.PLANOS);
  }

  precos() {
    return this.http.get(this.url + Endpoint.PRECOS);
  }

}
