
import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";

export class MainPlacesService {
  public http:Http;

  constructor(@Inject(Http) http) {
    this.http = http;
  }

  public getMainPlaces():Observable<any> {
    return this.http.get(`http://localhost/consumer/api/v1/public/places`).map((res:any)=>{
      let parseRes=JSON.parse(res._body);
      return {err:parseRes.error,places:parseRes.data}
    })
  }
}
