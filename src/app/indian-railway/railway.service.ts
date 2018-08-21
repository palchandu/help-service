import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RailwayService {

  constructor(private _http:Http) {

   }
   getTrain(){
    return this._http.get(`http://localhost:9002/railway/train`)
                .map((response:Response)=>response.json());
}
}
