import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Icity } from 'src/_model/icity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/_service/city.service';
import { AlertifyService } from 'src/_service/alertify.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
})
export class CityDetailComponent implements OnInit {
  @Input() secCityInput: Icity;
  cityForm: FormGroup;
  city: Icity;
  msg: string;
  constructor(private formBuild: FormBuilder, private cityService: CityService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.createSehirForm();
  }
  createSehirForm() {
    this.cityForm = this.formBuild.group({
      id: [''],
      sehirAd: ['', [Validators.required, Validators.minLength(3) , Validators.maxLength(50)]]
    });
  }
  updateCity(sehirDto: Icity) {
this.cityService.updateCities(sehirDto).subscribe((city: Icity) => {
this.city = city;
this.alertify.warning('Kayıt Güncellendi');

console.log(city.name + 'Güncellendi');
}, err => {
  console.log(err);
});
  }
  deleteCity(id: number) {
    this.cityService.deleteCities(id).subscribe((city: Icity) => {
    this.city = city;
    this.alertify.error('Kayıt Silindi');
    console.log(city.name + 'Güncellendi');
    }, err => {
      console.log(err);
    });
      }
      createCity(sehirDto: Icity) {
        this.cityService.createCities(sehirDto).subscribe((city: Icity) => {
          this.city = city;
          this.alertify.success('Yeni Kayıt Eklendi');
        });
      }
}
