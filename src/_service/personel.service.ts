import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipersonel } from 'src/_model/ipersonel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
baseUrl = 'http://localhost:3466/';
constructor(private http: HttpClient) { }
getPersonel(): Observable<Ipersonel[]> {
  return this.http.get <Ipersonel[]>(this.baseUrl + 'Personel/Liste');
}
}
