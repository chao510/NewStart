import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';
import { HeroServiceInterface } from './hero-service.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  counter$ : Observable<number> = this.heroService.counter$;

  constructor(
    public messageService: MessageService,
    public heroService: HeroServiceInterface

  ) {}

  ngOnInit() {

  }
}
