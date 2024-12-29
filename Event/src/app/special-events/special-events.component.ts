import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export interface SpecialEvent {
  id: number;
  name: string;
  description: string;
  Teacher?: string;
}

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html'
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: SpecialEvent[] = [];

  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      (res: SpecialEvent[]) => (this.specialEvents = res),
      (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this._router.navigate(['/login']);
        } else {
          console.error('Error occurred:', err.message);
        }
      }
    );
  }
}
