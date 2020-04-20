import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatewiseService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get('https://api.covid19india.org/data.json')
      .pipe(map(data => data['statewise']));
  }

  getWorldData() {
    return this.http.get('https://energ.ee/covid19-us-api/states.json');
  }

}
