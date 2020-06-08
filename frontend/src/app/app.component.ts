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
  public selectedTempo: number;
  public selectedPlano: Plano;

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

  private get canCalc() {
    return this.selectedOrigem !== undefined
      && this.selectedDestino !== undefined
      && this.selectedTempo !== undefined
      && this.selectedPlano !== undefined;
  }

  public calcTarifa(temPlano?: boolean) {
    const precoAtual = this.precos
      .find(i => i.destino === this.selectedDestino && i.origem === this.selectedOrigem);

    if (!precoAtual && this.canCalc) { return 'Indisponível'; }

    const planoCalculo = (precoAtual?.valorMinuto * (this.selectedTempo - this.selectedPlano?.minutosGratis));
    const plano = planoCalculo > 0 ? planoCalculo : 0;

    const calc = () => {
      if (temPlano) {
        return this.selectedTempo > this.selectedPlano.minutosGratis ? plano + (plano / 10) : plano;
      } else {
        return precoAtual.valorMinuto * this.selectedTempo;
      }
    };

    return this.canCalc ? 'R$ ' + calc().toFixed(2) : 'R$ 0,00';
  }
}
