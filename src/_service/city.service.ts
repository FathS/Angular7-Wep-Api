import { Injectable } from '@angular/core';
import { Icity } from 'src/_model/icity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
baseUrl = 'http://localhost:3466/';
cityList: Icity[];
constructor(private http: HttpClient) { }
getCities(): Observable<Icity[]> {
  return this.http.get <Icity[]>(this.baseUrl + 'City/Liste');
}
updateCities(sehir: Icity): Observable<Icity> {
  return this.http.put <Icity>(this.baseUrl + 'City/Guncel' , sehir);
}
deleteCities(id: number): Observable<Icity> {
  return this.http.delete <Icity>(this.baseUrl + 'City/Sil/' + id);
}
createCities(sehir: Icity): Observable<Icity> {
  return this.http.post <Icity>(this.baseUrl + 'City/Ekle', sehir);
}
}

