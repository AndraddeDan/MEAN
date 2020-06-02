import { Component, OnInit } from '@angular/core';
import { DDD, Infos, Plano, Preco } from './models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedDestino: string;
  public selectedOrigem: string;
  public selectedPlano: string;

  public comFaleMaisValue: string;
  public semFaleMaisValue: string;

  public ddd: DDD[] = [];
  public planos: Plano[] = [];
  private precos: Preco[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.infos().subscribe((infos: Infos) => {
      this.planos = infos.planos;
      this.ddd = infos.ddds;
      this.precos = infos.precos;
    });
  }
}
