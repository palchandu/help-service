import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
@Injectable()
export class ViralService{

    constructor( private _http:Http ){
        
    }
    getViral(){
        return this._http.get(`http://localhost:9002/news`)
                    .map((response:Response)=>response.json());
    }

    getTagedNews(param){
        console.log(`http://localhost:9002/news/cat/`+param);
        return this._http.get(`http://localhost:9002/news/cat/`+param)
                    .map((response:Response)=>response.json());
                   
    }
}