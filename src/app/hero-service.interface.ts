import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';

export abstract class HeroServiceInterface {
  abstract counter$: Observable<number>;
  abstract getHeroes(): Observable<Hero[]>;
  abstract getHeroNo404<Data>(id: number): Observable<Hero>;

}
