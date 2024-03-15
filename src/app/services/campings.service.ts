import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Camping, Provincia} from "../components/campings/campings.interface";

const URLPROVINCIAS="http://localhost:3000/provincias"
const URLCAMPINGS="http://localhost:3000/campings"

const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CampingsService {

  constructor(private http:HttpClient) { };

  getProvincias():Observable<Object>{
    let url=`${URLPROVINCIAS}`
    return this.http.get(url, HTTPOPTIONS);
  }

  getCampings():Observable<Object>{
    let url=`${URLCAMPINGS}`
    return this.http.get(url, HTTPOPTIONS);
  }

  getCamping(id:number):Observable<Object>{
    let url=`${URLCAMPINGS}/${id}`;
    return this.http.get(url,HTTPOPTIONS);
  }

  getCampingsProvincia(provincia:Provincia):Observable<Object>{
    let url=`${URLCAMPINGS}?provincia=${provincia.id}`;
    return this.http.get(url,HTTPOPTIONS);
  }

  crearCamping(camping:Camping):Observable<Object>{
    let url=`${URLCAMPINGS}`;
    return this.http.post(url,camping,HTTPOPTIONS);
  }

  actualizarCamping(camping:Camping):Observable<Object>{
    let url=`${URLCAMPINGS}/${camping.id}`;
    return this.http.put(url,camping,HTTPOPTIONS);
  }

  deleteCamping(camping:Camping):Observable<any>{
    let url=`${URLCAMPINGS}/${camping.id}`;
    return this.http.delete(url);
  }

}
