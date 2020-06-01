import { Component, OnInit } from '@angular/core';
import { Plano } from './models';

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

  public ddd: number[] = [11, 16, 17, 18];
  public planos: Plano[] = [];

  ngOnInit() {

  }
}
