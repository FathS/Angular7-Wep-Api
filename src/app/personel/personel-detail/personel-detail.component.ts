import { Component, OnInit, Input } from '@angular/core';
import { Ipersonel } from 'src/_model/ipersonel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CityService } from 'src/_service/city.service';
import { Icity } from 'src/_model/icity';

@Component({
  selector: 'app-personel-detail',
  templateUrl: './personel-detail.component.html',
  styleUrls: ['./personel-detail.component.css']
})
export class PersonelDetailComponent implements OnInit {
@Input() secPersonelInput: Ipersonel;
personelForm: FormGroup;
clist: Icity[];
  constructor(private formBuild: FormBuilder, private cityService: CityService) { }

  ngOnInit() {
    this.createPersonelForm();
    this.getCities();
  }
createPersonelForm() {
  this.personelForm = this.formBuild.group({
    id: [''],
    personelName: [
      '', [Validators.required]
    ],
    personelSurname: ['', [Validators.required]],
    name: ['', [Validators.required]]
  });
}
getCities() {
  this.cityService.getCities().subscribe((cities: Icity[]) => {
    this.clist = cities;
    console.log('city list ');
    console.log(this.clist);
  }, err => {
    console.log('Failed');
  });
}
}
