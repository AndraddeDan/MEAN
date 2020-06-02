import { Plano } from './Plano';
import { Preco } from './Preco';

export interface Infos {
  ddds: string[];
  planos: Plano[];
  precos: Preco[];
}
