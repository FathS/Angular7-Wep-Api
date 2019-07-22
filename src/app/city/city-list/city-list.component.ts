import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/_service/city.service';
import { Icity } from 'src/_model/icity';
import { AlertifyService } from 'src/_service/alertify.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cityList: Icity[];
  secCity: Icity;
  detay = false;
  constructor(private cityService: CityService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getCities();

  }
  getCities() {
    this.cityService.getCities().subscribe((cities: Icity[]) => {
      this.cityList = cities;
    }, err => {
      console.log('Failed');
    });
  }
  getCity(s: Icity) {
    this.secCity = s;
    this.detay = true;
  }
  mouseLeft() {
    this.detay = false;
  }
  // createCity(sehirDto: Icity) {
  //   this.cityService.createCities(sehirDto).subscribe((city: Icity) => {
  //     this.secCity = city;
  //     this.alertify.success('Yeni Kayıt Eklendi');
  //   });
  // }
}
