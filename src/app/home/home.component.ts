import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}  <ul>
  <li *ngFor="let person of people">{{person.name}}</li>
</ul></h3>`
})
export class HomeComponent implements OnInit {
  public message: string;
  public people;

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
    this.message = 'Hello';
    this.getPeople();
  }

  getPeople() {
    this._peopleService.getPeople().subscribe(
      data => { this.people = data },
      err => console.error(err),
      () => console.log('done loading people')
    );
  }


}
