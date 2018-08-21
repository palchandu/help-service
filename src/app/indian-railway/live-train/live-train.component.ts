import { Component, OnInit } from '@angular/core';
import {Observable,fromEvent} from 'rxjs';
import {map, filter, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-live-train',
  templateUrl: './live-train.component.html',
  styleUrls: ['./live-train.component.css']
})
export class LiveTrainComponent implements OnInit {

  public model: any;
  values='';

  constructor() { }

  ngOnInit() {
  }
  onKey(event:any){
    this.values=event.target.value;

  }
  // typeahead = fromEvent(this.searchBox, 'input').pipe(
  //   map((e: KeyboardEvent) => e.target.value),
  //   filter(text => text.length > 2),
  //   debounceTime(10),
  //   distinctUntilChanged(),
  //   switchMap(() => ajax('/api/endpoint'))
  // );
}
