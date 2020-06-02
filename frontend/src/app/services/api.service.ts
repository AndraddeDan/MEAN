import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  ddds() {
    return this.http.get(this.url + Endpoint.DDDS);
  }

  infos() {
    return this.http.get(this.url + Endpoint.INFOS);
  }

  planos() {
    return this.http.get(this.url + Endpoint.PLANOS);
  }

  precos() {
    return this.http.get(this.url + Endpoint.PRECOS);
  }
}
