import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface Event {
  id: number;
  name: string;
  description: string;
  Teacher?: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private _eventService: EventService) {}

  ngOnInit() {
    this._eventService.getEvents().subscribe(
      (res: Event[]) => (this.events = res),
      (err: HttpErrorResponse) => {
        console.error('Error occurred:', err.message);
      }
    );
  }
}
