import { Plano } from './Plano';
import { Preco } from './Preco';
import { DDD } from './DDD';

export interface Infos {
  ddds: DDD[];
  planos: Plano[];
  precos: Preco[];
}
